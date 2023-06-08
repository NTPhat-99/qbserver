local QBCore = exports['qb-core']:GetCoreObject()

function instoGetinstas (accountId, cb)
  if accountId == nil then
    exports.oxmysql:execute([===[
      SELECT gksphone_insto_instas.*,
	    gksphone_insto_accounts.forename,
		gksphone_insto_accounts.surname,
        gksphone_insto_accounts.username as author,
        gksphone_insto_accounts.avatar_url as authorIcon
      FROM gksphone_insto_instas
        LEFT JOIN gksphone_insto_accounts
        ON gksphone_insto_instas.authorId = gksphone_insto_accounts.id
      ORDER BY time DESC LIMIT 130
      ]===], {}, cb)
  else
    exports.oxmysql:execute([===[
      SELECT gksphone_insto_instas.*,
	  	gksphone_insto_accounts.forename,
		gksphone_insto_accounts.surname,
        gksphone_insto_accounts.username as author,
        gksphone_insto_accounts.avatar_url as authorIcon,
        gksphone_insto_likes.id AS isLikes
      FROM gksphone_insto_instas
        LEFT JOIN gksphone_insto_accounts
          ON gksphone_insto_instas.authorId = gksphone_insto_accounts.id
        LEFT JOIN gksphone_insto_likes 
          ON gksphone_insto_instas.id = gksphone_insto_likes.inapId AND gksphone_insto_likes.authorId = @accountId
      ORDER BY time DESC LIMIT 130
    ]===], { ['@accountId'] = accountId }, cb)
  end
end

function instoGetFavotireinstas (accountId, cb)
  if accountId == nil then
    exports.oxmysql:execute([===[
      SELECT gksphone_insto_instas.*,
	    gksphone_insto_accounts.forename,
		gksphone_insto_accounts.surname,
        gksphone_insto_accounts.username as author,
        gksphone_insto_accounts.avatar_url as authorIcon
      FROM gksphone_insto_instas
        LEFT JOIN gksphone_insto_accounts
          ON gksphone_insto_instas.authorId = gksphone_insto_accounts.id
      WHERE gksphone_insto_instas.TIME > CURRENT_TIMESTAMP() - INTERVAL '15' DAY
      ORDER BY likes DESC, TIME DESC LIMIT 30
    ]===], {}, cb)
  else
    exports.oxmysql:execute([===[
      SELECT gksphone_insto_instas.*,
	    gksphone_insto_accounts.forename,
		gksphone_insto_accounts.surname,
        gksphone_insto_accounts.username as author,
        gksphone_insto_accounts.avatar_url as authorIcon,
        gksphone_insto_likes.id AS isLikes
      FROM gksphone_insto_instas
        LEFT JOIN gksphone_insto_accounts
          ON gksphone_insto_instas.authorId = gksphone_insto_accounts.id
        LEFT JOIN gksphone_insto_likes 
          ON gksphone_insto_instas.id = gksphone_insto_likes.inapId AND gksphone_insto_likes.authorId = @accountId
      WHERE gksphone_insto_instas.TIME > CURRENT_TIMESTAMP() - INTERVAL '15' DAY
      ORDER BY likes DESC, TIME DESC LIMIT 30
    ]===], { ['@accountId'] = accountId }, cb)
  end
end

function getaUserIns(username, password, cb)
  exports.oxmysql:execute("SELECT id, forename, surname, username as author, avatar_url as authorIcon FROM gksphone_insto_accounts WHERE gksphone_insto_accounts.username = @username AND gksphone_insto_accounts.password = @password", {
    ['@username'] = username,
    ['@password'] = password
  }, function (data)

      cb(data[1])
  end)
end

function instoPostinap (username, password, message, sourcePlayer, realUser, image, filters, cb)
  getaUserIns(username, password, function (user)
    if user == nil then
      if sourcePlayer ~= nil then
        instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_ERROR')
      end
      return
    end
    exports.oxmysql:execute("INSERT INTO gksphone_insto_instas (`authorId`, `message`, `realUser`, `image`, `filters`) VALUES(@authorId, @message, @realUser, @image, @filters);", {
      ['@authorId'] = user.id,
      ['@message'] = message,
      ['@realUser'] = realUser,
	  ['@image'] = image,
	  ['@filters'] = filters
    }, function (id)
      exports.oxmysql:execute('SELECT * from gksphone_insto_instas WHERE id = @id', {
        ['@id'] = id.insertId
      }, function (instas)
        inap = instas[1]
        inap['forename'] = user.forename
        inap['surname'] = user.surname
        inap['author'] = user.author
        inap['authorIcon'] = user.authorIcon
        TriggerClientEvent('gksphone:insto_newinstas', -1, inap)
        TriggerEvent('gksphone:insto_newinstas', inap)
      end)
    end)
  end)
end

function instoToogleLike (forename, surname, username, password, inapId, sourcePlayer)
  getaUserIns(username, password, function (user)
    if user == nil then
      if sourcePlayer ~= nil then
        instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_ERROR')
      end
      return
    end
    exports.oxmysql:execute('SELECT * FROM gksphone_insto_instas WHERE id = @id', {
      ['@id'] = inapId
    }, function (instas)
      if (instas[1] == nil) then return end
      local inap = instas[1]
      exports.oxmysql:execute('SELECT * FROM gksphone_insto_likes WHERE authorId = @authorId AND inapId = @inapId', {
        ['authorId'] = user.id,
        ['inapId'] = inapId
      }, function (row) 
        if (row[1] == nil) then
          exports.oxmysql:execute('INSERT INTO gksphone_insto_likes (`authorId`, `inapId`) VALUES(@authorId, @inapId)', {
            ['authorId'] = user.id,
            ['inapId'] = inapId
          }, function (newrow)
            exports.oxmysql:execute('UPDATE `gksphone_insto_instas` SET `likes`= likes + 1 WHERE id = @id', {
              ['@id'] = inap.id
            }, function ()
              TriggerClientEvent('gksphone:insto_updateinapLikes', -1, inap.id, inap.likes + 1)
              TriggerClientEvent('gksphone:insto_setinapLikes', sourcePlayer, inap.id, true)
              TriggerEvent('gksphone:insto_updateinapLikes', inap.id, inap.likes + 1)
            end)    
          end)
        else
          exports.oxmysql:execute('DELETE FROM gksphone_insto_likes WHERE id = @id', {
            ['@id'] = row[1].id,
          }, function (newrow)
            exports.oxmysql:execute('UPDATE `gksphone_insto_instas` SET `likes`= likes - 1 WHERE id = @id', {
              ['@id'] = inap.id
            }, function ()
              TriggerClientEvent('gksphone:insto_updateinapLikes', -1, inap.id, inap.likes - 1)
              TriggerClientEvent('gksphone:insto_setinapLikes', sourcePlayer, inap.id, false)
              TriggerEvent('gksphone:insto_updateinapLikes', inap.id, inap.likes - 1)
            end)
          end)
        end
      end)
    end)
  end)
end



function instoCreateAccount(forename, surname, username, password, avatarUrl, cb)

    local src = source
    local e = QBCore.Functions.GetPlayer(src)
    local testaadtac = forename
    local testddastac = surname
    local testtac = username
    local testawwatac = password
    local sdkfgjsokdgg = avatarUrl

    if e then
      exports.oxmysql:execute('INSERT INTO gksphone_insto_accounts (`forename`, `surname`, `username`, `password`, `avatar_url`) VALUES(@forename, @surname, @username, @password, @avatar_url);', {
        ['@forename'] = testaadtac,
        ['@surname'] = testddastac,
        ['@username'] = testtac,
        ['@password'] = testawwatac,
        ['@avatar_url'] = sdkfgjsokdgg,
      }, function (result)
      
        cb(result)
    
      end)
    end

end


function instoShowError (sourcePlayer, title, message, image, filters)
  TriggerClientEvent('gksphone:insto_showError', sourcePlayer, message, image, filters)
end
function instoShowSuccess (sourcePlayer, title, message, image, filters)
  TriggerClientEvent('gksphone:insto_showSuccess', sourcePlayer, title, message, image, filters)
end

RegisterServerEvent('gksphone:insto_login')
AddEventHandler('gksphone:insto_login', function(username, password)
  local sourcePlayer = tonumber(source)
  getaUserIns(username, password, function (user)
    if user == nil then
      instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_ERROR')
    else
      instoShowSuccess(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_SUCCESS')
      TriggerClientEvent('gksphone:insto_setAccount', sourcePlayer, username, password, user.authorIcon)
    end
  end)
end)

RegisterServerEvent('gksphone:insto_changePassword')
AddEventHandler('gksphone:insto_changePassword', function(forename, surname, username, password, newPassword)
  local sourcePlayer = tonumber(source)
  getaUserIns(username, password, function (user)
    if user == nil then
      instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_NEW_PASSWORD_ERROR')
    else
      exports.oxmysql:execute("UPDATE `gksphone_insto_accounts` SET `password`= @newPassword WHERE gksphone_insto_accounts.username = @username AND gksphone_insto_accounts.password = @password", {
        ['@username'] = username,
        ['@password'] = password,
        ['@newPassword'] = newPassword
      }, function (result)
        if (result.changedRows == 1) then
          TriggerClientEvent('gksphone:insto_setAccount', sourcePlayer, forename, surname, username, newPassword, user.authorIcon)
          instoShowSuccess(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_NEW_PASSWORD_SUCCESS')
        else
          instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_NEW_PASSWORD_ERROR')
        end
      end)
    end
  end)
end)


RegisterServerEvent('gksphone:insto_createAccount')
AddEventHandler('gksphone:insto_createAccount', function(forename, surname, username, password, avatarUrl)
  local sourcePlayer = tonumber(source)
  instoCreateAccount(forename, surname, username, password, avatarUrl, function (id)
    if (id ~= 0) then
      TriggerClientEvent('gksphone:insto_setAccount', sourcePlayer, username, password, avatarUrl)
      instoShowSuccess(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_ACCOUNT_CREATE_SUCCESS')
    else
      instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_ACCOUNT_CREATE_ERROR')
    end
  end)
end)

RegisterServerEvent('gksphone:insto_getinstas')
AddEventHandler('gksphone:insto_getinstas', function(forename, surname, username, password)
  local sourcePlayer = tonumber(source)
  if username ~= nil and username ~= "" and password ~= nil and password ~= "" then
    getaUserIns(username, password, function (user)
      local accountId = user and user.id
      instoGetinstas(accountId, function (instas)
        TriggerClientEvent('gksphone:insto_getinstas', sourcePlayer, instas)
      end)
    end)
  else
    instoGetinstas(nil, function (instas)
      TriggerClientEvent('gksphone:insto_getinstas', sourcePlayer, instas)
    end)
  end
end)

RegisterServerEvent('gksphone:insto_getFavoriteinstas')
AddEventHandler('gksphone:insto_getFavoriteinstas', function(forename, surname, username, password)
  local sourcePlayer = tonumber(source)
  if username ~= nil and username ~= "" and password ~= nil and password ~= "" then
    getaUserIns(username, password, function (user)
      local accountId = user and user.id
      instoGetFavotireinstas(accountId, function (instas)
        TriggerClientEvent('gksphone:insto_getFavoriteinstas', sourcePlayer, instas)
      end)
    end)
  else
    instoGetFavotireinstas(nil, function (instas)
      TriggerClientEvent('gksphone:insto_getFavoriteinstas', sourcePlayer, instas)
    end)
  end
end)

RegisterServerEvent('gksphone:insto_postinstas')
AddEventHandler('gksphone:insto_postinstas', function(username, password, message, image, filters)
  local _source = source
  local sourcePlayer = tonumber(_source)
  local srcIdentifier = QBCore.Functions.GetPlayer(_source)
  local identifi = srcIdentifier.PlayerData.citizenid
  instoPostinap(username, password, message, sourcePlayer, identifi, image, filters)
end)

RegisterServerEvent('gksphone:insto_toogleLikeinap')
AddEventHandler('gksphone:insto_toogleLikeinap', function(forename, surname, username, password, inapId)
  local sourcePlayer = tonumber(source)
  instoToogleLike(forename, surname, username, password, inapId, sourcePlayer)
end)


RegisterServerEvent('gksphone:insto_setAvatarUrl')
AddEventHandler('gksphone:insto_setAvatarUrl', function(username, password, avatarUrl)
  local sourcePlayer = tonumber(source)
  exports.oxmysql:execute("UPDATE `gksphone_insto_accounts` SET `avatar_url`= @avatarUrl WHERE gksphone_insto_accounts.username = @username AND gksphone_insto_accounts.password = @password", {
    ['@username'] = username,
    ['@password'] = password,
    ['@avatarUrl'] = avatarUrl
  }, function (result)
    if (result.changedRows == 1) then
      TriggerClientEvent('gksphone:insto_setAccount', sourcePlayer, username, password, avatarUrl)
      instoShowSuccess(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_AVATAR_SUCCESS')
    else
      instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_ERROR')
    end
  end)
end)


QBCore.Functions.CreateCallback("gksphone:getsStorys",function(a,b)
  exports.oxmysql:execute("SELECT gksphone_insto_story.*, gksphone_insto_accounts.forename, gksphone_insto_accounts.surname, gksphone_insto_accounts.username as author, gksphone_insto_accounts.avatar_url as authorIcon FROM gksphone_insto_story LEFT JOIN gksphone_insto_accounts ON gksphone_insto_story.authorId = gksphone_insto_accounts.id ORDER BY time DESC",{},function(e)
    local storie = {}
		for i=1, #e, 1 do
			table.insert(storie, {id = e[i].id, realUser = e[i].forename, avatar_url = e[i].authorIcon, isRead = e[i].isRead, stories=json.decode(e[i].stories)}) 
		end
		b(storie)  
  end)
end)

QBCore.Functions.CreateCallback("gksphone:getsBStorys",function(source, b)
  local srcIdentifier = QBCore.Functions.GetPlayer(source)
  local identifi = srcIdentifier.PlayerData.citizenid
  if not identifi then return; end
  exports.oxmysql:execute("SELECT gksphone_insto_story.*, gksphone_insto_accounts.forename, gksphone_insto_accounts.surname, gksphone_insto_accounts.username as author, gksphone_insto_accounts.avatar_url as authorIcon FROM gksphone_insto_story LEFT JOIN gksphone_insto_accounts ON gksphone_insto_story.authorId = gksphone_insto_accounts.id WHERE realUser = @realUser ORDER BY time DESC LIMIT 130",{['@realUser'] = identifi},function(e)
    local storieb = {}
		for i=1, #e, 1 do
			table.insert(storieb, {id = e[i].id, realUser = e[i].forename, avatar_url = e[i].authorIcon, isRead = e[i].isRead, stories=json.decode(e[i].stories)}) 
		end
		b(storieb)  
  end)
end)

RegisterServerEvent('gksphone:storysa')
AddEventHandler('gksphone:storysa', function(username, password, stories, time)
  local srcIdentifier = QBCore.Functions.GetPlayer(source)
  local identifi = srcIdentifier.PlayerData.citizenid

  getaUserIns(username, password, function (user)
    if user == nil then
      if sourcePlayer ~= nil then
        instoShowError(sourcePlayer, 'Instagram', 'APP_INSTAGRAM_NOTIF_LOGIN_ERROR')
      end
      return
    end
    local g={}
    exports.oxmysql:execute("SELECT * FROM gksphone_insto_story WHERE realUser = @realUser",{["@realUser"]=identifi},function(h)
      --print(json.decode(h[1].stories))
      if h[1] ~= nil then
        
        g =  json.decode(h[1].stories)
        
        local deneme = {image = stories, isRead = false, time = time}

          table.insert(g, deneme) 

        TriggerClientEvent('gksphonee:getStorie', -1, username)
        TriggerClientEvent('gksphonee:getBstory', -1, username)

        exports.oxmysql:execute("UPDATE gksphone_insto_story SET stories = @stories WHERE realUser = @identifier",{["@identifier"]=identifi,["@stories"]=json.encode(g)})
      else

        local deneme = {image = stories, isRead = false, time = time}
        table.insert(g, deneme) 

        exports.oxmysql:execute('INSERT INTO gksphone_insto_story (`authorId`, `realUser`, `stories`, `isRead`) VALUES(@authorId, @realUser, @stories, @isRead);', {
          ['@authorId'] = user.id,
          ['@realUser'] = identifi,
          ['@stories'] = json.encode(g),
          ['@isRead'] = 'false'
        }, function (result)
        
          TriggerClientEvent('gksphonee:getStorie', -1, username)
          TriggerClientEvent('gksphonee:getBstory', -1, username)

        end)

      end
    end)    
     
  end)

end)



AddEventHandler('gksphone:insto_newinstas', function (inap)
  local discord_webhook = Config.InstagramWeb
  if discord_webhook == '' then
    return
  end
  local headers = {
    ['Content-Type'] = 'application/json'
  }
  local data = {
    ["username"] = inap.username,
	["avatar_url"] = inap.authorIcon,
    ["embeds"] = {{
      ["color"] = 1942002
    }}
  }
  local isHttp = string.sub(inap.message, 0, 7) == 'http://' or string.sub(inap.message, 0, 8) == 'https://'
  local ext = string.sub(inap.message, -4)
  local isImg = ext == '.png' or ext == '.jpg' or ext == '.gif' or string.sub(inap.message, -5) == '.jpeg'

    data['embeds'][1]['title'] = inap.forename .." The user posted a new post!"
    data['embeds'][1]['image'] = { ['url'] = inap.image }
	data['embeds'][1]['description'] = inap.message

  PerformHttpRequest(discord_webhook, function(err, text, headers) end, 'POST', json.encode(data), headers)
end)

--====================================================================================
-- #XenKnighT : GÜRKAN SELİM ALBAYRAK
--====================================================================================