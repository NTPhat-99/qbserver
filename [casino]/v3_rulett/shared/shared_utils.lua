if not IsDuplicityVersion() then -- CLIENT
    Utils = {
        Draw3DText = function(coords, text, size, font)
            coords = vector3(coords.x, coords.y, coords.z)

            local camCoords = GetGameplayCamCoords()
            local distance = #(coords - camCoords)

            if not size then
                size = 1
            end
            if not font then
                font = 0
            end

            local scale = (size / distance) * 2
            local fov = (1 / GetGameplayCamFov()) * 100
            scale = scale * fov

            SetTextScale(0.0 * scale, 0.55 * scale)
            SetTextFont(font)
            SetTextColour(255, 255, 255, 255)
            SetTextDropshadow(0, 0, 0, 0, 255)
            SetTextDropShadow()
            SetTextOutline()
            SetTextCentre(true)

            SetDrawOrigin(coords, 0)
            BeginTextCommandDisplayText('STRING')
            AddTextComponentSubstringPlayerName(text)
            EndTextCommandDisplayText(0.0, 0.0)
            ClearDrawOrigin()
        end,
        ShowHelpNotification = function(msg, thisFrame, beep, duration)
            AddTextEntry('rulettNotification', msg)

            if thisFrame then
                DisplayHelpTextThisFrame('rulettNotification', false)
            else
                BeginTextCommandDisplayHelp('rulettNotification')
                EndTextCommandDisplayHelp(0, false, false, duration or -1)
            end
        end,
        ShowNotification = function(msg)
            QBCore.Functions.Notify(msg)
        end
    }

    RegisterNetEvent('rulett:showNotification')
    AddEventHandler(
        'rulett:showNotification',
        function(msg)
            Utils.ShowNotification(msg)
        end
    )
end

if IsDuplicityVersion() then -- server
end
