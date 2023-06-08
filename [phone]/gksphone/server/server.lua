local QBCore = exports['qb-core']:GetCoreObject()

math.randomseed(os.time()) 


function getSourceFromIdentifier(identifier, cb)


	local xPlayers = QBCore.Functions.GetPlayers()
	for i=1, #xPlayers, 1 do
		local xPlayer = QBCore.Functions.GetPlayer(xPlayers[i])
		if(xPlayer.PlayerData.citizenid ~= nil and xPlayer.PlayerData.citizenid == identifier) or (xPlayer.PlayerData.citizenid == identifier) then
			    cb(xPlayer.PlayerData.source)
			return
		end
	end
	cb(nil)
end

function getSource(job)
    local Lawyers = {}
	local xPlayers = QBCore.Functions.GetPlayers()
	for i=1, #xPlayers, 1 do
		local xPlayer = QBCore.Functions.GetPlayer(xPlayers[i])
        if xPlayer ~= nil then
            if(xPlayer.PlayerData.job.name == job) then
                table.insert(Lawyers, {
                    id = xPlayer.PlayerData.source,
                })
            end
        end
	end
	return Lawyers
end


QBCore.Functions.CreateUseableItem('phone', function(source)
	
	TriggerClientEvent('gks:use', source)
end)



function getNumberPhone(identifier)
    local result = exports.oxmysql:scalarSync("SELECT gksphone_settings.phone_number FROM gksphone_settings WHERE gksphone_settings.identifier = @identifier", {
        ['@identifier'] = identifier
    })

    if result ~= nil then
        return result
    else
        return nil
    end

end

function getBlockNumber(identifier, number)
    local result = exports.oxmysql:executeSync("SELECT gksphone_blockednumber.hex FROM gksphone_blockednumber WHERE gksphone_blockednumber.identifier = @identifier AND gksphone_blockednumber.number = @number", {
        ['@identifier'] = identifier,
        ['@number'] = number
    })

    if result[1] ~= nil then
        return 'var'
    else
        return nil
    end
end

function getIdentifierByPhoneNumberBank(phone_number) 
    local result = exports.oxmysql:scalarSync("SELECT identifier FROM gksphone_settings WHERE phone_number = @phone_number", {
        ['@phone_number'] = phone_number
    })

    if result ~= nil then
        return result
    end
    return nil
end


function settingsnumber(phone_number) 
  
    local result = exports.oxmysql:executeSync("SELECT identifier FROM gksphone_settings WHERE phone_number = @phone_number", {
        ['@phone_number'] = phone_number
    })
    if result[1] ~= nil then
        return result[1].identifier
    end
    return nil
end

function getIdentifierByPhoneNumber(phone_number) 
 
    local player = QBCore.Functions.GetPlayerByPhone(phone_number)
    if player ~= nil then
    return player.PlayerData.citizenid
    else
        return nil
    end
end

RegisterServerEvent("gksphone:alNumber")
AddEventHandler("gksphone:alNumber",function(a,b,c,d)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local ident = getIdentifierByPhoneNumber(a)
    if e then
        exports.oxmysql:execute("INSERT INTO gksphone_blockednumber (`identifier`, `hex`, `number`) VALUES(@identifier, @hex, @number);", { 
            ['@identifier'] = e.PlayerData.citizenid,
            ['@hex'] = ident,
            ['@number'] = a
        },function(result)
            TriggerClientEvent('yenNumber', -1,a,b)
        end)

    end
end)



--====================================================================================
--  Contacts
--====================================================================================
function getContacts(identifier,cb)

    local result = exports.oxmysql:executeSync("SELECT * FROM gksphone_users_contacts WHERE identifier = @identifier", {
        ['@identifier'] = identifier
    })
    if result ~= nil then
        return result
    end
    return nil

end

function addContact(source, identifier, number, display, avatar)
    local sourcePlayer = tonumber(source)
    exports.oxmysql:execute("INSERT INTO gksphone_users_contacts (`identifier`, `number`,`display`,`avatar`) VALUES(@identifier, @number, @display, @avatar)", { 
        ['@identifier'] = identifier,
        ['@number'] = number,
        ['@display'] = display,
		['@avatar'] = avatar,
    },function()
        notifyContactChange(sourcePlayer, identifier)
    end)
end



function updateContact(source, identifier, id, number, display, avatar)
    local sourcePlayer = tonumber(source)
    exports.oxmysql:execute("UPDATE gksphone_users_contacts SET number = @number, display = @display, avatar = @avatar WHERE id = @id", { 
        ['@number'] = number,
        ['@display'] = display,
		['@avatar'] = avatar,
        ['@id'] = id,
    },function()
        notifyContactChange(sourcePlayer, identifier)
    end)
end

function ProfilChange(source, identifier, avatar_url)
    local sourcePlayer = tonumber(source)
    exports.oxmysql:execute("UPDATE gksphone_settings SET avatar_url = @avatar_url WHERE identifier = @identifier", { 
        ['@avatar_url'] = avatar_url,
        ['@identifier'] = identifier
    },function()
    end)
end

QBCore.Functions.CreateCallback('gksphone:getAvatar', function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)
	local myPhoneNumber = xPlayer.PlayerData.charinfo.phone
    local avatar = {}
    local result = exports.oxmysql:executeSync("SELECT avatar_url FROM gksphone_settings WHERE phone_number = @myPhoneNumber", {
        ["@myPhoneNumber"] = myPhoneNumber
    })

    for i=1, #result, 1 do
        table.insert(avatar, {avatar_url = result[i].avatar_url}) 
    end
    cb(avatar)
end)


RegisterServerEvent('gksphone:avatarChange')
AddEventHandler('gksphone:avatarChange', function(avatar_url)
    local _source = source
    local sourcePlayer = tonumber(_source)
    xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    ProfilChange(sourcePlayer, identifier, avatar_url)
end)

function deleteContact(source, identifier, id)
    local sourcePlayer = tonumber(source)
    exports.oxmysql:execute("DELETE FROM gksphone_users_contacts WHERE `identifier` = @identifier AND `id` = @id", { 
        ['@identifier'] = identifier,
        ['@id'] = id,
    })

    notifyContactChange(sourcePlayer, identifier)
end


function deleteAllContact(identifier)
    exports.oxmysql:execute("DELETE FROM gksphone_users_contacts WHERE `identifier` = @identifier", { 
        ['@identifier'] = identifier
    })
end



function notifyContactChange(source, identifier)
   
    local sourcePlayer = tonumber(source)
    if sourcePlayer ~= nil then
        exports.oxmysql:execute("SELECT * FROM gksphone_users_contacts WHERE identifier = @identifier", {
            ['@identifier'] = identifier
        },function(result)
            TriggerClientEvent("gksphone:contactList", sourcePlayer, result)
        end)    
    end
end





RegisterServerEvent('gksphone:addContact')
AddEventHandler('gksphone:addContact', function(display, phoneNumber, avatar)
    local _source = source
    local sourcePlayer = tonumber(_source)
    xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    addContact(sourcePlayer, identifier, phoneNumber, display, avatar)
end)

RegisterServerEvent('gksphone:updateContact')
AddEventHandler('gksphone:updateContact', function(id, display, phoneNumber, avatar)
    local _source = source
    local sourcePlayer = tonumber(_source)
    xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    updateContact(sourcePlayer, identifier, id, phoneNumber, display, avatar)
end)

RegisterServerEvent('gksphone:deleteContact')
AddEventHandler('gksphone:deleteContact', function(id)
    local _source = source
    local sourcePlayer = tonumber(_source)
	xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    deleteContact(sourcePlayer, identifier, id)
end)

--====================================================================================
--  Group Message
--====================================================================================
RegisterServerEvent('gksphone:creategroup')
AddEventHandler('gksphone:creategroup', function(a, b, c, d)

local src = source
local e = QBCore.Functions.GetPlayer(src)
local identifier = e.PlayerData.citizenid
local deneyy = json.decode(c)

    if e then
        exports.oxmysql:execute('INSERT INTO gksphone_messages_group (`owner`, `ownerphone`, `groupname`, `gimage`, `contacts`) VALUES(@owner, @ownerphone, @groupname, @gimage, @contacts);', {
            ['@owner'] = identifier,
            ['@ownerphone'] = d,
            ['@groupname'] = a,
            ['@gimage'] = b,
            ['@contacts'] = c,
        }, function(result)

            local data = {id = result.insertId, owner = identifier, ownerphone = d, groupname = a, gimage = b, contacts = deneyy}
            for i = 1, #deneyy do
                    
                local otherIdentifier = getIdentifierByPhoneNumber(deneyy[i])
                
                if otherIdentifier ~= nil then
                    
                    getSourceFromIdentifier(otherIdentifier, function (osou)
                    
                        if tonumber(osou) ~= nil then 
                            if tonumber(osou) ~= src then

                                TriggerClientEvent('gksphone:creategroup', tonumber(osou), data, a)
                            else
                                TriggerClientEvent('gksphone:creategroupsrc', src, data)
                            end
                        end

                    end)
     
                    
                end

            end
        end)

    end
end)

RegisterServerEvent('gksphone:newpeople')
AddEventHandler('gksphone:newpeople', function(a, b)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local deneamd = json.decode(b)

  
    if e then
        exports.oxmysql:execute("UPDATE gksphone_messages_group SET contacts = @contacts WHERE id = @id", { 
            ['@id'] = a,
            ['@contacts'] = b
        })

        for i = 1, #deneamd do

            local otherIdentifier = getIdentifierByPhoneNumber(deneamd[i])
    

            if otherIdentifier ~= nil then

                getSourceFromIdentifier(otherIdentifier, function (osou)
                  
                    if tonumber(osou) ~= nil then 
                        Citizen.Wait(1000)
                        TriggerClientEvent('gksphone:updatenewpeoppel', tonumber(osou),  getGroup(deneamd[i]), getGroupMessage(deneamd[i]))
                        TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = _U('group_newpeop'), img= '/html/static/img/icons/messages.png' })
                    end
                end)
            

            end

        end

    end
end)

RegisterServerEvent('gksphone:updategroup')
AddEventHandler('gksphone:updategroup', function(a, b, c)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local deneamd = b


    if e then
        exports.oxmysql:execute("UPDATE gksphone_messages_group SET contacts = @contacts WHERE id = @id", { 
            ['@id'] = a,
            ['@contacts'] = json.encode(b)
        })

        for i = 1, #deneamd do

            local otherIdentifier = getIdentifierByPhoneNumber(deneamd[i])

            if otherIdentifier ~= nil then

                getSourceFromIdentifier(otherIdentifier, function (osou)
                    
                    if tonumber(osou) ~= nil then 
                        Citizen.Wait(1000)
                        TriggerClientEvent('gksphone:updategroup', tonumber(osou),  getGroup(deneamd[i]), getGroupMessage(deneamd[i]))
                        TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = c .._U('group_delpeop'), img= '/html/static/img/icons/messages.png' })
                    end
                end)
            

            end



        end

        local otherIdentifiersource = getIdentifierByPhoneNumber(c)

        if otherIdentifiersource ~= nil then

            getSourceFromIdentifier(otherIdentifiersource, function (osou)
              
                if tonumber(osou) ~= nil then 
                    Citizen.Wait(1000)
                    TriggerClientEvent('gksphone:updategroup', tonumber(osou),  getGroup(c), getGroupMessage(c))
                    TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = c .._U('group_delpeop'), img= '/html/static/img/icons/messages.png' })
                end
            end)
        

        end

    end
end)

RegisterServerEvent('gksphone:deletegroup')
AddEventHandler('gksphone:deletegroup', function(a, b)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local deneamd = b

    if e then
        exports.oxmysql:execute("DELETE FROM gksphone_group_message WHERE `groupid` = @groupid", {
            ['@groupid'] = a
        })
        exports.oxmysql:execute("DELETE FROM gksphone_messages_group WHERE `id` = @id", {
            ['@id'] = a
        })
        local wanted = {}


             for i = 1, #deneamd do
                    
                local otherIdentifier = getIdentifierByPhoneNumber(deneamd[i])
                
                if otherIdentifier ~= nil then
                    
                    getSourceFromIdentifier(otherIdentifier, function (osou)
                       
                        if tonumber(osou) ~= nil then 
                            
                            TriggerClientEvent('gksphone:deletegroup', tonumber(osou), getGroup(deneamd[i]), getGroupMessage(deneamd[i]))
                        end
                    end)
     
                    
                end

            end


     
    end
end)

RegisterServerEvent('gksphone:sendgroupmessage')
AddEventHandler('gksphone:sendgroupmessage', function(a, b, c, d, edd)

local src = source
local e = QBCore.Functions.GetPlayer(src)
local identifier = e.PlayerData.citizenid

local deneyy = json.decode(d)


    if e then
        exports.oxmysql:execute('INSERT INTO gksphone_group_message (`groupid`, `owner`, `ownerphone`, `groupname`, `messages`, `contacts`) VALUES(@groupid, @owner, @ownerphone, @groupname, @messages, @contacts);', {
            ['@groupid'] = a,
            ['@owner'] = identifier,
            ['@ownerphone'] = edd,
            ['@groupname'] = b,
            ['@messages'] = c,
            ['@contacts'] = d,
        }, function(result)
      
         local data = {id = result.insertId, groupid = a, owner = identifier, ownerphone = edd, groupname = b, messages = c, contacts = deneyy, time = tonumber(os.time().."000.0")}
           
                for i = 1, #deneyy do
                    
                    local otherIdentifier = getIdentifierByPhoneNumber(deneyy[i])
                    
                    if otherIdentifier ~= nil then
                        
                        getSourceFromIdentifier(otherIdentifier, function (osou)
                            if tonumber(osou) ~= nil then 
                                if tonumber(osou) ~= src then
                                    TriggerClientEvent('gksphone:csendgroupmessage', tonumber(osou), data)
                                    TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = b .._U('group_newmes'), img= '/html/static/img/icons/messages.png', appinfo = a })
                                else
                                    TriggerClientEvent('gksphone:csendgroupmessagesrc', src, data)
                                   -- TriggerClientEvent('gksphone:notifi', src, {title = 'Messages', message = b .._U('group_newmes'), img= '/html/static/img/icons/messages.png', appinfo = data.id })
                                end
                            end
                        end)
         
                        
                    end

                end

                
     
            
        end)

    end
end)
--====================================================================================
--  Messages
--====================================================================================

function getMessages(identifier)
    local result = exports.oxmysql:executeSync("SELECT gksphone_messages.*, gksphone_settings.phone_number FROM gksphone_messages LEFT JOIN gksphone_settings ON gksphone_settings.identifier = @identifier WHERE gksphone_messages.receiver = gksphone_settings.phone_number", {
         ['@identifier'] = identifier
    })
    return result
end

function getGroup(num)
    local wanted = {}
   local result = exports.oxmysql:executeSync("SELECT * FROM gksphone_messages_group", {
        ['@identifier'] = identifier
   })
        
        for i=1, #result, 1 do
            table.insert(wanted, {id = result[i].id, owner = result[i].owner, ownerphone = result[i].ownerphone, groupname = result[i].groupname, gimage = result[i].gimage, contacts= json.decode(result[i].contacts)}) 
        end
        

   return wanted
end

function getGroupMessage(num)
    local wanted = {}
    local result = exports.oxmysql:executeSync("SELECT * FROM gksphone_group_message", {
        ['@identifier'] = identifier
   })

   for i=1, #result, 1 do
     table.insert(wanted, {id = result[i].id, groupid = result[i].groupid, owner = result[i].owner, ownerphone = result[i].ownerphone, groupname = result[i].groupname, messages = result[i].messages, contacts= json.decode(result[i].contacts), time = result[i].time}) 
   end


return wanted

end

RegisterServerEvent("gksphone:jobgetmessage")
AddEventHandler("gksphone:jobgetmessage",function(a)
    local src = source

    local result = exports.oxmysql:executeSync("SELECT * FROM gksphone_job_message WHERE jobm = @jobm ORDER BY TIME DESC", {
         ['@jobm'] = a
    })

    local valcik = {}
    for i=1, #result, 1 do
        table.insert(valcik, {id = result[i].id, name = result[i].name, number = result[i].number, message = result[i].message, photo = result[i].photo, gps = result[i].gps, owner = result[i].owner, jobm = result[i].jobm, time = result[i].time}) 
    end
   
    TriggerClientEvent('gksphone:jobmesaae', src, valcik)

end)

RegisterServerEvent("gksphone:jbmessage")
AddEventHandler("gksphone:jbmessage",function(name, number, message, photo, gps, jobm)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local identifier = e.PlayerData.citizenid
    exports.oxmysql:execute("INSERT INTO gksphone_job_message (`name`, `number`,`message`, `photo`, `gps`, `owner`, `jobm`) VALUES(@name, @number, @message, @photo, @gps, @owner, @jobm)", {
        ['@name'] = name,
        ['@number'] = number,
        ['@message'] = message,
        ['@photo'] = photo,
        ['@gps'] = gps,
        ['@owner'] = 0,
        ['@jobm'] = jobm
    })
    local jobs = getSource(jobm)

    if (json.encode(jobs) ~= '[]') then
        for i=1, #jobs, 1 do
            TriggerClientEvent('gksphone:mesajjgetir', jobs[i].id, jobm)
            TriggerClientEvent('gksphone:notifi', jobs[i].id, {title = 'JOB notification', message = _U('job_notifi'), img= '/html/static/img/icons/jobm.png' })

            TriggerClientEvent('gksphone:jobnotisound', jobs[i].id)
        end
        TriggerEvent('gksphone:jobnotif', name, number, message, photo, jobm, identifier, 1)
    else
        TriggerClientEvent('gksphone:notifi', source, {title = 'JOB notification', message = _U('not_player'), img= '/html/static/img/icons/jobm.png' })
    end
end)

RegisterServerEvent('gksphone:jobmfinish')
AddEventHandler('gksphone:jobmfinish', function(a, b)
    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local identifier = e.PlayerData.citizenid
    if e then
        exports.oxmysql:execute("UPDATE gksphone_job_message SET owner = 1 WHERE id = @id", { 
            ['@id'] = a
        })
    end
   
    local result = exports.oxmysql:fetchSync("SELECT * FROM gksphone_job_message WHERE id = @jobm", {
        ['@jobm'] = a
   })

   local name2 = e.PlayerData.charinfo.firstname .. " " .. e.PlayerData.charinfo.lastname

    TriggerEvent('gksphone:jobnotif', result[1].name, result[1].number, result[1].message, result[1].photo, result[1].jobm, identifier, 0, name2)
   
    TriggerClientEvent('gksphone:mesajjgetir', src, b)
end)

AddEventHandler('gksphone:jobnotif', function (name, number, message, photo, jobm, identifier, new, name2)
 
	local discord_webhook = Config.JobNotif
	if discord_webhook == '' then
	  return
	end

	local headers = {
	  ['Content-Type'] = 'application/json'
	}
	local data = {
	  ["username"] = 'Job Notif',
	  ["avatar_url"] = 'https://media.discordapp.net/attachments/722981093455822958/882974778334523392/stock-market.png?width=480&height=480',
	  ["embeds"] = {{
		["color"] = 15258703
	  }}
	}
    local isHttp = string.sub(photo, 0, 7) == 'http://' or string.sub(photo, 0, 8) == 'https://'
    local ext = string.sub(photo, -4)
    local isImg = ext == '.png' or ext == '.jpg' or ext == '.gif' or string.sub(photo, -5) == '.jpeg'
  
    if new == 1 then
	data['embeds'][1]['title'] = '[' .. name ..']  Occupation Notification : ' ..jobm 
    data['embeds'][1]['image'] = { ['url'] = photo }
	data['embeds'][1]['description'] = 'Message : ' ..message
    data['embeds'][1]['footer']  = { ['text'] = ' [Number : ' ..number ..', identifier : ' ..identifier .. ']'}
    end
    if new == 0 then
        data['embeds'][1]['title'] = '[' .. name2 ..'] Incoming Problem Solved : ' ..jobm 
        data['embeds'][1]['image'] = { ['url'] = photo }
        data['embeds'][1]['description'] = 'Message : ' ..message
        data['embeds'][1]['footer']  = { ['text'] = '[Name : '.. name ..' ,Number : ' ..number ..']'}
    end
	PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
end)



function _sendMessageAdd(transmitter, receiver, message, owner)
    if transmitter then
        exports.oxmysql:execute("INSERT INTO gksphone_messages (`transmitter`, `receiver`,`message`, `isRead`,`owner`) VALUES(@transmitter, @receiver, @message, @isRead, @owner)", {
            ['@transmitter'] = transmitter,
            ['@receiver'] = receiver,
            ['@message'] = message,
            ['@isRead'] = owner,
            ['@owner'] = owner
        })
        local data = {message = message, time = tonumber(os.time().."000.0"), receiver = receiver, transmitter = transmitter, owner = owner, isRead = owner}
        return data
    end
end



function addMessage(source, identifier, phone_number, message)
    local sourcePlayer = tonumber(source)
    local otherIdentifier = getIdentifierByPhoneNumber(phone_number)   
 
        if Config.BlockNumber then
            local BlckNumber = getBlockNumber(otherIdentifier, identifier)
            if BlckNumber == 'var' then
                TriggerClientEvent('gksphone:notifi', sourcePlayer, {title = 'Message', message = _U('blcknumber_call'), img= '/html/static/img/icons/messages.png' })
            else
                if otherIdentifier ~= nil then 
                    local tomess = _sendMessageAdd(identifier, phone_number, message, 0)
                    getSourceFromIdentifier(otherIdentifier, function (osou)
                        if tonumber(osou) ~= nil then 
                            TriggerClientEvent("gksphone:receiveMessage", tonumber(osou), tomess)
                            TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = _U('new_message_normal'), img= '/html/static/img/icons/messages.png', appinfo = phone_number })
                        end
                    end) 
                end
                local memess = _sendMessageAdd(phone_number, identifier, message, 1)
                TriggerClientEvent("gksphone:receiveMessage", sourcePlayer, memess)
            end
        else
            if otherIdentifier ~= nil then 
                local tomess = _sendMessageAdd(identifier, phone_number, message, 0)
                getSourceFromIdentifier(otherIdentifier, function (osou)
                    if tonumber(osou) ~= nil then 
                        TriggerClientEvent("gksphone:receiveMessage", tonumber(osou), tomess)
                        TriggerClientEvent('gksphone:notifi', tonumber(osou), {title = 'Messages', message = _U('new_message_normal'), img= '/html/static/img/icons/messages.png', appinfo = myPhone })

                    end
                end) 
            end
            local memess = _sendMessageAdd(phone_number, identifier, message, 1)
            TriggerClientEvent("gksphone:receiveMessage", sourcePlayer, memess)
        end



end

function setReadMessageNumber(identifier, num)
    local mePhoneNumber = getNumberPhone(identifier)
    exports.oxmysql:execute("UPDATE gksphone_messages SET gksphone_messages.isRead = 1 WHERE gksphone_messages.receiver = @receiver AND gksphone_messages.transmitter = @transmitter", { 
        ['@receiver'] = mePhoneNumber,
        ['@transmitter'] = num
    })
end

function deleteMessage(msgId)
    exports.oxmysql:execute("DELETE FROM gksphone_messages WHERE `id` = @id", { 
        ['@id'] = msgId
    })
end


function deleteAllMessageFromPhoneNumber(source, identifier, phone_number)
    local source = source
    local identifier = identifier
    local mePhoneNumber = getNumberPhone(identifier)
    exports.oxmysql:execute("DELETE FROM gksphone_messages WHERE `receiver` = @mePhoneNumber and `transmitter` = @phone_number", { 
        ['@mePhoneNumber'] = mePhoneNumber,['@phone_number'] = phone_number
    })
end

function deleteAllMessage(identifier)
    local mePhoneNumber = getNumberPhone(identifier)
    exports.oxmysql:execute("DELETE FROM gksphone_messages WHERE `receiver` = @mePhoneNumber", { 
        ['@mePhoneNumber'] = mePhoneNumber
    })
end

RegisterServerEvent('gksphone:sendMessage')
AddEventHandler('gksphone:sendMessage', function(phoneNumber, message)
    local _source = source
    local sourcePlayer = tonumber(_source)
    xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.charinfo.phone
 
    if xPlayer ~= nil then
        addMessage(sourcePlayer, identifier, phoneNumber, message)
    end
end)

RegisterServerEvent('gksphone:deleteMessage')
AddEventHandler('gksphone:deleteMessage', function(msgId)
    deleteMessage(msgId)
end)


RegisterServerEvent('gksphone:deleteMessageNumber')
AddEventHandler('gksphone:deleteMessageNumber', function(number)
    local _source = source
    local sourcePlayer = tonumber(_source)
    xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    deleteAllMessageFromPhoneNumber(sourcePlayer,identifier, number)
end)

RegisterServerEvent('gksphone:deleteAllMessage')
AddEventHandler('gksphone:deleteAllMessage', function()
    local _source = source
	xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    deleteAllMessage(identifier)
end)

RegisterServerEvent('gksphone:setReadMessageNumber')
AddEventHandler('gksphone:setReadMessageNumber', function(num)
    local _source = source
	xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    setReadMessageNumber(identifier, num)
end)

RegisterServerEvent('gksphone:deleteALL')
AddEventHandler('gksphone:deleteALL', function()
    local _source = source
    local sourcePlayer = tonumber(_source)
	xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    deleteAllMessage(identifier)
    deleteAllContact(identifier)
    appelsDeleteAllHistorique(identifier)
    TriggerClientEvent("gksphone:contactList", sourcePlayer, {})
    TriggerClientEvent("gksphone:allMessage", sourcePlayer, {})
    TriggerClientEvent("appelsDeleteAllHistorique", sourcePlayer, {})
end)




local AppelsEnCours = {}
local PhoneFixeInfo = {}
local lastIndexCall = 10

function getHistoriqueCall(num)

    local result = exports.oxmysql:executeSync("SELECT * FROM gksphone_calls WHERE gksphone_calls.owner = @num ORDER BY time DESC LIMIT 30", {
        ['@num'] = num
    })
    return result
end

function sendHistoriqueCall(src, num) 
    local histo = getHistoriqueCall(num)
    TriggerClientEvent('gksphone:historiqueCall', src, histo)
end


function saveAppels (appelInfo)
    if appelInfo.extraData == nil or appelInfo.extraData.useNumber == nil then
        exports.oxmysql:execute("INSERT INTO gksphone_calls (`owner`, `num`,`incoming`, `accepts`) VALUES(@owner, @num, @incoming, @accepts)", { 
            ['@owner'] = appelInfo.transmitter_num,
            ['@num'] = appelInfo.receiver_num,
            ['@incoming'] = 1,
            ['@accepts'] = appelInfo.is_accepts
        },function()
            notifyNewAppelsHisto(appelInfo.transmitter_src, appelInfo.transmitter_num)
        end)
    end
    if appelInfo.is_valid == true then
        local num = appelInfo.transmitter_num
        if appelInfo.hidden == true then
            num = "#######"
        end
        exports.oxmysql:execute("INSERT INTO gksphone_calls (`owner`, `num`,`incoming`, `accepts`) VALUES(@owner, @num, @incoming, @accepts)", { 
            ['@owner'] = appelInfo.receiver_num,
            ['@num'] = num,
            ['@incoming'] = 0,
            ['@accepts'] = appelInfo.is_accepts
        },function()
            notifyNewAppelsHisto(appelInfo.receiver_src, appelInfo.receiver_num)
        end)
    end
end

function notifyNewAppelsHisto (src, num) 
    sendHistoriqueCall(src, num)
end

RegisterServerEvent('gksphone:getHistoriqueCall')
AddEventHandler('gksphone:getHistoriqueCall', function()
    local _source = source
    local sourcePlayer = tonumber(_source)
	xPlayer = QBCore.Functions.GetPlayer(_source)
    identifier = xPlayer.PlayerData.citizenid
    local srcPhone = getNumberPhone(identifier)
    sendHistoriqueCall(sourcePlayer, srcPhone)
end)


function startCallFonk (source, phone_number, who, rtcOffer, extraData)
    local _source = source

    local rtcOffer = rtcOffer
    if phone_number == nil or phone_number == '' then 
        print('BAD CALL NUMBER IS NIL')
        return
    end

    local hidden = string.sub(phone_number, 1, 1) == '#'
    if hidden == true then
        phone_number = string.sub(phone_number, 2)
    end

    local indexCall = lastIndexCall
    lastIndexCall = lastIndexCall + 1

    local sourcePlayer = tonumber(source)
    local xPlayer = QBCore.Functions.GetPlayer(source)
    local srcIdentifier = xPlayer.PlayerData.citizenid

    local srcPhone = ''
    if extraData ~= nil and extraData.useNumber ~= nil then
        srcPhone = extraData.useNumber
    else
        srcPhone = getNumberPhone(srcIdentifier)
    end
    local target = QBCore.Functions.GetPlayerByPhone(phone_number)
    if target ~= nil then
    local destPlayer = target.PlayerData.citizenid
    local destYPlayer = QBCore.Functions.GetPlayerByCitizenId(destPlayer)

    local is_valid = destPlayer ~= nil and destPlayer ~= srcIdentifier
    if not destYPlayer then
        AppelsEnCours[indexCall] = {
            id = indexCall,
            transmitter_src = sourcePlayer,
            transmitter_num = srcPhone,
            receiver_src = nil,
            receiver_num = phone_number,
            is_valid = destPlayer ~= nil,
            is_accepts = false,
            hidden = hidden,
            rtcOffer = rtcOffer,
            extraData = extraData
        }
    else
        AppelsEnCours[indexCall] = {
            id = indexCall,
            transmitter_src = sourcePlayer,
            transmitter_num = srcPhone,
            receiver_src = destYPlayer.PlayerData.source,
            receiver_num = phone_number,
            is_valid = destPlayer ~= nil,
            is_accepts = false,
            hidden = hidden,
            rtcOffer = rtcOffer,
            extraData = extraData
        }

    end
    local BlckNumber = getBlockNumber(destPlayer, srcPhone)

if Config.CallPhone then
        
        
        if not destYPlayer then 
            TriggerClientEvent('gksphone:notifi', sourcePlayer, {title = 'Call', message = _U('offline_call'), img= '/html/static/img/icons/call.png' })
        return
    end
    local item = destYPlayer.Functions.GetItemByName('phone')
  

        if Config.BlockNumber then
        
            if BlckNumber == 'var' then
                TriggerClientEvent('gksphone:notifi', sourcePlayer, {title = 'Call', message = _U('blcknumber_call'), img= '/html/static/img/icons/call.png' })
            else

                if is_valid == true then
                    getSourceFromIdentifier(destPlayer, function (srcTo)
            
                        if srcTo ~= nil then
            
                            AppelsEnCours[indexCall].receiver_src = srcTo
                            TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                            TriggerClientEvent('gksphone:waitingCallto', srcTo, AppelsEnCours[indexCall], false, who) -- karşı oyuncuyu arama
                            
                        else
                            TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                        end
                    end)
                else
                    TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                end
            end
        else
            if is_valid == true then
                getSourceFromIdentifier(destPlayer, function (srcTo)
                
                    if srcTo ~= nil then
                        AppelsEnCours[indexCall].receiver_src = srcTo
                        TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                        TriggerClientEvent('gksphone:waitingCallto', srcTo, AppelsEnCours[indexCall], false, who) -- karşı oyuncuyu arama
                        
                    else
                        TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                    end
                end)
            else
                TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
            end
        end

    else
        if Config.BlockNumber then
            if BlckNumber == 'var' then
                TriggerClientEvent('gksphone:notifi', sourcePlayer, {title = 'Call', message = _U('blcknumber_call'), img= '/html/static/img/icons/call.png' }) 
            
            else
                if is_valid == true then
                    getSourceFromIdentifier(destPlayer, function (srcTo)
                   
                        if srcTo ~= nil then
               
                            AppelsEnCours[indexCall].receiver_src = srcTo
                            TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                            TriggerClientEvent('gksphone:waitingCallto', srcTo, AppelsEnCours[indexCall], false, who) -- karşı oyuncuyu arama
                           
                        else
                            TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                        end
                    end)
                else
                    TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                end
            end
        else
            if is_valid == true then
                getSourceFromIdentifier(destPlayer, function (srcTo)
             
                    if srcTo ~= nil then
                        AppelsEnCours[indexCall].receiver_src = srcTo
                        TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                        TriggerClientEvent('gksphone:waitingCallto', srcTo, AppelsEnCours[indexCall], false, who) -- karşı oyuncuyu arama
                       
    
                    else
                        TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
                    end
                end)
            else
                TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true, who)
            end
        end
    end 
end
end

RegisterServerEvent('gksphone:startCall')
AddEventHandler('gksphone:startCall', function(phone_number, who, rtcOffer, extraData)
    startCallFonk(source, phone_number, who, rtcOffer, extraData)
end)



RegisterServerEvent('gksphone:acceptCall')
AddEventHandler('gksphone:acceptCall', function(infoCall, rtcAnswer)

    local id = infoCall.id
    if AppelsEnCours[id] ~= nil then
        AppelsEnCours[id].receiver_src = infoCall.receiver_src or AppelsEnCours[id].receiver_src
        if AppelsEnCours[id].transmitter_src ~= nil and AppelsEnCours[id].receiver_src ~= nil then
            AppelsEnCours[id].is_accepts = true
            AppelsEnCours[id].rtcAnswer = rtcAnswer
            TriggerClientEvent('gksphone:acceptCall', AppelsEnCours[id].transmitter_src, AppelsEnCours[id], false)
            TriggerClientEvent('gksphone:acceptCall', AppelsEnCours[id].receiver_src, AppelsEnCours[id], false)

            if Config.SaltyChat then
                exports['saltychat']:EstablishCall(AppelsEnCours[id].transmitter_src, AppelsEnCours[id].receiver_src)
            end

            saveAppels(AppelsEnCours[id])


        end
    end
end)


RegisterServerEvent('gksphone:rejectCall')
AddEventHandler('gksphone:rejectCall', function (infoCall)
	if infoCall ~= nil then
        if infoCall.id ~= nil then
            local id = infoCall.id
            if AppelsEnCours[id] ~= nil then
                if AppelsEnCours[id].transmitter_src ~= nil then
                    TriggerClientEvent('gksphone:rejectCall', AppelsEnCours[id].transmitter_src)
                    if Config.SaltyChat then
                        exports['saltychat']:EndCall(AppelsEnCours[id].transmitter_src, AppelsEnCours[id].receiver_src)
                    end
                end
                if AppelsEnCours[id].receiver_src ~= nil then
                    TriggerClientEvent('gksphone:rejectCall', AppelsEnCours[id].receiver_src)
                    if Config.SaltyChat then
                        exports['saltychat']:EndCall(AppelsEnCours[id].receiver_src, AppelsEnCours[id].transmitter_src)
                    end
                end
                if AppelsEnCours[id].is_accepts == false then 
                    saveAppels(AppelsEnCours[id])
                end
                TriggerEvent('gksphone:removeCall', AppelsEnCours)
                AppelsEnCours[id] = nil
            end
        end
	end
end)


RegisterServerEvent('gksphone:appelsDeleteHistorique')
AddEventHandler('gksphone:appelsDeleteHistorique', function (numero)
    local _source = source
    local sourcePlayer = tonumber(_source)
	local xPlayer = QBCore.Functions.GetPlayer(_source)
    local identifier = xPlayer.PlayerData.citizenid
    local srcPhone = xPlayer.PlayerData.charinfo.phone
    exports.oxmysql:execute("DELETE FROM gksphone_calls WHERE `owner` = @owner AND `num` = @num", { 
        ['@owner'] = srcPhone,
        ['@num'] = numero
    })
end)

function appelsDeleteAllHistorique(srcIdentifier)
    exports.oxmysql:execute("DELETE FROM gksphone_calls WHERE `owner` = @owner", { 
        ['@owner'] = srcIdentifier
    })
end

RegisterServerEvent('gksphone:appelsDeleteAllHistorique')
AddEventHandler('gksphone:appelsDeleteAllHistorique', function ()
    local _source = source
    local sourcePlayer = tonumber(_source)
    local xPlayer = QBCore.Functions.GetPlayer(_source)
    local identifier = xPlayer.PlayerData.charinfo.phone
    appelsDeleteAllHistorique(identifier)
end)


RegisterCommand('telfix', function(source)
    TriggerEvent('gksphone:playerLoad', source)
    TriggerClientEvent('gksphone:FixOnLoad', source)
end)

function onCallFixePhone (source, phone_number, rtcOffer, extraData)
    local indexCall = lastIndexCall
    lastIndexCall = lastIndexCall + 1

    local hidden = string.sub(phone_number, 1, 1) == '#'
    if hidden == true then
        phone_number = string.sub(phone_number, 2)
    end
    local sourcePlayer = tonumber(source)
    local xPlayer = QBCore.Functions.GetPlayer(_source)
    local srcIdentifier = xPlayer.PlayerData.citizenid

    local srcPhone = ''
    if extraData ~= nil and extraData.useNumber ~= nil then
        srcPhone = extraData.useNumber
    else
        srcPhone = xPlayer.PlayerData.charinfo.phone
    end

    AppelsEnCours[indexCall] = {
        id = indexCall,
        transmitter_src = sourcePlayer,
        transmitter_num = srcPhone,
        receiver_src = nil,
        receiver_num = phone_number,
        is_valid = false,
        is_accepts = false,
        hidden = hidden,
        rtcOffer = rtcOffer,
        extraData = extraData,
        coords = FixePhone[phone_number].coords
    }
    
    PhoneFixeInfo[indexCall] = AppelsEnCours[indexCall]

    TriggerClientEvent('gksphone:notifyFixePhoneChange', -1, PhoneFixeInfo)
    TriggerClientEvent('gksphone:waitingCall', sourcePlayer, AppelsEnCours[indexCall], true)
end




QBCore.Functions.CreateCallback('gksphone:phone-check', function(source, cb)
    local xPlayer = QBCore.Functions.GetPlayer(source)

    if not xPlayer then return; end
    for k, v in pairs(Config.Phones) do
        local items = xPlayer.Functions.GetItemByName(v)
         if items ~= nil then
            if items.amount > 0 then
                cb(v)
                return
            end
         end
	end
    cb(nil)
end)




function getOrGeneratePhoneNumber (identifier, num, cb)
    local myPhoneNumber = num
    local id = settingsnumber(myPhoneNumber)

    if id == nil then

        exports.oxmysql:execute("INSERT INTO gksphone_settings (`identifier`, `phone_number`) VALUES(@identifier, @phone_number)", {
            ['@identifier'] = identifier,
            ['@phone_number'] = myPhoneNumber,
        })

    end
    
end



RegisterServerEvent('gksphone:playerLoad')
AddEventHandler('gksphone:playerLoad',function(source)
    local _source = source
    local sourcePlayer = tonumber(_source)
    local xPlayer = QBCore.Functions.GetPlayer(_source)
if xPlayer ~= nil then
    local identifier = xPlayer.PlayerData.citizenid
    local num = xPlayer.PlayerData.charinfo.phone
	local fst = xPlayer.PlayerData.charinfo.firstname
    local lst = xPlayer.PlayerData.charinfo.lastname

    getOrGeneratePhoneNumber(identifier, num)

    sendHistoriqueCall(sourcePlayer, num)
    TriggerClientEvent("gksphone:firstname", sourcePlayer, identifier, fst, xPlayer.PlayerData.job.name, xPlayer.PlayerData.job.isboss, xPlayer.PlayerData.money.bank)
	TriggerClientEvent("gksphone:lastname", sourcePlayer, lst)
    TriggerClientEvent("gksphone:loadingphone", sourcePlayer, num, getContacts(identifier), getMessages(identifier), getGroup(num), getGroupMessage(num))
end

end)

AddEventHandler('onResourceStart', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then
      return
    end
    Citizen.Wait(3000)
    exports.oxmysql:execute('DELETE FROM gksphone_insto_story WHERE time < (CURDATE() - INTERVAL 1 DAY)', {})
    exports.oxmysql:execute('DELETE FROM gksphone_job_message WHERE time < (CURDATE() - INTERVAL 1 DAY)', {})
end)

