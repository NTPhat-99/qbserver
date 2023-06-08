local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateCallback('gksphone:getCars', function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)
	exports.oxmysql:execute("SELECT * FROM player_vehicles WHERE `citizenid` = @cid",{
	    ["@cid"] = xPlayer.PlayerData.citizenid
		},function(result)
		local valcik = {}
		for i=1, #result, 1 do
			table.insert(valcik, {plate = result[i].plate, garage = result[i].garage, props = {model = result[i].vehicle}, carseller = result[i].carseller}) 
		end
		cb(valcik)
	end)
end)

QBCore.Functions.CreateCallback('gksphone:checkMoney2', function(source, cb)
	local xPlayer = QBCore.Functions.GetPlayer(source)

	if xPlayer.PlayerData.money.bank >= Config.ValePrice then
		cb(true)
	else
		cb(false)
	end

end)

QBCore.Functions.CreateCallback('gksphone:loadVehicle', function(source, cb, plate)
	local s = source
	local x = QBCore.Functions.GetPlayer(source)
	
    exports.oxmysql:execute("SELECT vehicle FROM player_vehicles WHERE plate = @cid", {["@cid"] = plate}, function(d)
		if d[1] ~= nil then
             cb(d[1].vehicle)
        end
    end)
end)

RegisterServerEvent('gksphone:finish')
AddEventHandler('gksphone:finish', function(plate)
	local _source = source
	local xPlayer = QBCore.Functions.GetPlayer(source)
	TriggerClientEvent(Config.CoreNotify, _source, _U('vale_get'), "error")
	xPlayer.Functions.RemoveMoney('bank', Config.ValePrice, "vale")
	TriggerClientEvent('gksphone:bakttt', _source)
end)

RegisterServerEvent('gksphone:valet-car-set-outside')
AddEventHandler('gksphone:valet-car-set-outside', function(plate)
	local src = source
	local xPlayer = QBCore.Functions.GetPlayer(source)
    if xPlayer then
        exports.oxmysql:execute('UPDATE player_vehicles SET `garage` = @garage, `state` = @state WHERE `plate` = @plate', {
            ['@plate'] = plate,
			['@state'] = 0,
            ['@garage'] = "OUT",
        }, function(result)
			TriggerClientEvent('valeduzel', -1)
		end)
    end
end)