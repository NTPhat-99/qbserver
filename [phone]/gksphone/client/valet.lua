local QBCore = exports['qb-core']:GetCoreObject()

inVehicle = false
valeOn = false
left = false
local fizzPed = nil
spawnRadius = 30.0


function setCars(cars)
    SendNUIMessage({event = 'updateCars', cars = cars})
end



RegisterNUICallback('getCars', function(data)
    QBCore.Functions.TriggerCallback('gksphone:getCars', function(data)

        setCars(data)
    end)
end)

RegisterNetEvent('valeduzel')
AddEventHandler('valeduzel', function(gallery)
    QBCore.Functions.TriggerCallback('gksphone:getCars', function(data)

        setCars(data)
    end)
end)

RegisterNUICallback('getCarsValet', function(data)
	local plate = data.plate
    QBCore.Functions.TriggerCallback('gksphone:loadVehicle', function(hash)

    if enroute then
	  QBCore.Functions.Notify(_U('vale_gete'), 'error')
        return
    end

    local gameVehicles = QBCore.Functions.GetVehicles()

	for i = 1, #gameVehicles do
		local vehicle = gameVehicles[i]

        if DoesEntityExist(vehicle) then
            if GetVehicleNumberPlateText(vehicle) == data.plate then
                local vehicleCoords = GetEntityCoords(vehicle)
                SetNewWaypoint(vehicleCoords.x, vehicleCoords.y)
				TriggerEvent('gksphone:notifi', {title = 'Vale', message = _U('vale_getr'), img= '/html/static/img/icons/vale.png' })
				return
			end
        end
    end

	QBCore.Functions.TriggerCallback('gksphone:checkMoney2', function(hasEnoughMoney)
		if hasEnoughMoney == true then
			SpawnVehicle(hash, data.plate)
            TriggerServerEvent("gksphone:valet-car-set-outside", data.plate)
		else

			TriggerEvent('gksphone:notifi', {title = 'Vale', message = _U('vale_checmoney'), img= '/html/static/img/icons/vale.png' })
	
		end
	end)

	


	end,plate)


end)



function SpawnVehicle(vehicle, plate)       

	local coords = GetEntityCoords(PlayerPedId())
  	local found, spawnPos, spawnHeading = GetClosestVehicleNodeWithHeading(coords.x + math.random(-spawnRadius, spawnRadius), coords.y + math.random(-spawnRadius, spawnRadius), coords.z, 0, 3, 0)

    local driverhash = 999748158
    local vehhash = vehicle

    while not HasModelLoaded(driverhash) and RequestModel(driverhash) or not HasModelLoaded(vehhash) and RequestModel(vehhash) do
        RequestModel(driverhash)
        RequestModel(vehhash)
        Citizen.Wait(0)
    end    
    local coordinates = {x=spawnPos.x,y=spawnPos.y,z=spawnPos.z, spawnHeading}
	
	QBCore.Functions.SpawnVehicle(vehhash,  function(callback_vehicle)

        SetVehicleHasBeenOwnedByPlayer(callback_vehicle, true)
        SetVehRadioStation(callback_vehicle, "OFF")	
        SetVehicleNumberPlateText(callback_vehicle, plate)
        SetEntityAsMissionEntity(callback_vehicle, true, true)
        ClearAreaOfVehicles(GetEntityCoords(callback_vehicle), 5000, false, false, false, false, false);  
        SetVehicleOnGroundProperly(callback_vehicle)
        SetVehicleEngineOn(vehhash,true)
        TriggerEvent("vehiclekeys:client:SetOwner", GetVehicleNumberPlateText(callback_vehicle))
    end, coordinates)   

end


