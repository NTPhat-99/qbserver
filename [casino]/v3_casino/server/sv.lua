qbcore = exports['qb-core']:GetCoreObject()

RegisterServerEvent('casino:grabFood')
AddEventHandler('casino:grabFood', function(data) 
    local item = data.item
    local Player = Framework.Functions.GetPlayer(source)

    Player.Functions.AddItem(item, 1)
    TriggerClientEvent('inventory:client:ItemBox', source, Framework.Shared.Items[item], 'add')
end)

RegisterServerEvent('casino:Chips')
AddEventHandler('casino:Chips', function(charge, amount) 
    print(charge, amount)
    if tonumber(amount) < 0 then
        return
    end
    local Player = Framework.Functions.GetPlayer(source) 

    if charge == "buy" then
        if Player.Functions.RemoveMoney('cash', tonumber(amount)) then
            Player.Functions.AddItem("casinochips", tonumber(amount) * Casino.BuyMultiplier)
            TriggerClientEvent('inventory:client:ItemBox', source, Framework.Shared.Items["casinochips"], 'add')
        end
    elseif charge == "sell" then
        if Player.Functions.RemoveItem("casinochips", tonumber(amount)) then
            TriggerClientEvent('inventory:client:ItemBox', source, Framework.Shared.Items["casinochips"], 'remove')
            Player.Functions.AddMoney('cash', tonumber(amount) * Casino.SellMultiplier)
        end
    end
end)

RegisterServerEvent('casino:grabToken')
AddEventHandler('casino:grabToken', function() 
    local Player = Framework.Functions.GetPlayer(source)

    if Player.Functions.RemoveMoney('cash', Casino.WheelTokenPrice) then
        Player.Functions.AddItem("wheeltoken", 1)
        TriggerClientEvent('inventory:client:ItemBox', source, Framework.Shared.Items[item], 'add')
    end
end)


local isRoll = false

RegisterServerEvent('wheel:getLucky')
AddEventHandler('wheel:getLucky', function()
    local _source = source
    if not isRoll then
        isRoll = true
        local _randomPrice = math.random(1, 100)
            if _randomPrice == 1 then
            local _subRan = math.random(1, 1000)
            if _subRan <= 1 then
                _priceIndex = 19
            else
                _priceIndex = 3
            end
        elseif _randomPrice > 1 and _randomPrice <= 6 then
            -- Win skin AK Gold
            _priceIndex = 12
            local _subRan = math.random(1,20)
            if _subRan <= 2 then
                _priceIndex = 12
            else
                _priceIndex = 7
            end
        elseif _randomPrice > 6 and _randomPrice <= 15 then
            local _sRan = math.random(1, 4)
            if _sRan == 1 then
                _priceIndex = 4
            elseif _sRan == 2 then
                _priceIndex = 8
            elseif _sRan == 3 then
                _priceIndex = 11
            else
                _priceIndex = 16
            end
        elseif _randomPrice > 15 and _randomPrice <= 25 then
            local _subRan = math.random(1,20)
            if _subRan <= 2 then
                _priceIndex = 5
            else
                _priceIndex = 20
            end
        elseif _randomPrice > 25 and _randomPrice <= 40 then
            -- 1, 9, 13, 17
            local _sRan = math.random(1, 4)
            if _sRan == 1 then
                _priceIndex = 1
            elseif _sRan == 2 then
                _priceIndex = 9
            elseif _sRan == 3 then
                _priceIndex = 13
            else
                _priceIndex = 17
            end
        elseif _randomPrice > 40 and _randomPrice <= 60 then
            local _itemList = {}
            _itemList[1] = 2
            _itemList[2] = 6
            _itemList[3] = 10
            _itemList[4] = 14
            _itemList[5] = 18
            _priceIndex = _itemList[math.random(1, 5)]
        elseif _randomPrice > 60 and _randomPrice <= 100 then
            local _itemList = {}
            _itemList[1] = 3
            _itemList[2] = 7
            _itemList[3] = 15
            _itemList[4] = 20
            _priceIndex = _itemList[math.random(1, 4)]
        end
        SetTimeout(12000, function()
            isRoll = false
            TriggerClientEvent("wheel:rollFinished", -1)
        end)
        luckyWheel(_source, _priceIndex)
        TriggerClientEvent("wheel:doRoll", -1, _priceIndex)
    end
end)
