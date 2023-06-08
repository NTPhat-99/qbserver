--================================================================================================
--==                                                XenKnighT                                  ==
--================================================================================================


local QBCore = exports['qb-core']:GetCoreObject()

RegisterServerEvent('gksphone:transferPhoneNumber')
AddEventHandler('gksphone:transferPhoneNumber', function(to, amountt)
    local _source = source
    local xPlayer = QBCore.Functions.GetPlayer(_source)


    local zPlayer = QBCore.Functions.GetPlayerByPhone(to)


    local balance = 0
    if zPlayer ~= nil then
        local zPlayerIden = zPlayer.PlayerData.citizenid
        local name = zPlayer.PlayerData.charinfo.firstname .. " " .. zPlayer.PlayerData.charinfo.lastname
        local name2 = xPlayer.PlayerData.charinfo.firstname .. " " .. xPlayer.PlayerData.charinfo.lastname
        balance = xPlayer.PlayerData.money["bank"]
        zbalance = zPlayer.PlayerData.money["bank"]
        if xPlayer.PlayerData.citizenid == zPlayerIden then
            TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = _U('bank_yourself'), img= '/html/static/img/icons/wallet.png' })
        else
            if balance <= 0 or balance < tonumber(amountt) or tonumber(amountt) <= 0 then
                TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = _U('bank_nomoney'), img= '/html/static/img/icons/wallet.png' })
            else
                xPlayer.Functions.RemoveMoney('bank', tonumber(amountt), "Bank depost")
                zPlayer.Functions.AddMoney('bank', tonumber(amountt), "Bank depost")
                -- advanced notification with bank icon
                TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = name2 .. _U('bank_transfer'), img= '/html/static/img/icons/wallet.png' })
                
                TriggerClientEvent('gksphone:notifi', zPlayer.PlayerData.source, {title = 'Bank', message = name .. _U('bank_transfer'), img= '/html/static/img/icons/wallet.png' })
                

                        exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
                            ["@type"] = 1,
                            ["@identifier"] = xPlayer.PlayerData.citizenid,
                            ["@price"] = amountt,
                            ["@name"] = name
                        }, function(results)
                        end)
 

                        exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
                            ["@type"] = 2,
                            ["@identifier"] = zPlayerIden,
                            ["@price"] = amountt,
                            ["@name"] = name2
                        }, function(resultss)
                        end)

                        if  tonumber(amountt) >= Config.BankLimit then
                            BankTrasnfer(name, xPlayer.PlayerData.citizenid, tonumber(amountt), name2, zPlayerIden)
                          end
	
                        TriggerClientEvent('gksphone:bakttt', _source)
                        TriggerClientEvent('gksphone:bakttt', zPlayer.PlayerData.source)
                        BankGetBilling(_source)
                        BankGetBilling(zPlayer.PlayerData.source)

            end
           
        end

    else
        local zPlayerIden = getIdentifierByPhoneNumberBank(to)
 
        if zPlayerIden ~= nil then

            balance = xPlayer.PlayerData.money["bank"]

            
            local name2 = xPlayer.PlayerData.charinfo.firstname .. " " .. xPlayer.PlayerData.charinfo.lastname
            if xPlayer.PlayerData.citizenid == zPlayerIden then
              TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = _U('bank_yourself'), img= '/html/static/img/icons/wallet.png' })
            else
              if balance <= 0 or balance < tonumber(amountt) or tonumber(amountt) <= 0 then
                TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = _U('bank_nomoney'), img= '/html/static/img/icons/wallet.png' })
            else

                    exports.oxmysql:execute("SELECT money FROM players WHERE citizenid = @identifier", {
                      ['@identifier'] = zPlayerIden,
                  }, function(result)
              
                  g=json.decode(result[1].money)
              
                
                  g['bank']=g['bank']+(amountt);
                  
                 
                  xPlayer.Functions.RemoveMoney('bank', tonumber(amountt), "Bank depost")
                  
              
                      exports.oxmysql:execute('UPDATE players SET `money` = @bank WHERE `citizenid` = @identifier', {
                        ['@identifier'] = zPlayerIden,
                        ['@bank'] = json.encode(g),
                      })
              
                  end)

                  exports.oxmysql:execute("SELECT charinfo FROM players WHERE citizenid = @identifier", {
                    ['@identifier'] = zPlayerIden,
                }, function(bilgi)
                  local deneme = json.decode(bilgi[1].charinfo)

                  TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = deneme.firstname .. " " .. deneme.firstname .. _U('bank_transfer'), img= '/html/static/img/icons/wallet.png' })
                  exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
                    ["@type"] = 1,
                    ["@identifier"] = xPlayer.PlayerData.citizenid,
                    ["@price"] = amountt,
                    ["@name"] = deneme.firstname .. " " .. deneme.lastname
                    }, function(results)
                    end)

                  end)
                
                    exports.oxmysql:execute("INSERT INTO gksphone_bank_transfer (type, identifier, price, name) VALUES (@type, @identifier, @price, @name)", {
                    ["@type"] = 2,
                    ["@identifier"] = zPlayerIden,
                    ["@price"] = amountt,
                    ["@name"] = name2
                      }, function(resultss)
                     end)

                     if  tonumber(amountt) >= Config.BankLimit then
                      BankTrasnfer(name, xPlayer.PlayerData.citizenid, tonumber(amountt), name2, zPlayerIden)
                    end

                    TriggerClientEvent('gksphone:bakttt', _source)
                    BankGetBilling(_source)

            end

            end



        else
        TriggerClientEvent('gksphone:notifi', _source, {title = 'Bank', message = _U('bank_systemnophone'), img= '/html/static/img/icons/wallet.png' })
        end
    end

end)




function BankTrasnfer (name, identifier1, amount, name2, identifier2)
    local discord_webhook = Config.BankTrasnfer
    if discord_webhook == '' then
      return
    end
  
    local headers = {
      ['Content-Type'] = 'application/json'
    }
    local data = {
      ["username"] = 'Bank Transfer',
      ["avatar_url"] = 'https://www.futurebrand.com/uploads/case-studies/_heroImage/3-NatWest-New-Logo.jpg',
      ["embeds"] = {{
        ["color"] = color
      }}
    }
  
    data['embeds'][1]['title'] = "[**" .. name .."**] has transferred [**£" .. amount .. "**] to [**" .. name2 .. "**]."
    data['embeds'][1]['description'] = "[**" .. name .. "**]" .. "**[" .. identifier1 .. "**]" .. "\n" .. "[**" .. name2 .. "**]" .."[**" .. identifier2 .."**]"
  
    PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
  end

--================================================================================================
--==                                           Ad ve Soyad                                      ==
--================================================================================================





function BankGetBilling (source, cb)
  local xPlayer = QBCore.Functions.GetPlayer(source)
    exports.oxmysql:execute([===[
      SELECT * FROM gksphone_bank_transfer WHERE identifier = @identifier ORDER BY time DESC LIMIT 10
      ]===], { ['@identifier'] = xPlayer.PlayerData.citizenid }, function(bankkkkk)
    
        TriggerClientEvent('gksphone:bank_getBilling', source, bankkkkk)

      end)


      
  end 
  

RegisterServerEvent('gksphone:bank_getBilling')
AddEventHandler('gksphone:bank_getBilling', function(source)
  local sourcePlayer = tonumber(source)
  BankGetBilling(sourcePlayer)
  local xPlayer = QBCore.Functions.GetPlayer(sourcePlayer)

  TriggerClientEvent('gksphone:setBankBalance', sourcePlayer, xPlayer.PlayerData.money.bank)
  
end)
