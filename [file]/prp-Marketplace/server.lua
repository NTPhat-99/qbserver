local QBCore = exports['qb-core']:GetCoreObject()
local Webhook = ''

TriggerEvent('QBCore:GetObject', function(obj) QBCore = obj end)

local ItemList = {
    ["goldchain"] = math.random(100, 250),
    ["diamond_ring"] = math.random(200, 350),
	["plastic"] = math.random(50, 100),
    ["metalscrap"] = math.random(20, 50),
    ["copper"] = math.random(10, 30),
    ["iron"] = math.random(20, 40),
    ["aluminum"] = math.random(80, 150),
    ["steel"] = math.random(30, 60),
    ["glass"] = math.random(10, 20),
    ["rolex"] = math.random(300, 500),
}



QBCore.Functions.CreateCallback('okokMarketplace:getItems', function(source, cb)
	local _source = source
	local Player = QBCore.Functions.GetPlayer(_source)
	if Player ~= nil then
		MySQL.Async.fetchAll('SELECT * FROM player_vehicles WHERE citizenid = @citizenid AND state = @state', {
			['@citizenid'] = Player.PlayerData['citizenid'],
			['@state'] = "in",
		}, function(data) 
			cb(data, Player.PlayerData.items, Player.PlayerData.items)
		end)
	end
end)

QBCore.Functions.CreateCallback('okokMarketplace:getAds', function(source, cb)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)

	MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_vehicles ORDER BY id ASC', {
	}, function(veh) 
		MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_items ORDER BY id ASC', {
		}, function(items) 
			MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_blackmarket ORDER BY id ASC', {
			}, function(blackmarket) 
				cb(veh, items, blackmarket, xPlayer.PlayerData['citizenid'])
			end)
		end)
	end)
end)

QBCore.Functions.CreateCallback('okokMarketplace:phone', function(source, cb)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	cb(xPlayer.PlayerData.charinfo.phone)
end)



RegisterServerEvent("okokMarketplace:addVehicle")
AddEventHandler("okokMarketplace:addVehicle", function(vehicle, price, desc, phone_number)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	local plate = vehicle.plate
	local id = plate:gsub("%s+", "")

	MySQL.Async.execute('UPDATE player_vehicles SET citizenid = @citizenid WHERE plate = @plate', {
		['@plate'] = vehicle.plate,
		['@citizenid'] = "selling",
	})

	MySQL.Async.insert('INSERT INTO okokMarketplace_vehicles (item_id, plate, label, author_identifier, author_name, phone_number, description, price, start_date) VALUES (@item_id, @plate, @label, @author_identifier, @author_name, @phone_number, @description, @price, @start_date)', {
		['@item_id'] = id,
		['@plate'] = plate,
		['@label'] = vehicle.name,
		['@author_identifier'] = xPlayer.PlayerData['citizenid'],
		['@author_name'] = xPlayer.PlayerData.charinfo.firstname,
		['@phone_number'] = xPlayer.PlayerData.charinfo.phone,
		['@description'] = desc,
		['@price'] = price,
		['@start_date'] = os.date("%d/%m - %H:%M"),
	}, function(result)
		TriggerClientEvent('okokMarketplace:updateVehiclesDropdown', xPlayer.PlayerData.source)
		TriggerClientEvent('okokMarketplace:updateVehicles', xPlayer.PlayerData.source)
		TriggerClientEvent('okokMarketplace:updateMyAdsTable', xPlayer.PlayerData.source)
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You are now selling the vehicle "..vehicle.name.." ("..vehicle.plate..")", "success", 5000)

		if Webhook ~= '' then
			local identifierlist = ExtractIdentifiers(xPlayer.source)
			local data = {
				playerid = xPlayer.source,
				identifier = identifierlist.license:gsub("license2:", ""),
				discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
				type = "add",
				action = "Added an Ad",
				item = vehicle.name.." ("..vehicle.plate..")",
				price = price,
				desc = desc,
				title = "MARKETPLACE - Vehicles",
			}
			discordWenhook(data)
		end
	end)
end)

RegisterServerEvent("okokMarketplace:addItem")
AddEventHandler("okokMarketplace:addItem", function(item, amount, price, desc, phone_number)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	local amount = tonumber(amount)

	if xPlayer.Functions.GetItemByName(item.id, amount) then
		MySQL.Async.insert('INSERT INTO okokMarketplace_items (item_id, label, amount, author_identifier, author_name, phone_number, description, price, start_date) VALUES (@item_id, @label, @amount, @author_identifier, @author_name, @phone_number, @description, @price, @start_date)', {
			['@item_id'] = item.id,
			['@label'] = item.label,
			['@amount'] = amount,
			['@author_identifier'] = xPlayer.PlayerData['citizenid'],
			['@author_name'] = xPlayer.PlayerData.charinfo.firstname,
			['@phone_number'] = xPlayer.PlayerData.charinfo.phone,
			['@description'] = desc,
			['@price'] = price,
			['@start_date'] = os.date("%d/%m - %H:%M"),
		}, function(result)
			TriggerClientEvent('okokMarketplace:updateItemsDropdown', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateItems', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateMyAdsTable', xPlayer.PlayerData.source)
			xPlayer.Functions.RemoveItem(item.id, amount)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You are now selling the item "..item.label.." ("..amount..")", "success", 5000)

			if Webhook ~= '' then
				local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
				local data = {
					playerid = xPlayer.PlayerData.source,
					identifier = identifierlist.license:gsub("license2:", ""),
					discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
					type = "add",
					action = "Added an Ad",
					item = item.label.." (x"..amount..")",
					price = price,
					desc = desc,
					title = "MARKETPLACE - Items",
				}
				discordWenhook(data)
			end
		end)
	else
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You don't have enough items to sell", "error", 5000)
	end
end)

RegisterServerEvent("okokMarketplace:addBlackmarket")
AddEventHandler("okokMarketplace:addBlackmarket", function(item, price, desc, phone_number, amount)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)

	if item.type == "weapon" and xPlayer.Functions.GetItemByName(item.id, amount) then
		MySQL.Async.insert('INSERT INTO okokMarketplace_blackmarket (item_id, label, type, amount, author_identifier, author_name, phone_number, description, price, start_date) VALUES (@item_id, @label, @type, @amount, @author_identifier, @author_name, @phone_number, @description, @price, @start_date)', {
			['@item_id'] = item.id,
			['@label'] = item.label,
			['@type'] = item.type,
			['@amount'] = amount,
			['@author_identifier'] = xPlayer.PlayerData['citizenid'],
			['@author_name'] = xPlayer.PlayerData.charinfo.firstname,
			['@phone_number'] = xPlayer.PlayerData.charinfo.phone,
			['@description'] = desc,
			['@price'] = price,
			['@start_date'] = os.date("%d/%m - %H:%M"),
		}, function(result)
			TriggerClientEvent('okokMarketplace:updateBlackmarketDropdown', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateBlackmarket', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateMyAdsTable', xPlayer.PlayerData.source)
			xPlayer.Functions.RemoveItem(item.id, amount)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You are now selling the item "..item.label, "success", 5000)

			if Webhook ~= '' then
				local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
				local data = {
					playerid = xPlayer.PlayerData.source,
					identifier = identifierlist.license:gsub("license2:", ""),
					discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
					type = "add",
					action = "Added an Ad",
					item = item.label.." (x"..amount..")",
					price = price,
					desc = desc,
					title = "MARKETPLACE - Blackmarket",
				}
				discordWenhook(data)
			end
		end)
	elseif item.type == "item" and xPlayer.Functions.GetItemByName(item.id, amount) then
		MySQL.Async.insert('INSERT INTO okokMarketplace_blackmarket (item_id, label, type, amount, author_identifier, author_name, phone_number, description, price, start_date) VALUES (@item_id, @label, @type, @amount, @author_identifier, @author_name, @phone_number, @description, @price, @start_date)', {
			['@item_id'] = item.id,
			['@label'] = item.label,
			['@type'] = item.type,
			['@amount'] = amount,
			['@author_identifier'] = xPlayer.PlayerData['citizenid'],
			['@author_name'] = xPlayer.PlayerData.charinfo.firstname,
			['@phone_number'] = xPlayer.PlayerData.charinfo.phone,
			['@description'] = desc,
			['@price'] = price,
			['@start_date'] = os.date("%d/%m - %H:%M"),
		}, function(result)
			TriggerClientEvent('okokMarketplace:updateBlackmarketDropdown', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateBlackmarket', xPlayer.PlayerData.source)
			TriggerClientEvent('okokMarketplace:updateMyAdsTable', xPlayer.PlayerData.source)
			xPlayer.Functions.RemoveItem(item.id, amount)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You are now selling the item "..item.label, "success", 5000)

			if Webhook ~= '' then
				local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
				local data = {
					playerid = xPlayer.PlayerData.source,
					identifier = identifierlist.license:gsub("license2:", ""),
					discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
					type = "add",
					action = "Added an Ad",
					item = item.label.." (x"..amount..")",
					price = price,
					desc = desc,
					title = "MARKETPLACE - Blackmarket",
				}
				discordWenhook(data)
			end
		end)
	else
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You don't have enough "..item.label.." to sell", "error", 5000)
	end
end)

QBCore.Functions.CreateCallback('okokMarketplace:getVehicle', function(source, cb, id)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_vehicles WHERE item_id = @item_id AND sold = false', {
		['@item_id'] = id,
	}, function(veh)
		if veh[1] ~= nil then
			cb(veh)
		else
			TriggerClientEvent('okokMarketplace:updateVehicles', xPlayer.PlayerData.source)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "This vehicle is no longer for sale", "error", 5000)
		end
	end)
end)

QBCore.Functions.CreateCallback('okokMarketplace:getItem', function(source, cb, id, item)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)

	MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_items WHERE id = @id AND item_id = @item_id AND sold = false', {
		['@id'] = id,
		['@item_id'] = item,
	}, function(item)
		if item[1] ~= nil then
			cb(item)
		else
			TriggerClientEvent('okokMarketplace:updateItems', xPlayer.PlayerData.source)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "This item is no longer for sale", "error", 5000)
		end
	end)
end)

QBCore.Functions.CreateCallback('okokMarketplace:getBlackmarket', function(source, cb, id, blackmarket)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)

	MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_blackmarket WHERE id = @id AND item_id = @item_id AND sold = false', {
		['@id'] = id,
		['@item_id'] = blackmarket,
	}, function(blackmarket)
		if blackmarket[1] ~= nil then
			cb(blackmarket)
		else
			TriggerClientEvent('okokMarketplace:updateBlackmarket', xPlayer.PlayerData.source)
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "This item is no longer for sale", "error", 5000)
		end
	end)
end)

RegisterServerEvent("okokMarketplace:buyVehicle")
AddEventHandler("okokMarketplace:buyVehicle", function(veh)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	local xTarget = QBCore.Functions.GetPlayerByCitizenId(veh[1].author_identifier)
	local price = tonumber(veh[1].price)

	if (xPlayer.PlayerData.money.bank - price) >= 0 then
		MySQL.Async.execute('UPDATE okokMarketplace_vehicles SET sold = 1 WHERE plate = @plate AND sold = 0', {['@plate'] = veh[1].plate},
		function (rowsChanged)
			if rowsChanged > 0 then
				xPlayer.Functions.RemoveMoney('bank', price)
				MySQL.Async.execute('UPDATE player_vehicles SET citizenid = @citizenid WHERE plate = @plate', {
					['@plate'] = veh[1].plate,
					['@citizenid'] = xTarget.PlayerData['citizenid'],
				})
				TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You bought the vehicle "..veh[1].label.." ("..veh[1].plate..")", "error", 5000)
				TriggerClientEvent('okokMarketplace:updateVehiclesDropdown', xPlayer.PlayerData.source)
				TriggerClientEvent('okokMarketplace:updateVehicles', xPlayer.PlayerData.source)
				if xTarget ~= nil then
					TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You sold the vehicle "..veh[1].label.." ("..veh[1].plate..")", "error", 5000)
				end
				if Webhook ~= '' then
					local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
					local data = {
						playerid = xPlayer.PlayerData.source,
						identifier = identifierlist.license:gsub("license2:", ""),
						discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
						type = "buy",
						action = "Bought a vehicle",
						item = veh[1].label.." ("..veh[1].plate..")",
						price = veh[1].price,
						desc = veh[1].description,
						from = veh[1].author_name.." ("..veh[1].author_identifier..")",
						title = "MARKETPLACE - Vehicles",
					}
					discordWenhook(data)
				end
			else
				TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
			end
		end)
	else
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You don't have enough money to buy this vehicle", "error", 5000)
	end
end)

RegisterServerEvent("okokMarketplace:buyItem")
AddEventHandler("okokMarketplace:buyItem", function(item)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	local xTarget = QBCore.Functions.GetSource(item[1].author_identifier)
	local price = tonumber(item[1].price)

	if (xPlayer.PlayerData.money.bank - price) >= 0 then
		MySQL.Async.execute('UPDATE okokMarketplace_items SET sold = 1 WHERE id = @id AND item_id = @item_id AND sold = 0', {
			['@id'] = item[1].id,
			['@item_id'] = item[1].item_id,
		},function (rowsChanged)
			if rowsChanged > 0 then
				xPlayer.Functions.RemoveMoney('bank', price)
				xPlayer.Functions.AddItem(item[1].item_id, item[1].amount)

				TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You bought the item "..item[1].label.." (x"..item[1].amount..")", "success", 5000)
				TriggerClientEvent('okokMarketplace:updateItemsDropdown', xPlayer.PlayerData.source)
				TriggerClientEvent('okokMarketplace:updateItems', xPlayer.PlayerData.source)
				if xTarget ~= nil then
					TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You sold the item "..item[1].label.." (x"..item[1].amount..")", "success", 5000)
				end
				if Webhook ~= '' then
					local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
					local data = {
						playerid = xPlayer.PlayerData.source,
						identifier = identifierlist.license:gsub("license2:", ""),
						discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
						type = "buy",
						action = "Bought an item",
						item = item[1].label.." (x"..item[1].amount..")",
						price = item[1].price,
						desc = item[1].description,
						from = item[1].author_name.." ("..item[1].author_identifier..")",
						title = "MARKETPLACE - Items",
					}
					discordWenhook(data)
				end
			else
				TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
			end
		end)
	else
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You don't have enough money to buy this item", "error", 5000)
	end
end)

RegisterServerEvent("okokMarketplace:buyBlackmarket")
AddEventHandler("okokMarketplace:buyBlackmarket", function(blackmarket)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)
	local xTarget = QBCore.Functions.GetSource(blackmarket[1].author_identifier)
	local price = tonumber(blackmarket[1].price)

	if xPlayer.Functions.RemoveMoney('cash', price) then
		
		if blackmarket[1].type == "item" and xPlayer.Functions.AddItem(blackmarket[1].item_id, 1) then
			MySQL.Async.execute('UPDATE okokMarketplace_blackmarket SET sold = 1 WHERE id = @id AND item_id = @item_id AND sold = 0', {
					['@id'] = blackmarket[1].id,
					['@item_id'] = blackmarket[1].item_id,
				},function (rowsChanged)
					if rowsChanged > 0 then
				
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You bought the item "..blackmarket[1].label, "success", 5000)
						TriggerClientEvent('okokMarketplace:updateBlackmarketDropdown', xPlayer.PlayerData.source)
						TriggerClientEvent('okokMarketplace:updateBlackmarket', xPlayer.PlayerData.source)
						if xTarget ~= nil then
							TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You sold the item "..blackmarket[1].label, "success", 5000)
						end
						if Webhook ~= '' then
							local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
							local data = {
								playerid = xPlayer.PlayerData.source,
								identifier = identifierlist.license:gsub("license2:", ""),
								discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
								type = "buy",
								action = "Bought an item",
								item = blackmarket[1].label.." (x"..blackmarket[1].amount..")",
								price = blackmarket[1].price,
								desc = blackmarket[1].description,
								from = blackmarket[1].author_name.." ("..blackmarket[1].author_identifier..")",
								title = "MARKETPLACE - Blackmarket",
							}
							discordWenhook(data)
						end
					else
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
					end
				end)

				

		elseif blackmarket[1].type == "weapon" and not xPlayer.Functions.GetItemByName(blackmarket[1].item_id) then
			MySQL.Async.execute('UPDATE okokMarketplace_blackmarket SET sold = 1 WHERE id = @id AND item_id = @item_id AND sold = 0', {
				['@id'] = blackmarket[1].id,
				['@item_id'] = blackmarket[1].item_id,
			},function (rowsChanged)
				if rowsChanged > 0 then
					xPlayer.Functions.AddItem(blackmarket[1].item_id, blackmarket[1].amount)

					xPlayer.Functions.RemoveMoney('cash', price)

					TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You bought the item "..blackmarket[1].label, "success", 5000)
					TriggerClientEvent('okokMarketplace:updateBlackmarketDropdown', xPlayer.PlayerData.source)
					TriggerClientEvent('okokMarketplace:updateBlackmarket', xPlayer.PlayerData.source)
					if xTarget ~= nil then
						TriggerClientEvent("QBCore:Notify", xTarget.PlayerData.source, "You sold the item "..blackmarket[1].label, "success", 5000)
					end
					if Webhook ~= '' then
						local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
						local data = {
							playerid = xPlayer.PlayerData.source,
							identifier = identifierlist.license:gsub("license2:", ""),
							discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
							type = "buy",
							action = "Bought an item",
							item = blackmarket[1].label.." (x"..blackmarket[1].amount..")",
							price = blackmarket[1].price,
							desc = blackmarket[1].description,
							from = blackmarket[1].author_name.." ("..blackmarket[1].author_identifier..")",
							title = "MARKETPLACE - Blackmarket",
						}
						discordWenhook(data)
					end
				else
					TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
				end
			end)
		else
			TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You can't carry this item", "error", 5000)
		end
	else
		TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You don't have enough money to buy this item", "error", 5000)
	end
end)

RegisterServerEvent("okokMarketplace:removeMyAd")
AddEventHandler("okokMarketplace:removeMyAd", function(item)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(_source)

	if item.plate then
		MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_vehicles WHERE item_id = @item_id AND id = @id', {
			['@item_id'] = item.item_id,
			['@id'] = item.id,
		}, function(veh)
			MySQL.Async.execute('DELETE FROM okokMarketplace_vehicles WHERE item_id = @item_id AND id = @id', {
				['@id'] = veh[1].id,
				['@item_id'] = veh[1].item_id,
			},function (rowDeleted)
				if rowDeleted > 0 then
					if veh[1].sold then
						xPlayer.Functions.AddMoney('bank', tonumber(veh[1].price))
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You claimed "..veh[1].price.." €", "error", 5000)
						if Webhook ~= '' then
							local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
							local data = {
								playerid = xPlayer.PlayerData.source,
								identifier = identifierlist.license:gsub("license2:", ""),
								discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
								type = "claim",
								action = "Claimed an Ad",
								item = veh[1].label.." ("..veh[1].plate..")",
								price = veh[1].price,
								desc = veh[1].description,
								title = "MARKETPLACE - Vehicles",
							}
							discordWenhook(data)
						end
					else
						MySQL.Async.execute('UPDATE player_vehicles SET citizenid = @citizenid WHERE plate = @plate', {
							['@plate'] = veh[1].plate,
							['@citizenid'] = xPlayer.PlayerData['citizenid'],
						})
						TriggerClientEvent('okokMarketplace:updateVehiclesDropdown', xPlayer.PlayerData.source)
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You canceled the AD "..veh[1].label.." ("..veh[1].plate..")", "error", 5000)
						if Webhook ~= '' then
							local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
							local data = {
								playerid = xPlayer.PlayerData.source,
								identifier = identifierlist.license:gsub("license2:", ""),
								discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
								type = "cancel",
								action = "Canceled an Ad",
								item = veh[1].label.." ("..veh[1].plate..")",
								price = veh[1].price,
								desc = veh[1].description,
								title = "MARKETPLACE - Vehicles",
							}
							discordWenhook(data)
						end
					end
				else
					TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
				end
			end)
		end)
	elseif item.type then
		MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_blackmarket WHERE item_id = @item_id AND id = @id', {
			['@item_id'] = item.item_id,
			['@id'] = item.id,
		}, function(blackmarket)
			local canCarry = true

			if canCarry then
				MySQL.Async.execute('DELETE FROM okokMarketplace_blackmarket WHERE item_id = @item_id AND id = @id', {
					['@id'] = blackmarket[1].id,
					['@item_id'] = blackmarket[1].item_id,
				},function (rowDeleted)
					if rowDeleted > 0 then
						if blackmarket[1].sold then
							xPlayer.Functions.AddMoney('bank', tonumber(blackmarket[1].price))
							TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You claimed "..blackmarket[1].price.." €", "success", 5000)
							if Webhook ~= '' then
								local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
								local data = {
									playerid = xPlayer.PlayerData.source,
									identifier = identifierlist.license:gsub("license2:", ""),
									discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
									type = "claim",
									action = "Claimed an Ad",
									item = blackmarket[1].label.." (x"..blackmarket[1].amount..")",
									price = blackmarket[1].price,
									desc = blackmarket[1].description,
									title = "MARKETPLACE - Blackmarket",
								}
								discordWenhook(data)
							end
						else
							if blackmarket[1].type == "weapon" then
								xPlayer.Functions.AddItem(blackmarket[1].item_id, 1)
							elseif blackmarket[1].type == "item" then
								xPlayer.Functions.AddItem(blackmarket[1].item_id, tonumber(blackmarket[1].amount))
							end
							TriggerClientEvent('okokMarketplace:updateBlackmarketDropdown', xPlayer.PlayerData.source)
							TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You canceled the AD "..blackmarket[1].label.." (x"..blackmarket[1].amount..")", "success", 5000)
							if Webhook ~= '' then
								local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
								local data = {
									playerid = xPlayer.PlayerData.source,
									identifier = identifierlist.license:gsub("license2:", ""),
									discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
									type = "cancel",
									action = "Canceled an Ad",
									item = blackmarket[1].label.." (x"..blackmarket[1].amount..")",
									price = blackmarket[1].price,
									desc = blackmarket[1].description,
									title = "MARKETPLACE - Blackmarket",
								}
								discordWenhook(data)
							end
						end
					else
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "success", 5000)
					end
				end)
			end
		end)
	else
		MySQL.Async.fetchAll('SELECT * FROM okokMarketplace_items WHERE item_id = @item_id AND id = @id', {
			['@item_id'] = item.item_id,
			['@id'] = item.id,
		}, function(items)
				MySQL.Async.execute('DELETE FROM okokMarketplace_items WHERE item_id = @item_id AND id = @id', {
					['@id'] = items[1].id,
					['@item_id'] = items[1].item_id,
				},function (rowDeleted)
					if rowDeleted > 0 then
						if items[1].sold then
							xPlayer.Functions.AddMoney('bank', tonumber(items[1].price))
							TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You claimed "..items[1].price.." €", "success", 5000)
							if Webhook ~= '' then
								local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
								local data = {
									playerid = xPlayer.PlayerData.source,
									identifier = identifierlist.license:gsub("license2:", ""),
									discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
									type = "claim",
									action = "Claimed an Ad",
									item = items[1].label.." (x"..items[1].amount..")",
									price = items[1].price,
									desc = items[1].description,
									title = "MARKETPLACE - Items",
								}
								discordWenhook(data)
							end

						else
							--xPlayer.addInventoryItem(items[1].item_id, tonumber(items[1].amount))
							xPlayer.Functions.AddItem(items[1].item_id, tonumber(items[1].amount))
							TriggerClientEvent('okokMarketplace:updateItemsDropdown', xPlayer.PlayerData.source)
							TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "You canceled the AD "..items[1].label.." (x"..items[1].amount..")", "success", 5000)
							if Webhook ~= '' then
								local identifierlist = ExtractIdentifiers(xPlayer.PlayerData.source)
								local data = {
									playerid = xPlayer.PlayerData.source,
									identifier = identifierlist.license:gsub("license2:", ""),
									discord = "<@"..identifierlist.discord:gsub("discord:", "")..">",
									type = "cancel",
									action = "Canceled an Ad",
									item = items[1].label.." (x"..items[1].amount..")",
									price = items[1].price,
									desc = items[1].description,
									title = "MARKETPLACE - Items",
								}
								discordWenhook(data)
							end
						end
					else
						TriggerClientEvent("QBCore:Notify", xPlayer.PlayerData.source, "Something went wrong, please try again later!", "error", 5000)
					end
				end)
		end)
	end
	TriggerClientEvent('okokMarketplace:updateMyAds', xPlayer.PlayerData.source)
end)

-------------------------- IDENTIFIERS

function ExtractIdentifiers(id)
	local identifiers = {
		steam = "",
		ip = "",
		discord = "",
		license = "",
		xbl = "",
		live = ""
	}

	for i = 0, GetNumPlayerIdentifiers(id) - 1 do
		local playerID = GetPlayerIdentifier(id, i)

		if string.find(playerID, "steam") then
			identifiers.steam = playerID
		elseif string.find(playerID, "ip") then
			identifiers.ip = playerID
		elseif string.find(playerID, "discord") then
			identifiers.discord = playerID
		elseif string.find(playerID, "license") then
			identifiers.license = playerID
		elseif string.find(playerID, "xbl") then
			identifiers.xbl = playerID
		elseif string.find(playerID, "live") then
			identifiers.live = playerID
		end
	end

	return identifiers
end

-------------------------- WEBHOOK

function discordWenhook(data)
	local color = '65352'
	local category = 'test'

	local information = {}

	if data.type == 'add' then
		color = Config.AddAdColor
	elseif data.type == 'buy' then
		color = Config.BuyItemColor
		information = {
			{
				["color"] = color,
				["author"] = {
					["icon_url"] = Config.IconURL,
					["name"] = Config.ServerName..' - Logs',
				},
				["title"] = data.title,
				["description"] = '**Action:** '..data.action..'\n**Item:** '..data.item..'\n**Price:** '..data.price..'\n**Description:** '..data.desc..'\n**From:** '..data.from..'\n\n**ID:** '..data.playerid..'\n**Identifier:** '..data.identifier..'\n**Discord:** '..data.discord,
				["footer"] = {
					["text"] = os.date(Config.DateFormat),
				}
			}
		}
	elseif data.type == 'cancel' then
		color = Config.RemoveAdColor
	elseif data.type == 'claim' then
		color = Config.ClaimAdColor
	end
	
	information = {
		{
			["color"] = color,
			["author"] = {
				["icon_url"] = Config.IconURL,
				["name"] = Config.ServerName..' - Logs',
			},
			["title"] = data.title,
			["description"] = '**Action:** '..data.action..'\n**Item:** '..data.item..'\n**Price:** '..data.price..'\n**Description:** '..data.desc..'\n\n**ID:** '..data.playerid..'\n**Identifier:** '..data.identifier..'\n**Discord:** '..data.discord,
			["footer"] = {
				["text"] = os.date(Config.DateFormat),
			}
		}
	}

	PerformHttpRequest(Webhook, function(err, text, headers) end, 'POST', json.encode({username = Config.BotName, embeds = information}), {['Content-Type'] = 'application/json'})
end