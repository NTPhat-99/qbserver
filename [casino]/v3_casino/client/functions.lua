function Teleport(entity, coords)
	if DoesEntityExist(entity) then
		DoScreenFadeOut(1000)
		RequestCollisionAtCoord(coords.x, coords.y, coords.z)
		local timeout = 0

		-- we can get stuck here if any of the axies are "invalid"
		while not HasCollisionLoadedAroundEntity(entity) and timeout < 2000 do
			Citizen.Wait(0)
			timeout = timeout + 1
		end
		Citizen.Wait(1000)
		SetEntityCoords(entity, coords.x, coords.y, coords.z, false, false, false, false)
		Citizen.Wait(1000)
		DoScreenFadeIn(1000)
		SetEntityHeading(entity, coords.w)
	end
end

function SpawnVehicle(model, cb, coords, isnetworked)
    local model = GetHashKey(model)
    local ped = PlayerPedId()
    if coords then
        coords = type(coords) == 'table' and vec3(coords.x, coords.y, coords.z) or coords
    else
        coords = GetEntityCoords(ped)
    end
    local isnetworked = isnetworked or true
    if not IsModelInCdimage(model) then
        return
    end
    RequestModel(model)
    while not HasModelLoaded(model) do
        Wait(10)
    end
    local veh = CreateVehicle(model, coords.x, coords.y, coords.z, coords.w, false, false)
    SetVehicleNeedsToBeHotwired(veh, false)
    SetVehRadioStation(veh, 'OFF')
    SetModelAsNoLongerNeeded(model)
    if cb then
        cb(veh)
    end
end