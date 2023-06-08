
inMenu = true
local QBCore = exports['qb-core']:GetCoreObject()
local bank = 0
local firstname = ''
local lastname = ''

RegisterNetEvent("gksphone:setBankBalance")
AddEventHandler("gksphone:setBankBalance", function(value)
      bank = value
      SendNUIMessage({event = 'updateBankbalance', banking = bank})
end)


RegisterNetEvent('gksphone:bakttt')
AddEventHandler('gksphone:bakttt', function()
      QBCore.Functions.GetPlayerData(function(PlayerData)
            if PlayerData ~= nil and PlayerData.money ~= nil then
                cashAmount = PlayerData.money["bank"]
            end
      end)

      SendNUIMessage({event = 'updateBankbalance', banking = cashAmount})
      
end)


--===============================================
--==         Transfer Event                    ==
--===============================================


RegisterNUICallback('transferPhoneNumber', function(data)
      TriggerServerEvent('gksphone:transferPhoneNumber', data.to, data.amountt)
end)

--===============================================
--==             Ad ve Soyad                   ==
--===============================================

RegisterNetEvent("gksphone:firstname")
AddEventHandler("gksphone:firstname", function(identifier, firstname, jobname, joblabel, accmoney)
    
  SendNUIMessage({event = 'identifierrr', identifier = identifier})
  SendNUIMessage({event = 'updateMyFirstname', firstname = firstname})
  SendNUIMessage({event = 'jobname', jobname = jobname})

  TriggerEvent('gksphone:setBankBalance', accmoney)

      if joblabel then

            SendNUIMessage({event = 'jobkontrol', joblabel = 'boss'})

            QBCore.Functions.TriggerCallback('qb-bossmenu:server:GetAccount', function(cb)
                  SendNUIMessage({event = 'societypara', isciparasi = cb})
            end, jobname)

      else

            SendNUIMessage({event = 'jobkontrol', joblabel = joblabel})

      end

end)



RegisterNetEvent("gksphone:lastname")
AddEventHandler("gksphone:lastname", function(_lastname)
  lastname = _lastname
  SendNUIMessage({event = 'updateMyListname', lastname = lastname})
end)


RegisterNetEvent("gksphone:bank_getBilling")
AddEventHandler("gksphone:bank_getBilling", function(bankkkkk)
  SendNUIMessage({event = 'bank_billingg', bankkkkk = bankkkkk})
end)

RegisterNUICallback('bank_getBilling', function(data, cb)
  TriggerServerEvent('gksphone:bank_getBilling', GetPlayerServerId(PlayerId()))
end)



function setBankaparas(isciparasi)
      SendNUIMessage({event = 'societypara', isciparasi = isciparasi})
end

