local QBCore = exports['qb-core']:GetCoreObject()

QBCore.Functions.CreateCallback('gksphone:getbilling', function(source, cb)
	local e=QBCore.Functions.GetPlayer(source)
	exports.oxmysql:execute('SELECT * FROM gksphone_invoices WHERE citizenid = @identifier',{["@identifier"]=e.PlayerData.citizenid},function(result)
		local billingg = {}
		for i=1, #result, 1 do
			table.insert(billingg, {id = {id = result[i].id, society = result[i].society, sendercitizenid = result[i].sendercitizenid}, label = result[i].society, amount=result[i].amount}) 
		end
		cb(billingg)
	end)
end)

function round(num, numDecimalPlaces)
    if numDecimalPlaces and numDecimalPlaces>0 then
      local mult = 10^numDecimalPlaces
      return math.floor(num * mult + 0.5) / mult
    end
    return math.floor(num + 0.5)
end


RegisterServerEvent("gksphone:faturapayBill")
AddEventHandler("gksphone:faturapayBill", function(id, amount)
	local Ply = QBCore.Functions.GetPlayer(source)
	local SenderPly = QBCore.Functions.GetPlayerByCitizenId(id.sendercitizenid)

	if SenderPly ~= nil then
		if Config.BillingCommissions[id.society] then
			commission = round(amount * Config.BillingCommissions[id.society])
			billAmount = round(amount - (amount * Config.BillingCommissions[id.society]))
			SenderPly.Functions.AddMoney('bank', commission)
			TriggerClientEvent('gksphone:notifi', SenderPly.PlayerData.source, {title = 'Billing', message = string.format('You received a commission check of $%s when %s %s paid a bill of $%s.', commission, Ply.PlayerData.charinfo.firstname, Ply.PlayerData.charinfo.lastname, amount), img= '/html/static/img/icons/logo.png' })
		end
	end

	Ply.Functions.RemoveMoney('bank', amount, "paid-invoice")
	TriggerEvent("qb-bossmenu:server:addAccountMoney", id.society, amount)
	exports.oxmysql:execute('DELETE FROM gksphone_invoices WHERE id=@id', {['@id'] = id.id})
    TriggerClientEvent('updatebilling', source)
    TriggerClientEvent('gksphone:bakttt', source)
end)



QBCore.Commands.Add('billing', 'Bill A Player', {{name='id', help='Player ID'}, {name='amount', help='Fine Amount'}}, false, function(source, args)
    local biller = QBCore.Functions.GetPlayer(source)
    local billed = QBCore.Functions.GetPlayer(tonumber(args[1]))
    local amount = tonumber(args[2]) 

    if biller.PlayerData.job.name == "police" or biller.PlayerData.job.name == 'ambulance' or biller.PlayerData.job.name == 'mechanic' then
        if billed ~= nil then
            if biller.PlayerData.citizenid ~= billed.PlayerData.citizenid then
                if amount and amount > 0 then
                    exports.oxmysql:execute('INSERT INTO gksphone_invoices (citizenid, amount, society, sender, sendercitizenid) VALUES (@citizenid, @amount, @society, @sender, @sendercitizenid)', {
                        ['@citizenid'] = billed.PlayerData.citizenid,
                        ['@amount'] = amount,
                        ['@society'] = biller.PlayerData.job.name,
                        ['@sender'] = biller.PlayerData.charinfo.firstname,
                        ['@sendercitizenid'] = biller.PlayerData.citizenid
                    })
                    
                    TriggerClientEvent(Config.CoreNotify, source, 'Invoice Successfully Sent', 'success')
                    TriggerClientEvent(Config.CoreNotify, billed.PlayerData.source, 'New Invoice Received')
                else
                    TriggerClientEvent(Config.CoreNotify, source, 'Must Be A Valid Amount Above 0', 'error')
                end
            else
                TriggerClientEvent(Config.CoreNotify, source, 'You Cannot Bill Yourself', 'error')
            end
        else
            TriggerClientEvent(Config.CoreNotify, source, 'Player Not Online', 'error')
        end
    else
        TriggerClientEvent(Config.CoreNotify, source, 'No Access', 'error')
    end
end)
