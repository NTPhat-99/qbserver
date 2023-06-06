local inside = false
local spawnedVehicle = nil

Citizen.CreateThread(function()
    RequestAllIpls()
    while Framework == nil do 
        Citizen.Wait(5000)
        print("Waiting for framework. Check your config.lua for any errors.")
    end
    local blip = AddBlipForCoord(948.3834, 34.21247, 71.839)
    SetBlipSprite (blip, 617)
    SetBlipDisplay(blip, 4)
    SetBlipScale  (blip, 0.8)
    SetBlipAsShortRange(blip, true)
    SetBlipColour(blip, 2)
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString("Casino")
    EndTextCommandSetBlipName(blip)
end)

function RequestAllIpls()
    RequestIpl("vw_casino_main");
    RequestIpl("vw_casino_carpark");
    RequestIpl("vw_casino_garage");
    RequestIpl("vw_casino_penthouse");
    RequestIpl("hei_dlc_casino_aircon");
    RequestIpl("hei_dlc_casino_aircon_lod");
    RequestIpl("hei_dlc_casino_door");
    RequestIpl("hei_dlc_casino_door_lod");
    RequestIpl("hei_dlc_vw_roofdoors_locked");
    RequestIpl("hei_dlc_windows_casino");
    RequestIpl("hei_dlc_windows_casino_lod");
    RequestIpl("vw_ch3_additions");
    RequestIpl("vw_ch3_additions_long_0");
    RequestIpl("vw_ch3_additions_strm_0");
    RequestIpl("vw_dlc_casino_door");
    RequestIpl("vw_dlc_casino_door_lod");
    RequestIpl("vw_casino_billboard");
    RequestIpl("vw_casino_billboard_lod(1)");
    RequestIpl("vw_casino_billboard_lod");
    RequestIpl("vw_int_placement_vw");
    RequestIpl("vw_dlc_casino_apart");    
end


local casinoZone = PolyZone:Create({
    vector2(1084.5240478516, 206.19203186035),
    vector2(1080.955078125, 221.83114624023),
    vector2(1091.3402099609, 237.84664916992),
    vector2(1075.9313964844, 268.28536987305),
    vector2(1106.7355957031, 275.35916137695),
    vector2(1119.1510009766, 282.20660400391),
    vector2(1133.0803222656, 295.11450195312),
    vector2(1140.5695800781, 280.46301269531),
    vector2(1158.8225097656, 286.29544067383),
    vector2(1169.9155273438, 263.10800170898),
    vector2(1178.5661621094, 253.19914245605),
    vector2(1145.8752441406, 231.02029418945),
    vector2(1131.0715332031, 221.48152160645),
    vector2(1132.8948974609, 214.20164489746),
    vector2(1128.3233642578, 196.12121582031),
    vector2(1104.2321777344, 187.7615814209),
    vector2(1082.3507080078, 190.35154724121)
}, {
    name = "casino",
    --minZ = -42.747840881348,
    --maxZ = -52.692893981934,
    debugGrid = false,
})
  
casinoZone:onPointInOut(PolyZone.getPlayerPosition, function(isPointInside, point)
    if isPointInside then
        TriggerEvent('chCasinoWall:enteredCasino')
        TriggerEvent("casinozone:bool", true)
	    print("Point has just entered the zone")
        --[[SpawnVehicle(Casino.Vehicle, function(veh)
            SetEntityAsMissionEntity(veh, true, true)
            SetVehicleNumberPlateText(veh, "CASINO")
            spawnedVehicle = veh
            FreezeEntityPosition(veh, true)
        end, vector4(1099.957, 220.2881, -48.99494, 202.3371), false)]]
    else
        TriggerEvent('chCasinoWall:exitedCasino')
        TriggerEvent("casinozone:bool", false)
        print("Point has just left the zone")
        --spawnedVehicle = nil
        --Framework.Functions.DeleteVehicle(spawnedVehicle)
    end
end)

function isInsideCasino()
    return inside
end

RegisterNetEvent('casinozone:bool')
AddEventHandler('casinozone:bool', function(bool) 
    inside = bool
    poop()
end)

function poop()
    while inside do
        if DoesEntityExist(spawnedVehicle) then
            SetEntityHeading(spawnedVehicle, GetEntityHeading(spawnedVehicle) - 0.1)            
        end
        Citizen.Wait(50)
    end
end
 
Citizen.CreateThread(function()
    exports['qb-target']:SpawnPed({
        spawnNow = true,
        name = 'casino',
        model = 'ig_tomcasino', 
        coords = vector4(935.8339, 47.1804, 81.09579, 153.8499), 
        minusOne = true,
        freeze = true, 
        invincible = true, 
        blockevents = true, 
        scenario = 'WORLD_HUMAN_GUARD_STAND', 
        target = { 
        options = { 
            { 
                action = function() 
                    Teleport(PlayerPedId(), vector4(1089.6083984375,206.60050964355,-48.999725341797, 0.0))
                end,
                icon = "fas fa-wrench",
                label = 'Enter Casino',
            },
        },
            distance = 2.5, 
        },
    })
    exports['qb-target']:SpawnPed({
        spawnNow = true,
        name = 'exitcasino',
        model = 'ig_tomcasino', 
        coords = vector4(1089.717, 205.895, -48.99344, 356.8124), 
        minusOne = true,
        freeze = true, 
        invincible = true, 
        blockevents = true, 
        scenario = 'WORLD_HUMAN_GUARD_STAND', 
        target = { 
        options = { 
            { 
                action = function() 
                    Teleport(PlayerPedId(), vector4(934.8568, 46.18341, 81.09571, 143.6066))
                end,
                icon = "fas fa-wrench",
                label = 'Exit Casino',
            },
        },
            distance = 2.5, 
        },
    })
    exports['qb-target']:SpawnPed({
        spawnNow = true,
        name = 'foodcasino',
        model = 'u_f_m_casinoshop_01', 
        coords = vector4(1110.856, 209.6585, -49.44009, 35.14187), 
        minusOne = true,
        freeze = true, 
        invincible = true, 
        blockevents = true, 
        --scenario = 'WORLD_HUMAN_GUARD_STAND', 
        target = { 
        options = { 
            { 
                event = "casino:foodCat",
                icon = "fas fa-wrench",
                label = 'Food',
            },
        },
            distance = 2.5, 
        },
    })
    exports['qb-target']:SpawnPed({
        spawnNow = true,
        name = 'casinocounter',
        model = 'u_f_m_casinocash_01', 
        coords = vector4(1117.457, 219.2687, -49.43512, 97.06356), 
        minusOne = true,
        freeze = true, 
        invincible = true, 
        blockevents = true, 
        scenario = 'WORLD_HUMAN_GUARD_STAND', 
        target = { 
        options = { 
            { 
                icon = "fas fa-wrench",
                label = 'Buy Chips',
                action = function(entity) 
                    local dialog = exports[Casino.InputScriptName]:ShowInput({
                        header = 'Buy Chips Amount',
                        submitText = "Submit",
                        inputs = {
                            {
                                type = 'text', -- number doesn't accept decimals??
                                isRequired = true,
                                name = 'amount',
                                text = ''
                            }
                        }
                    })
                    if dialog then
                        if not dialog.amount then return end
                        TriggerServerEvent('casino:Chips', "buy", dialog.amount)
                    end
                end,
            },
            { 
                action = function(entity) 
                    local dialog = exports[Casino.InputScriptName]:ShowInput({
                        header = 'Sell Chips Amount',
                        submitText = "Submit",
                        inputs = {
                            {
                                type = 'text', -- number doesn't accept decimals??
                                isRequired = true,
                                name = 'amount',
                                text = ''
                            }
                        }
                    })
                    if dialog then
                        if not dialog.amount then return end
                        TriggerServerEvent('casino:Chips', "sell", dialog.amount)
                    end
                end,
                icon = "fas fa-wrench",
                label = 'Sell Chips',
            },
            { 
                icon = "fas fa-wrench",
                label = 'Buy Wheel Token',
                action = function() 
                    TriggerServerEvent('casino:grabToken')
                end,
            },
        },
            distance = 2.5, 
        },
    })
end)

RegisterNetEvent('casino:foodCat', function() 
    local casinoFoodPlace = {
        {
            header = '『 Casino Food Catalogue 』',
            isMenuHeader = true,
        },
    }
    for f, x in pairs(Casino.FoodList) do
        casinoFoodPlace[#casinoFoodPlace + 1] =
        {
            header = ''..Framework.Shared.Items[x].label,
            txt = '',
            params = {
                isServer = true,
                event = 'casino:grabFood',
                args = {
                    item = x
                }
            }
        }
    end
    exports[Casino.MenuScriptName]:openMenu(casinoFoodPlace)
end)

--[[Citizen.CreateThread(function()
    local model = GetHashKey('vw_prop_vw_luckywheel_02a')
    local baseWheelModel = GetHashKey('vw_prop_vw_luckywheel_01a')
    Citizen.CreateThread(function()
        RequestModel(model)
        while not HasModelLoaded(model) do
            Citizen.Wait(0)
        end
        _wheel = CreateObject(model, 1111.05, 229.81, -50.38, false, false, true)
        SetEntityHeading(_wheel, 0.0)
        SetModelAsNoLongerNeeded(model)
    end)

    exports['qb-target']:AddBoxZone("casinowheel", vector3(1111.119, 229.6535, -49.63581), 1.0, 2.0, {
        name = "casinowheel",
        heading = 0,
        debugPoly = false,
        minZ = -49.6 - 2.0 ,
        maxZ = -49.6 + 2.0
    }, {
        options = {
            {
                action = function() 
                    doRoll()
                end,
                icon = "fas fa-wrench",
                label = "Spin",
                item = "wheeltoken"
            },
        },
        job = {"all"},
        distance = 2.5
    })
end)


RegisterNetEvent("wheel:doRoll")
AddEventHandler("wheel:doRoll", function(_priceIndex) 
    print(_priceIndex)
    _isRolling = true
	SetEntityHeading(_wheel, 76.0)
    Citizen.CreateThread(function()
        local speedIntCnt = 1
        local rollspeed = 1.0
        local _winAngle = (_priceIndex - 1) * 18
        local _rollAngle = _winAngle + (360 * 8)
        local _midLength = (_rollAngle / 2)
        local intCnt = 0
        while speedIntCnt > 0 do
            local retval = GetEntityRotation(_wheel, 1)
            if _rollAngle > _midLength then
                speedIntCnt = speedIntCnt + 1
            else
                speedIntCnt = speedIntCnt - 1
                if speedIntCnt < 0 then
                    speedIntCnt = 0
                    
                end
            end
            intCnt = intCnt + 1
            rollspeed = speedIntCnt / 10
            local _y = retval.y - rollspeed
            _rollAngle = _rollAngle - rollspeed
            SetEntityRotation(_wheel, 0.0, _y + 0.2, 0.0, 1, true)
            Citizen.Wait(5)
        end
    end)
end)

RegisterNetEvent("wheel:rollFinished")
AddEventHandler("wheel:rollFinished", function() 
    _isRolling = false
end)

function loadAnimDict( dict )
    while ( not HasAnimDictLoaded( dict ) ) do
        RequestAnimDict( dict )
        Citizen.Wait( 5 )
    end
end 

function doRoll()
    if not _isRolling then
        TriggerServerEvent("QBCore:Server:RemoveItem", "wheeltoken", 1)
        _isRolling = true
        local playerPed = PlayerPedId()
        local _lib = 'anim_casino_a@amb@casino@games@lucky7wheel@female'
        if IsPedMale(playerPed) then
            _lib = 'anim_casino_a@amb@casino@games@lucky7wheel@male'
        end
        local lib, anim = _lib, 'enter_right_to_baseidle'
        loadAnimDict(lib)
        local _movePos = vector3(1109.55, 228.88, -49.64)
        TaskGoStraightToCoord(playerPed,  _movePos.x,  _movePos.y,  _movePos.z,  1.0,  -1,  312.2,  0.0)
        local _isMoved = false
        while not _isMoved do
            local coords = GetEntityCoords(PlayerPedId())
            if coords.x >= (_movePos.x - 0.01) and coords.x <= (_movePos.x + 0.01) and coords.y >= (_movePos.y - 0.01) and coords.y <= (_movePos.y + 0.01) then
                _isMoved = true
            end
            Citizen.Wait(0)
        end
        Citizen.Wait(1000)
        TaskPlayAnim(playerPed, lib, anim, 8.0, -8.0, -1, 0, 0, false, false, false)
        while IsEntityPlayingAnim(playerPed, lib, anim, 3) do
            Citizen.Wait(0)
            DisableAllControlActions(0)
        end
        TaskPlayAnim(playerPed, lib, 'enter_to_armraisedidle', 8.0, -8.0, -1, 0, 0, false, false, false)
        while IsEntityPlayingAnim(playerPed, lib, 'enter_to_armraisedidle', 3) do
            Citizen.Wait(0)
            DisableAllControlActions(0)
        end
        TriggerServerEvent("wheel:getLucky")
        TaskPlayAnim(playerPed, lib, 'armraisedidle_to_spinningidle_high', 8.0, -8.0, -1, 0, 0, false, false, false)
    end
end]]