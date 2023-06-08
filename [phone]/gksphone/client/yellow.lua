local QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent("gksphone:yellow_getPagess")
AddEventHandler("gksphone:yellow_getPagess", function(pagess)
  SendNUIMessage({event = 'yellow_pagess', pagess = pagess})
end)

RegisterNetEvent("gksphone:yellow_newPagess")
AddEventHandler("gksphone:yellow_newPagess", function(pages)
  SendNUIMessage({event = 'yellow_newPages', pages = pages})
end)


RegisterNetEvent("gksphone:yellow_showError")
AddEventHandler("gksphone:yellow_showError", function(title, message)
  SendNUIMessage({event = 'yellow_showError', message = message, title = title})
end)

RegisterNetEvent("gksphone:yellow_showSuccess")
AddEventHandler("gksphone:yellow_showSuccess", function(title, message)
  SendNUIMessage({event = 'yellow_showSuccess', message = message, title = title})
end)

RegisterNUICallback('yellow_getPagess', function(data, cb)
  TriggerServerEvent('gksphone:yellow_getPagess', data.firstname, data.phone_number)
end)

RegisterNUICallback('yellow_postPages', function(data, cb)
  TriggerServerEvent('gksphone:yellow_postPagess', data.firstname or '', data.phone_number or '', data.lastname or '', data.message, data.image)
end)






RegisterNUICallback('yellow_userssDeleteTweet', function(data, cb) 
  TriggerServerEvent('gksphone:yellow_usersDeleteTweet', data.yellowId or '', data.phone_number)
end)



RegisterNUICallback('yellow_getUserTweets', function(data, cb)
  QBCore.Functions.TriggerCallback('gksphone:GetYellowUsers', function(usersyellow)
    UpdateYellow(usersyellow)
  end)
end)

function UpdateYellow(usersyellow)
  SendNUIMessage({event = 'yellow_UserTweets', usersyellow = usersyellow})
end

RegisterNetEvent('DeleteYellow')
AddEventHandler('DeleteYellow', function(usersyellow)
  QBCore.Functions.TriggerCallback('gksphone:GetYellowUsers', function(data)
      UpdateYellow(data)
    end, usersyellow)
end)