--====================================================================================
-- #XenKnighT : GÜRKAN SELİM ALBAYRAK
--====================================================================================
local QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent("gksphone:insto_getinstas")
AddEventHandler("gksphone:insto_getinstas", function(instas)
  SendNUIMessage({event = 'insto_instas', instas = instas})
end)

RegisterNetEvent("gksphone:insto_getFavoriteinstas")
AddEventHandler("gksphone:insto_getFavoriteinstas", function(instas)
  SendNUIMessage({event = 'insto_favoriteinstas', instas = instas})
end)

RegisterNetEvent("gksphone:insto_newinstas")
AddEventHandler("gksphone:insto_newinstas", function(inap)
  SendNUIMessage({event = 'insto_newinap', inap = inap})
end)

RegisterNetEvent("gksphone:insto_updateinapLikes")
AddEventHandler("gksphone:insto_updateinapLikes", function(inapId, likes)
  SendNUIMessage({event = 'insto_updateinapLikes', inapId = inapId, likes = likes})
end)

RegisterNetEvent("gksphone:insto_setAccount")
AddEventHandler("gksphone:insto_setAccount", function(username, password, avatarUrl)
  SendNUIMessage({event = 'insto_setAccount', username = username, password = password, avatarUrl = avatarUrl})
end)

RegisterNetEvent("gksphone:insto_createAccount")
AddEventHandler("gksphone:insto_createAccount", function(account)
  SendNUIMessage({event = 'insto_createAccount', account = account})
end)

RegisterNetEvent("gksphone:insto_showError")
AddEventHandler("gksphone:insto_showError", function(title, message, image)
  SendNUIMessage({event = 'insto_showError', message = message, title = title, image = image})
end)

RegisterNetEvent("gksphone:insto_showSuccess")
AddEventHandler("gksphone:insto_showSuccess", function(title, message, image, filters)
  SendNUIMessage({event = 'insto_showSuccess', message = message, title = title, image = image, filters = filters})
end)

RegisterNetEvent("gksphone:insto_setinapLikes")
AddEventHandler("gksphone:insto_setinapLikes", function(inapId, isLikes)
  SendNUIMessage({event = 'insto_setinapLikes', inapId = inapId, isLikes = isLikes})
end)



RegisterNUICallback('insto_login', function(data, cb)
  TriggerServerEvent('gksphone:insto_login', data.username, data.password)
end)
RegisterNUICallback('insto_changePassword', function(data, cb)
  TriggerServerEvent('gksphone:insto_changePassword', data.forename, data.surname, data.username, data.password, data.newPassword)
end)


RegisterNUICallback('insto_createAccount', function(data, cb)
  TriggerServerEvent('gksphone:insto_createAccount', data.forename, data.surname, data.username, data.password, data.avatarUrl)
end)

RegisterNUICallback('insto_getinstas', function(data, cb)
  TriggerServerEvent('gksphone:insto_getinstas', data.forename, data.surname, data.username, data.password)
end)

RegisterNUICallback('insto_getFavoriteinstas', function(data, cb)
  TriggerServerEvent('gksphone:insto_getFavoriteinstas', data.forename, data.surname, data.username, data.password)
end)

RegisterNUICallback('insto_postinap', function(data, cb)
  TriggerServerEvent('gksphone:insto_postinstas', data.username or '', data.password or '', data.message or '', data.image or '', data.filters)
end)

RegisterNUICallback('insto_toggleLikeinap', function(data, cb)
  TriggerServerEvent('gksphone:insto_toogleLikeinap', data.forename or '', data.surname or '', data.username or '', data.password or '', data.inapId)
end)

RegisterNUICallback('insto_setAvatarUrl', function(data, cb)
  TriggerServerEvent('gksphone:insto_setAvatarUrl', data.username or '', data.password or '', data.avatarUrl)
end)



function setkSroys(storie)
  
  SendNUIMessage({event = 'getStorie', storie = storie})

end

function setStorytB(storiemy)
  
  SendNUIMessage({event = 'getBStorie', storiemy = storiemy})

end

RegisterNUICallback('getBStorys', function(data)
  QBCore.Functions.TriggerCallback('gksphone:getsBStorys', function(data)
    setStorytB(data)
  end)
end)

RegisterNetEvent('gksphonee:getBstory')
AddEventHandler('gksphonee:getBstory', function(coin)

  QBCore.Functions.TriggerCallback('gksphone:getsBStorys', function(data)
    setStorytB(data)
  
  end)
end)

RegisterNUICallback('getStorys', function(data)
  QBCore.Functions.TriggerCallback('gksphone:getsStorys', function(data)
    setkSroys(data)
  end)
end)


RegisterNetEvent('gksphonee:getStorie')
AddEventHandler('gksphonee:getStorie', function(coin)

  QBCore.Functions.TriggerCallback('gksphone:getsStorys', function(data)
    setkSroys(data)
  
  end, coin)
end)


RegisterNUICallback('instostoyry', function(data)
  TriggerServerEvent('gksphone:storysa', data.username, data.password, data.stories, data.time)
end)





--====================================================================================
-- #XenKnighT : GÜRKAN SELİM ALBAYRAK
--====================================================================================