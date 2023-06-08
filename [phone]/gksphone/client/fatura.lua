local QBCore = exports['qb-core']:GetCoreObject()

function Billing(billingg)
  SendNUIMessage({event = 'fatura_billingg', billingg = billingg})
end

RegisterNUICallback('fatura_getBilling', function(data, cb)
  QBCore.Functions.TriggerCallback('gksphone:getbilling', function(data)
    Billing(data)
  end)
end)

RegisterNUICallback('faturapayBill', function(data)
  TriggerServerEvent('gksphone:faturapayBill', data.id, data.amount)
end)

RegisterNetEvent('updatebilling')
AddEventHandler('updatebilling', function(billingg)
  QBCore.Functions.TriggerCallback('gksphone:getbilling', function(data)
      Billing(data)
    end, billingg)
end)
