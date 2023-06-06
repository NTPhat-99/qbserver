Casino = {} --Don't touch this puppy

Casino.LicenseKey = ""

Framework = exports['qb-core']:GetCoreObject() -- If you are using defauly qb-core server, use : exports['qb-core']:GetCoreObject()

Casino.Vehicle = "xa21"

Casino.FoodList = {
    [1] = "sandwich",
    [2] = "beer",
}
Casino.MenuScriptName = "qb-menu" --qb-menu or type in your script name.
Casino.InputScriptName = "qb-input" --qb-input or type in your script name.
Casino.BuyMultiplier = 1.0 -- buy multiplier. ----- 1$ = chips x multiplier
Casino.SellMultiplier = 1.0 -- sell multiplier. ----- 1 chip = 1 $ x multiplier
Casino.WheelTokenPrice = 5000

--[[Casino.WheelIndex = {
    [1] = 0,
    [2] = 5,
    [3] = 3,
    [4] = 4,
    [5] = 2,
    [6] = 5,
    [7] = 3, 
    [8] = 5,
    [9] = 0,
    [10] = 5,
    [11] = 4,
    [12] = 1,
    [13] = 0,
    [14] = 5,
    [15] = 3,
    [16] = 4,
    [17] = 0,
    [18] = 5,
    [19] = 6, --car,
    [20] = 3
}

Casino.WheelPrices = {
    ["1"] = {
        "sandwich",
        "water_bottle"
    },
    ["2"] = {
        "sandwich",
        "water_bottle"
    },
    ["3"] = {
        "sandwich",
        "water_bottle"
    },
    ["4"] = {
        "sandwich",
        "water_bottle"
    },
    ["5"] = {
        "sandwich",
        "water_bottle"
    },
}

function luckyWheel(source, priceIndex)
    print(source.." has won - ", priceIndex)
    for k, v in pairs(Casino.WheelIndex) do
        print(k == priceIndex, k, priceIndex)
        if k == priceIndex then
            TriggerClientEvent('QBCore:Notify', source, 'You have won '..v..' Package', 'success')
        end
    end
    -- You can dd logs to this.
end]]