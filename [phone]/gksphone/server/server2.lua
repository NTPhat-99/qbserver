local QBCore = exports['qb-core']:GetCoreObject()


QBCore.Functions.CreateCallback('gksphone:blocknumber', function(source, cb)
	local e=QBCore.Functions.GetPlayer(source)
	exports.oxmysql:execute('SELECT * FROM gksphone_blockednumber WHERE identifier = @identifier',{["@identifier"]=e.PlayerData.citizenid},function(result)
		local bnumber = {}
		for i=1, #result, 1 do
			table.insert(bnumber, {id = result[i].id, number = result[i].number}) 
		end
		cb(bnumber)
	end)
end)

QBCore.Functions.CreateCallback('gksphone:getphonegallery', function(source, cb)
	local e=QBCore.Functions.GetPlayer(source)
	exports.oxmysql:execute('SELECT * FROM gksphone_gallery WHERE hex = @identifier ORDER BY TIME DESC',{["@identifier"]=e.PlayerData.citizenid},function(result)
		local gallery = {}
		for i=1, #result, 1 do
			table.insert(gallery, {id = result[i].id,	image=result[i].image}) 
		end
		cb(gallery)
	end)
end)





RegisterServerEvent('gksphone:gallerimage')
AddEventHandler('gksphone:gallerimage', function(a)
	local src = source
	local e = QBCore.Functions.GetPlayer(src)
    if e then
        exports.oxmysql:execute('INSERT INTO gksphone_gallery (`hex`, `image`) VALUES(@identifier, @image);', {
            ['@identifier'] = e.PlayerData.citizenid,
			['@image'] = a
		}, function (result)
		
			TriggerClientEvent('updategallery', src,a)

		end)
    end
end)



QBCore.Functions.CreateCallback('gksphone:getgps', function(source, cb)
	local e=QBCore.Functions.GetPlayer(source)
	exports.oxmysql:execute('SELECT * FROM gksphone_gps WHERE hex = @identifier ORDER BY id DESC',{["@identifier"]=e.PlayerData.citizenid},function(result)
		local gps = {}
		for i=1, #result, 1 do
			table.insert(gps, {id = result[i].id,	nott=result[i].nott, gps=result[i].gps}) 
		end
		cb(gps)
	end)
end)


RegisterServerEvent('gksphone:newwgps')
AddEventHandler('gksphone:newwgps', function(a, b)

local src = source
local e = QBCore.Functions.GetPlayer(src)
if e then
	exports.oxmysql:execute('INSERT INTO gksphone_gps (`hex`, `nott`, `gps`) VALUES(@identifier, @nott, @gps);', {
		['@identifier'] = e.PlayerData.citizenid,
		['@nott'] = a,
		['@gps'] = b,
	}, function (result)
	
		TriggerClientEvent('updategps', src,a,b)

	end)
end
end)




RegisterServerEvent('gksphone:deltblknumber')
AddEventHandler('gksphone:deltblknumber', function(a, b)

local src = source
local e = QBCore.Functions.GetPlayer(src)
if e then
	exports.oxmysql:execute('DELETE FROM gksphone_blockednumber WHERE id = @id AND number = @number', {
		['@number'] = b,
		['@id'] = a
	}, function (result)
	
		TriggerClientEvent('yenNumber', src,a)

	end)
end
end)

RegisterServerEvent('gksphone:delettegps')
AddEventHandler('gksphone:delettegps', function(a, b)

local src = source
local e = QBCore.Functions.GetPlayer(src)
if e then
	exports.oxmysql:execute('DELETE FROM gksphone_gps WHERE id = @id AND hex = @identifier', {
		['@identifier'] = e.PlayerData.citizenid,
		['@id'] = a
	}, function (result)
	
		TriggerClientEvent('updategps', src,a)

	end)
end
end)



RegisterServerEvent('gksphone:imagedelete')
AddEventHandler('gksphone:imagedelete', function(a, b)
local src = source
local e = QBCore.Functions.GetPlayer(src)
	if e then
		exports.oxmysql:execute('DELETE FROM gksphone_gallery WHERE id = @id AND hex = @identifier', {
			['@identifier'] = e.PlayerData.citizenid,
			['@id'] = a
		}, function (result)
		
			TriggerClientEvent('updategallery', src,a)

		end)
	end
end)


QBCore.Functions.CreateCallback("gksphone:getsCrypto",function(a,b)
    local d=QBCore.Functions.GetPlayer(a)
    if not d then 
        return 
    end;
    exports.oxmysql:execute("SELECT crypto FROM gksphone_settings WHERE identifier = @identifier",{["@identifier"]=d.PlayerData.citizenid},function(e)

        b(json.decode(e[1].crypto))
    end)
end)






RegisterServerEvent("gksphone:alCrypto")
AddEventHandler("gksphone:alCrypto",function(a,b,c,d)
	local _source = source
	local e=QBCore.Functions.GetPlayer(_source)
	local name = GetPlayerName(_source)

    if not e then
         return 
        end
         local g={}
         exports.oxmysql:execute("SELECT * FROM gksphone_settings WHERE identifier = @identifier",{["@identifier"]=e.PlayerData.citizenid},function(h)
			g=json.decode(h[1].crypto)
		
            if a==1 then 
                if e.PlayerData.money.bank>= d then 

					if (g[b] == nil) then

						g[b] = c
						
					else
						g[b]=g[b]+(c);
					end

					exports.oxmysql:execute("UPDATE gksphone_settings SET crypto = @crypto WHERE identifier = @identifier",{["@identifier"]=e.PlayerData.citizenid,["@crypto"]=json.encode(g)})
                    e.Functions.RemoveMoney('bank', d, "Bank depost")
					exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
						["@type"] = 2,
						["@identifier"] = e.PlayerData.citizenid,
						["@price"] = d,
						["@name"] = 'buy ' ..c ..' ' ..b 
					})
					TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = _U('cyrpto_buy') ..c ..' ' .. b , img= '/html/static/img/icons/bourse1.png' })
                    TriggerClientEvent("yenCrypto", _source, b)
					TriggerEvent('gksphone:cryptobuysellwebhook', 'purchased', d, e.PlayerData.citizenid, c, b, 1942002, name)

					TriggerClientEvent('gksphone:bakttt', _source)
                else 
					TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = _U('not_enough_money'), img= '/html/static/img/icons/bourse1.png' })

                end 
            elseif a==2 then 
                if (g[b] ~= nil) then 
					if g[b]>= c then

						g[b]=g[b]-(c);

						exports.oxmysql:execute("UPDATE gksphone_settings SET crypto = @crypto WHERE identifier = @identifier",{["@identifier"]=e.PlayerData.citizenid,["@crypto"]=json.encode(g)})
						e.Functions.AddMoney('bank', d, "Bank depost")
						
					
						exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
							["@type"] = 1,
							["@identifier"] = e.PlayerData.citizenid,
							["@price"] = d,
							["@name"] = c.. ' ' ..b ..' sale'
						})
						TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = _U('cyrpto_sell') ..c .. b , img= '/html/static/img/icons/bourse1.png' })

						TriggerClientEvent("yenCrypto", _source, b)
						TriggerEvent('gksphone:cryptobuysellwebhook', 'sold', d, e.PlayerData.citizenid, c, b, 15158332, name)
						TriggerClientEvent('gksphone:bakttt', _source)
                else 
					TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = _U('not_enough_coin'), img= '/html/static/img/icons/bourse1.png' })
                end 
            else TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = b .._U('not_crypto'), img= '/html/static/img/icons/bourse1.png' })
                return 
            end
		end
	end)
	end)

	Round = function(value, numDecimalPlaces)
        if numDecimalPlaces then
            local power = 10^numDecimalPlaces
            return math.floor((value * power) + 0.5) / (power)
        else
            return math.floor(value + 0.5)
        end
    end


local sayac = 0

QBCore.Functions.CreateCallback('gksphone:checkSpam', function(source, cb)
    if sayac == 0  then
        cb(0)
        sayac = sayac + 1
        Citizen.Wait(1000)
        sayac = 0
    else
        cb(1)
    end
end)

local timing = 0

QBCore.Functions.CreateCallback('gksphone:vehiclecheckSpam', function(source, cb)
    if timing == 0  then
        cb(0)
        timing = timing + 1
        Citizen.Wait(1000)
        timing = 0
    else
        cb(1)
    end
end)

RegisterServerEvent("gksphone:transferCrypto")
AddEventHandler("gksphone:transferCrypto",function(number,adet, id)
	local _source = source
	local e= QBCore.Functions.GetPlayer(_source)

	local transferto = getIdentifierByPhoneNumber(number)

	if (transferto ~= nil) then
    if not e then
         return 
        end
         local g={}
         exports.oxmysql:fetch("SELECT * FROM gksphone_settings WHERE identifier = @identifier",{["@identifier"]=e.PlayerData.citizenid},function(h)
			g=json.decode(h[1].crypto)


					if (g[id] == nil or g[id] == 0 or g[id] < adet) then

						TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = id.. _U('cyrpto_check') , img= '/html/static/img/icons/bourse1.png' })
						
					else

						g[id]=g[id]-(adet);
					
	
						exports.oxmysql:execute("UPDATE gksphone_settings SET crypto = @crypto WHERE identifier = @identifier",{["@identifier"]=e.PlayerData.citizenid,["@crypto"]=json.encode(g)})
                
						Citizen.Wait(500)

					TriggerClientEvent('gksphone:notifi', _source, {title = 'Bourse', message = adet .. ' ' ..id .. _U('cyrpto_transfer') , img= '/html/static/img/icons/bourse1.png' })
                    TriggerClientEvent("yenCrypto",_source,id)
					

					exports.oxmysql:fetch("SELECT * FROM gksphone_settings WHERE identifier = @identifier",{["@identifier"]=transferto},function(nebula)
							funda=json.decode(nebula[1].crypto)
				
				
				
									if (funda[id] == nil) then
				
										funda[id] = adet
										
									else

										funda[id]=funda[id]+(adet);

									end
					
									exports.oxmysql:execute("UPDATE gksphone_settings SET crypto = @crypto WHERE identifier = @identifier",{["@identifier"]=transferto,["@crypto"]=json.encode(funda)})

									local Target = QBCore.Functions.GetPlayerByPhone(number)

									TriggerEvent('gksphone:cryptotranwebhook', e.PlayerData.charinfo.firstname .. ' ' ..e.PlayerData.charinfo.lastname, adet, id, Target.PlayerData.charinfo.firstname .. ' ' ..Target.PlayerData.charinfo.lastname, transferto, e.PlayerData.citizenid)
								
				
									getSourceFromIdentifier(transferto, function (osou)
										if tonumber(osou) ~= nil then 

											TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Bourse', message = adet.. ' ' .. id ..  _U('cyrpto_transfer2'), img= '/html/static/img/icons/bourse1.png' })
											TriggerClientEvent("yenCrypto",tonumber(osou),id)
											
										end
					
									end)
				
				
						end)
					end			

			end)

	end

end)


-- Haber

QBCore.Functions.CreateCallback('haberci:getNewsForHaber', function(source, cb)
	exports.oxmysql:execute('SELECT * FROM gksphone_news',{},function(result)
		local haberler = {}
		for i=1, #result, 1 do
			table.insert(haberler, {id = result[i].id,haber=result[i].haber, baslik = result[i].baslik, resim = result[i].resim, video = result[i].video, zaman = result[i].zaman}) 
		end
		cb(haberler)
	end)
end)

function NewsPost(haber, baslik, resim, video, sourcePlayer, cb)
local xPlayer =	QBCore.Functions.GetPlayer(source)
    exports.oxmysql:execute("INSERT INTO gksphone_news (`hex`, `haber`, `baslik`, `resim`, `video`) VALUES(@hex, @haber, @baslik, @resim, @video);", {
	  ['@hex'] = xPlayer.PlayerData.citizenid,
	  ['@haber'] = haber,
	  ['@baslik'] = baslik,
	  ['@resim'] = resim,
      ['@video'] = video
    }, function (id)
		exports.oxmysql:execute('SELECT * from gksphone_news WHERE id = @id', {
        ['@id'] = id.insertId
      }, function (news)
        newsh = news[1]
        TriggerClientEvent('haberci:news_newBildirim', -1, newsh)
      end)
    end)
end

RegisterServerEvent('haberci:news_postWzn')
AddEventHandler('haberci:news_postWzn', function(haber, baslik, resim, video)
  local sourcePlayer = tonumber(source)
  NewsPost(haber, baslik, resim, video, sourcePlayer)
end)



function HaberSil (id, sourcePlayer)
    exports.oxmysql:execute('DELETE FROM gksphone_news WHERE id = @id', {
      ['@id'] = id
    }, function ()
		TriggerClientEvent('haberci:news_newBildirim', -1)
	end)
end

RegisterServerEvent('haberci:haberisil')
AddEventHandler('haberci:haberisil', function(id)
  local sourcePlayer = tonumber(source)
  HaberSil(id, sourcePlayer)
end)

-- 2. El

QBCore.Functions.CreateCallback('gksphone:carsellers', function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)
    if not xPlayer then return; end
	exports.oxmysql:execute('SELECT * from gksphone_vehicle_sales ORDER BY TIME DESC', {}, function (tweets)

		cb(tweets)

	end)
end)

QBCore.Functions.CreateCallback('gksphone:namenumber', function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)
    if not xPlayer then return; end
	local water = {}
	exports.oxmysql:execute('SELECT phone_number from gksphone_settings WHERE identifier = @identifier', {['@identifier'] = xPlayer.PlayerData.citizenid}, function (testt)


		table.insert(water, testt[1])
	end)

	Citizen.Wait(500)
	
		table.insert(water, {firstname = xPlayer.PlayerData.charinfo.firstname, lastname = xPlayer.PlayerData.charinfo.lastname})

		cb(water)

end)


RegisterServerEvent('gksphone:cardel')
AddEventHandler('gksphone:cardel', function(id, plate)
    exports.oxmysql:execute('DELETE FROM gksphone_vehicle_sales WHERE id = @id', {
      ['@id'] = id
    }, function ()
		exports.oxmysql:execute('UPDATE player_vehicles SET `carseller` = @carseller WHERE `plate` = @plate', {
			['@plate'] = plate,
			['@carseller'] = 0,
		})
		exports.oxmysql:execute('SELECT * from gksphone_vehicle_sales', {}, function (tweets)

			TriggerClientEvent('gksphone:vehiclearac', -1, tweets)

		  end)
	end)
end)

RegisterServerEvent('gksphone:newaracsale')
AddEventHandler('gksphone:newaracsale', function(a, b, c, d, f)

local e = QBCore.Functions.GetPlayer(source)
local identifier = e.PlayerData.citizenid


    if e then
        exports.oxmysql:execute('INSERT INTO gksphone_vehicle_sales (`owner`, `ownerphone`, `plate`, `model`, `price`, `image`) VALUES(@owner, @ownerphone, @plate, @model, @price, @image);', {
            ['@owner'] = identifier,
            ['@ownerphone'] = a,
            ['@plate'] = b,
            ['@model'] = c,
			['@price'] = d,
            ['@image'] = f,
        }, function(result)
			exports.oxmysql:execute('UPDATE player_vehicles SET `carseller` = @carseller WHERE `plate` = @plate', {
				['@plate'] = b,
				['@carseller'] = 1,
			})
			exports.oxmysql:execute('SELECT * from gksphone_vehicle_sales', {}, function (tweets)

				TriggerClientEvent('gksphone:vehiclearac', -1, tweets)

			  end)
        end)

    end
end)

RegisterServerEvent('gksphone:aracisatt')
AddEventHandler('gksphone:aracisatt', function(a, b, c)

local src = source
local satici = QBCore.Functions.GetPlayer(src)
local bidentifier = satici.PlayerData.citizenid
local zPlayer = QBCore.Functions.GetPlayerByCitizenId(a) 

if zPlayer ~= nil then
	balance = satici.PlayerData.money["bank"]
	zbalance = zPlayer.PlayerData.money["bank"]
	if bidentifier == zPlayer.PlayerData.citizenid then
		TriggerClientEvent('gksphone:notifi', src, {title = 'Car Sallers', message = _U('carseller_ownbuy'), img= '/html/static/img/icons/carsales.png' })
	else
		
		if balance < tonumber(c) then

			TriggerClientEvent('gksphone:notifi', src, {title = 'Car Sallers', message = _U('carseller_nobank'), img= '/html/static/img/icons/carsales.png' })
		else
			TriggerClientEvent('gksphone:cardel', -1, b)

			satici.Functions.RemoveMoney('bank', tonumber(c), "Bank depost")
			zPlayer.Functions.AddMoney('bank', tonumber(c), "Bank depost")

			TriggerClientEvent('gksphone:bakttt', src)
			TriggerClientEvent('gksphone:bakttt', zPlayer.PlayerData.source)

			TriggerClientEvent('gksphone:notifi', src, {title = 'Car Sallers', message = _U('carseller_buyvehicle'), img= '/html/static/img/icons/carsales.png' })
			TriggerClientEvent('gksphone:notifi', zPlayer.PlayerData.source, {title = 'Car Sallers', message = _U('carseller_soldvehicle'), img= '/html/static/img/icons/carsales.png' })
	
			exports.oxmysql:execute('UPDATE player_vehicles SET `citizenid` = @owneryeni, `carseller` = @carseller, `license` = @license WHERE `citizenid` = @owner AND `plate` = @plate', {
				['@owner'] = a,
				['@license'] = satici.PlayerData.license,
				['@plate'] = b,
				['@owneryeni'] = bidentifier,
				['@carseller'] = 0,
			})

			exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
						["@type"] = 1,
						["@identifier"] = bidentifier,
						["@price"] = tonumber(c),
						["@name"] = b ..' Araba Alımı'
					})

					exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
						["@type"] = 2,
						["@identifier"] = zPlayer.PlayerData.citizenid,
						["@price"] = tonumber(c),
						["@name"] = b ..' Araba Satışı'
					})

					exports.oxmysql:execute('DELETE FROM gksphone_vehicle_sales WHERE owner = @owner AND plate = @plate', {
				['@owner'] = a,
				['@plate'] = b,
			  }, function ()
				TriggerClientEvent('gksphone:updatecarsellers', -1)
				TriggerClientEvent('valeduzel', src)
			  end)

			  local name = satici.PlayerData.charinfo.firstname .. " " .. satici.PlayerData.charinfo.lastname
			  local name2 = zPlayer.PlayerData.charinfo.firstname .. " " .. zPlayer.PlayerData.charinfo.lastname

			  TriggerEvent('gksphone:carsellernew', a, name2, bidentifier, name, b, c)
		end


	end

else

	balance = satici.PlayerData.money["bank"]
	if balance < tonumber(c) then

		TriggerClientEvent('gksphone:notifi', src, {title = 'Car Sallers', message = _U('carseller_nobank'), img= '/html/static/img/icons/carsales.png' })
	else 


		exports.oxmysql:execute("SELECT money FROM players WHERE identifier = @identifier", {
			['@identifier'] = a,
		}, function(result)

			g=json.decode(result[1].money)

		
			g['bank']=g['bank']+(c);
			
			TriggerClientEvent('gksphone:cardel', -1, b)
			satici.Functions.RemoveMoney('bank', tonumber(c), "Bank depost")
		
			TriggerClientEvent('gksphone:bakttt', src)
			

			exports.oxmysql:execute('UPDATE player_vehicles SET `owner` = @owneryeni, `carseller` = @carseller, `license` = @license WHERE `owner` = @owner AND `plate` = @plate', {
				['@owner'] = a,
				['@license'] = satici.PlayerData.license,
				['@plate'] = b,
				['@owneryeni'] = bidentifier,
				['@carseller'] = 0,
			})

			exports.oxmysql:execute('UPDATE players SET `money` = @bank WHERE `identifier` = @identifier', {
			['@identifier'] = a,
			['@bank'] = json.encode(g),
			})

		end)


		exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
			["@type"] = 1,
			["@identifier"] = bidentifier,
			["@price"] = c,
			["@name"] = b ..' Car purchase'
			}, function(results)
		end)


		exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
			["@type"] = 2,
			["@identifier"] = a,
			["@price"] = c,
			["@name"] = b ..' Car sale'
				}, function(resultss)
		end)

		local name = satici.PlayerData.charinfo.firstname .. " " .. satici.PlayerData.charinfo.lastname
		local name2 = zPlayer.PlayerData.charinfo.firstname .. " " .. zPlayer.PlayerData.charinfo.lastname


		TriggerEvent('gksphone:carsellernew', a, name2, bidentifier, name, b, c)

        TriggerClientEvent('gksphone:notifi', src, {title = 'Car Sallers', message = _U('carseller_buyvehicle'), img= '/html/static/img/icons/carsales.png' })

		exports.oxmysql:execute('DELETE FROM gksphone_vehicle_sales WHERE owner = @owner AND plate = @plate', {
			['@owner'] = a,
			['@plate'] = b,
		  }, function ()
			exports.oxmysql:execute('SELECT * from gksphone_vehicle_sales ORDER BY TIME DESC LIMIT 30', {}, function (tweets)

				TriggerClientEvent('gksphone:vehiclearac', -1, tweets)

			  end)
		  end) 

	end
end
end)


RegisterNetEvent("gksphone:ChangeVolume")
AddEventHandler("gksphone:ChangeVolume", function(muzikAdi, volume)
    TriggerClientEvent("gksphone:ChangeVolume",-1,muzikAdi,volume)
end)


Taxi = {}



RegisterNetEvent("gksphone:taxicall")
AddEventHandler("gksphone:taxicall", function(price, loca, curloca, phone, gps, GPStogo, distance, csrc)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(src)
	if xPlayer ~= nil then

		
		if xPlayer.PlayerData.money["bank"] > price then
			local test = getSource('taxi')

			if (json.encode(test) ~= '[]') then


				Taxi[phone] = {
					price = price,
					loca = loca,
					curloca = curloca,
					phone = phone,
					gps = gps,
					GPStogo = GPStogo,
					distance = distance,
					csrc = csrc,
					Durum = 'TaxiCall'
				}

				
				for i=1, #test, 1 do

					TriggerClientEvent('gksphone:notifi', test[i].id, {title = 'Taxi', message = _U('taxi_customer'), img= '/html/static/img/icons/taxijob.png' })
					TriggerClientEvent('gksphone:taxijob', test[i].id, Taxi)

				end

            else
                TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_noemployees'), img= '/html/static/img/icons/taxijob.png' })
            end

		else
			TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_nomoney'), img= '/html/static/img/icons/taxijob.png' })
		end


	end

end)

RegisterNetEvent("gksphone:taxiaccept")
AddEventHandler("gksphone:taxiaccept", function(phone)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(src)
	if xPlayer ~= nil then

				local test = getSource('taxi')
				local name = xPlayer.PlayerData.charinfo.firstname .. " " .. xPlayer.PlayerData.charinfo.lastname
				local taxiphone = xPlayer.PlayerData.charinfo.phone
				local Target = QBCore.Functions.GetPlayerByPhone(phone)
				local iden = Target.PlayerData.citizenid

				
				Taxi[phone] = {
					price = Taxi[phone].price,
					loca = Taxi[phone].loca,
					curloca = Taxi[phone].curloca,
					phone = Taxi[phone].phone,
					gps = Taxi[phone].gps,
					GPStogo = Taxi[phone].GPStogo,
					distance = Taxi[phone].distance,
					csrc = Taxi[phone].csrc,
					Durum = 'TaxiAceept',
					TaxiName = name,
					TaxiPhone = taxiphone
				}

				
				for i=1, #test, 1 do

					TriggerClientEvent('gksphone:notifi', test[i].id, {title = 'Taxi', message = name .._U('taxi_gotjob') , img= '/html/static/img/icons/taxijob.png' })
					TriggerClientEvent('gksphone:taxijob', test[i].id, Taxi)

				end

				getSourceFromIdentifier(iden, function (osou)
					if tonumber(osou) ~= nil then 
						TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Taxi', message = _U('taxi_driverway'), img= '/html/static/img/icons/taxijob.png' })
						TriggerClientEvent('gksphone:taxiuser', tonumber(osou), Taxi[phone])
						
					end

				end)
	end

end)


RegisterNetEvent("gksphone:taximusteri")
AddEventHandler("gksphone:taximusteri", function(phone, Gps)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(src)
	local playerPed = GetPlayerPed(src)
	local vehicle = GetVehicleNumberPlateText(GetVehiclePedIsIn(playerPed, false))
	local playerPed2 = GetPlayerPed(Taxi[phone].csrc)
	local vehicle2 = GetVehicleNumberPlateText(GetVehiclePedIsIn(playerPed2, false))

	if (vehicle ~= nil) then
		if (vehicle2 ~= nil) then
			if (vehicle == vehicle2) then
					if xPlayer ~= nil then
								TriggerClientEvent('gksphone:taximusterigps', src, Gps)
								local test = getSource('taxi')
								local Target = QBCore.Functions.GetPlayerByPhone(phone)
								local iden = Target.PlayerData.citizenid

								
								Taxi[phone] = {
									price = Taxi[phone].price,
									loca = Taxi[phone].loca,
									curloca = Taxi[phone].curloca,
									phone = Taxi[phone].phone,
									gps = Taxi[phone].gps,
									GPStogo = Taxi[phone].GPStogo,
									distance = Taxi[phone].distance,
									csrc = Taxi[phone].csrc,
									Durum = 'TaxiCustomer',
									TaxiName = Taxi[phone].TaxiName,
									TaxiPhone = Taxi[phone].TaxiPhone
								}

								
								for i=1, #test, 1 do
									TriggerClientEvent('gksphone:taxijob', test[i].id, Taxi)

								end

								getSourceFromIdentifier(iden, function (osou)
									if tonumber(osou) ~= nil then 
										TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Taxi', message = _U('taxi_driverpicked'), img= '/html/static/img/icons/taxijob.png' })
										TriggerClientEvent('gksphone:taxiuser', tonumber(osou), Taxi[phone])
										
									end

								end)
					end
				else
					TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_customernotveh') , img= '/html/static/img/icons/taxijob.png' })
				end
		else
			TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_customernotveh2'), img= '/html/static/img/icons/taxijob.png' })
		end
	else
		TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_notcar'), img= '/html/static/img/icons/taxijob.png' })
	end

end)


RegisterNetEvent("gksphone:taxikonum")
AddEventHandler("gksphone:taxikonum", function(phone, price)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(src)
	if xPlayer ~= nil then

				local test = getSource('taxi')
				local Target = QBCore.Functions.GetPlayerByPhone(phone)
				local iden = Target.PlayerData.citizenid

				
				xPlayer.Functions.AddMoney('bank', tonumber(price), "Bank depost")


				TriggerClientEvent('gksphone:notifi', src, {title = 'Taxi', message = _U('taxi_customerloc'), img= '/html/static/img/icons/taxijob.png' })
				
				Taxi[phone] = null

				for i=1, #test, 1 do

					TriggerClientEvent('gksphone:taxijob', test[i].id, Taxi)

				end

				exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
					["@type"] = 2,
					["@identifier"] = xPlayer.PlayerData.citizenid,
					["@price"] = tonumber(price),
					["@name"] = _U('taxi_earnings')
				})



				getSourceFromIdentifier(iden, function (osou)
					if tonumber(osou) ~= nil then 

						local musteri = QBCore.Functions.GetPlayer(tonumber(osou))

						musteri.Functions.RemoveMoney('bank', tonumber(price), "Bank depost")

						TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Taxi', message = _U('taxi_customerleft'), img= '/html/static/img/icons/taxijob.png' })
						TriggerClientEvent('gksphone:taxiuser', tonumber(osou), json.encode(Taxi[phone]))

						exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
							["@type"] = 1,
							["@identifier"] = musteri.PlayerData.citizenid,
							["@price"] = tonumber(price),
							["@name"] = _U('taxi_payment')
						})
						
					end

				end)
	end

end)

RegisterNetEvent("gksphone:taxiiptal")
AddEventHandler("gksphone:taxiiptal", function(phone)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(src)

	if xPlayer ~= nil then

				local test = getSource('taxi')
				local Target = QBCore.Functions.GetPlayerByPhone(phone)
				local iden = Target.PlayerData.citizenid

				

				Taxi[phone] = null

				for i=1, #test, 1 do

					TriggerClientEvent('gksphone:taxijob', test[i].id, Taxi)

				end

				getSourceFromIdentifier(iden, function (osou)
					if tonumber(osou) ~= nil then 

						TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Taxi', message = _U('taxi_cancel'), img= '/html/static/img/icons/taxijob.png' })
						
						TriggerClientEvent('gksphone:taxiuser', tonumber(osou), json.encode(Taxi[phone]))
						
					end

				end)
	end

end)

RegisterNetEvent("gksphone:facetimejoin")
AddEventHandler("gksphone:facetimejoin", function(id, xid, yid)
	local src = source
	if (yid ~= nil) then
		TriggerClientEvent('gksphone:sendRTCOffer', xid, id)
		TriggerClientEvent('gksphone:sendRTCOffer', yid, id)
	end
end)

function getRandomInt(mini, maxx)
	min = math.ceil(mini);
	max = math.floor(maxx);
	return math.floor(math.random() * (max - min)) + min;
end

local water = {
	ExtraSunny = {90, 110},
	Clear = {80, 95},
	Neutral = {80, 95},
	Smog = {90, 95},
	Foggy = {80, 90},
	Clouds = {80, 90},
	Overcast = {80, 80},
	Clearing = {75, 85},
	Raining = {75, 90},
	ThunderStorm = {75, 90},
	Blizzard = {-15, 10},
	Snowing = {0, 32},
	Snowlight = {0, 32},
	Christmas = {-5, 15},
	Halloween = {50, 80}
}

function temperatureRanges (birincihava)
	
	local deneyasd = getRandomInt(water[birincihava][1], water[birincihava][2])

	if not Config.Fahrenheit then
		deneyasd = (deneyasd - 32) * (5/9)
	end

	local temp_conv_str = string.format('%.0f', deneyasd)

	if Config.Fahrenheit then
		return temp_conv_str ..' °F'
	else
		return temp_conv_str ..' °C'
	end

end

RegisterNetEvent("gksphone:weathercontrol")
AddEventHandler("gksphone:weathercontrol", function(birincihava, ikincihava)
	local weatherg = {}
	local temperature = temperatureRanges(birincihava)
	local temperatureto = temperatureRanges(ikincihava)

	table.insert(weatherg, {weatersi = birincihava, waterso = ikincihava, tempsi = temperature, tempso = temperatureto})
	
	TriggerClientEvent('gksphone:weathers', -1, weatherg)
	
end)




	AddEventHandler('gksphone:cryptobuysellwebhook', function (test, test2, identifier, adet, coin, color, name, transferto, name2)
		local discord_webhook = Config.Crypto
		if discord_webhook == '' then
		  return
		end

		local headers = {
		  ['Content-Type'] = 'application/json'
		}
		local data = {
		  ["username"] = 'Stock Market',
		  ["avatar_url"] = 'https://seeklogo.com/images/C/cryptocurrency-blockchain-logo-249415523F-seeklogo.com.png',
		  ["embeds"] = {{
			["color"] = color
		  }}
		}

		if test == 'purchased' or test == 'sold' then
			data['embeds'][1]['title'] = '[' .. name ..'] has ' .. test .. ' x' .. tonumber(adet) .. ' of ' .. coin .. '! Worth: $' .. tonumber(test2) ..'!' 
			data['embeds'][1]['description'] = '[' .. name ..'] [' ..identifier .. ']'
			end
		if test == 'transfer' then
			data['embeds'][1]['title'] = '[' .. name ..'] transferred  x' .. tonumber(test2) .. ' ' .. coin .. ' to ' .. name2 ..' ['.. transferto ..']'
			data['embeds'][1]['description'] = '[' .. name ..'] [' ..identifier .. ']'
		end
	  
	  
		PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
	end)

	AddEventHandler('gksphone:cryptotranwebhook', function (name, test2, coin, name2, transferto, identifier)
		local discord_webhook = Config.Crypto
		if discord_webhook == '' then
		  return
		end

		local headers = {
		  ['Content-Type'] = 'application/json'
		}
		local data = {
		  ["username"] = 'Stock Market',
		  ["avatar_url"] = 'https://seeklogo.com/images/C/cryptocurrency-blockchain-logo-249415523F-seeklogo.com.png',
		  ["embeds"] = {{
			["color"] = color
		  }}
		}


	
			data['embeds'][1]['title'] = '[' .. name ..'] transferred  x' .. tonumber(test2) .. ' ' .. coin .. ' to ' .. name2 ..' ['.. transferto ..']'
			data['embeds'][1]['description'] = '[' .. name ..'] [' ..identifier .. ']'
	
	  
	  
		PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
	end)


	AddEventHandler('gksphone:carsellernew', function (a, name2, bidentifier, name, b, c)
 
		local discord_webhook = Config.Carseller
		if discord_webhook == '' then
		  return
		end
	
		local headers = {
		  ['Content-Type'] = 'application/json'
		}
		local data = {
		  ["username"] = 'Car Seller',
		  ["avatar_url"] = 'https://media.discordapp.net/attachments/722981093455822958/882974778334523392/stock-market.png?width=480&height=480',
		  ["embeds"] = {{
			["color"] = 15258703
		  }}
		}
	
	
		data['embeds'][1]['title'] = '[' .. name ..']' ..bidentifier ..' Sold Vehicle' 
		data['embeds'][1]['description'] = 'Car license plate : ' ..b .. ' Sale price : ' ..c
		data['embeds'][1]['footer']  = { ['text'] = 'The person who bought the vehicle : [' ..name2 ..', identifier : ' ..a .. ']'}
	
	
		PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
	end)


