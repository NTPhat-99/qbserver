---- IMPORTANT ! ALL ITEMS ARE EXAMPLE FOR YOU, YOU SHOULD SET THOSE, IF YOU DONT SET PROBABLY ITS GONNA BE BROKEN. ! IMPORTANT
---- IMPORTANT ! ALL ITEMS ARE EXAMPLE FOR YOU, YOU SHOULD SET THOSE, IF YOU DONT SET PROBABLY ITS GONNA BE BROKEN. ! IMPORTANT
---- IMPORTANT ! ALL ITEMS ARE EXAMPLE FOR YOU, YOU SHOULD SET THOSE, IF YOU DONT SET PROBABLY ITS GONNA BE BROKEN. ! IMPORTANT

-- ak4y dev.

-- IF YOU HAVE ANY PROBLEM OR DO YOU NEED HELP PLS COME TO MY DISCORD SERVER AND CREATE A TICKET
-- IF YOU DONT HAVE ANY PROBLEM YET AGAIN COME TO MY DISCORD :)
-- https://discord.gg/kWwM3Bx

AK4Y = {}

AK4Y.Framework = "qb" -- / oldqb | qb = export system | oldqb = triggerevent system
AK4Y.Mysql = "oxmysql" -- Check fxmanifest.lua when you change it! | ghmattimysql / oxmysql / mysql-async
AK4Y.OpenCommand = "caseOpening"

AK4Y.WeaponsAreItem = false -- If your weapons are item then you should set this TRUE.

AK4Y.NeededPlayTime = 60 -- MINUTES
AK4Y.PlayTimeRewardType = "GOLDCOIN" -- GOLDCOIN OR SILVERCOIN
AK4Y.PlayTimeRewardCoin = 10 

AK4Y.WebsiteLink = "https://www.google.com/"
AK4Y.DiscordLink = "https://discord.gg/ak4y/"

-- ITEM TYPES : "common", "uncommon", "rare", "mythical", "legendary"
AK4Y.LastItemCategories = {"uncommon", "rare", "mythical", "legendary"} -- When items of the type written on the left are won, they appear in the recently won items tab
AK4Y.ServerNotifyCategories = {"uncommon", "mythical", "legendary"} -- When items of the type written on the left are won, a notification is sent to the entire server

AK4Y.Translate = {
    title1 = "CASE",
    title2 = "OPENING",
    premium = "PREMIUM",
    standard = "STANDARD",
    cases = "CASES",
    website = "WEBSITE",
    discord = "DISCORD",
    premiumCases = "PREMIUM CASES",
    standardCases = "STANDARD CASES",
    openCase = "OPEN CASE",
    openFast = "OPEN FAST",
    coinShopTitle = "GC SHOP",
    new = "NEW",
    goBack = "GO BACK",
    caseItems = "CASE ITEMS",
    items = "ITEMS",
    congratulations = "CONGRATULATIONS",
    congDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum assumenda, a minima reiciendis modi quo expedita dignissimos?",
    collect = "COLLECT",
    sell = "SELL",
    accept = "ACCEPT",
    creditLoaded = "Credit Successfully LOADED",
    failed = "FAILED",
    youDntHaveEnoughCredit = "YOU DONT HAVE ENOUGH CREDIT!",
}


-- giveItemType's = "item", "vehicle", "money"
-- items in the case should have a chance total of 100 !! IMPORTANT !! IMPORTANT !! IMPORTANT !!
AK4Y.PremiumCases = {
    {
        uniqueId = 1, -- IDs must be different and sequential
        label = "Phantom Case",
        price = 150, 
        priceType = "GC", -- GC OR SC
        caseTheme = "red", -- red, blue, orange, purple, green
        caseType = "premium", -- do not touch!
        isNew = true,
        items = { -- giveItemType's = "item", "vehicle", "money", "weapon"
                  -- items in the case should have a chance total of 100 !! IMPORTANT !! IMPORTANT !! IMPORTANT !!
            { itemName = "lockpick", label = "LOCKPICK", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/lockpick.png" },
            { itemName = "advancedlockpick", label = "LOCKPICK", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/advancedlockpick.png" },
            { itemName = "firstaid", label = "AID KIT", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/firstaid.png" },
            { itemName = "joint", label = "JOINT", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/joint.png" },
            { itemName = "pistol_ammo", label = "PISTOL AMMO", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/pistol_ammo.png" },
            { itemName = "radio", label = "RADIO", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/radio.png" },
            { itemName = "pistol_extendedclip", label = "EXTENDED CLIP", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/pistol_extendedclip.png" },
            { itemName = "security_card_02", label = "SECURITY CARD", chance = 7.5, sellCredit = 15, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/security_card_02.png" },
            { itemName = "weapon_knife", label = "KNIFE", chance = 5, sellCredit = 40, itemType = "uncommon", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_knife.png" },
            { itemName = "weapon_crowbar", label = "CROWBAR", chance = 5, sellCredit = 40, itemType = "uncommon", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_crowbar.png" },
            { itemName = "weapon_knuckle", label = "KNUCKLE", chance = 5, sellCredit = 40, itemType = "uncommon", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_knuckle.png" },
            { itemName = "armor", label = "ARMOR", chance = 5, sellCredit = 40, itemType = "uncommon", itemCount = 1, giveItemType = "item", image = "./images/items/armor.png" },
            { itemName = "weapon_combatpistol", label = "COMBAT PISTOL", chance = 5, sellCredit = 100, itemType = "rare", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_combatpistol.png" },
            { itemName = "weapon_heavypistol", label = "HEAVY PISTOL", chance = 5, sellCredit = 100, itemType = "rare", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_heavypistol.png" },
            { itemName = "weapon_appistol", label = "AP PISTOL", chance = 5, sellCredit = 100, itemType = "rare", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_appistol.png" },
            { itemName = "weapon_smg", label = "SMG", chance = 2, sellCredit = 150, itemType = "mythical", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_smg.png" },
            { itemName = "money", label = "100.000$", chance = 1, sellCredit = 250, itemType = "legendary", itemCount = 100000, giveItemType = "money", image = "./images/items/money-4.png" },
            { itemName = "weapon_combatpdw", label = "COMBAT PDW", chance = 2, sellCredit = 150, itemType = "mythical", itemCount = 1, giveItemType = "weapon", image = "./images/items/weapon_combatpdw.png" },
            { itemName = "wheeltoken", label = "T20", chance = 1, sellCredit = 250, itemType = "legendary", itemCount = 1, giveItemType = "item", image = "./images/items/t20.png" },
            { itemName = "wheeltoken", label = "ZENTORNO", chance = 1, sellCredit = 250, itemType = "legendary", itemCount = 1, giveItemType = "item", image = "./images/items/zentorno.png" },
        },
    },
}

AK4Y.StandardCases = {
    {
        uniqueId = 1,
        label = "Standard Case (1)",
        price = 150,
        priceType = "SC", -- GC OR SC
        caseTheme = "nude",
        isNew = true, -- If you set it true, the case will be labeled "new"
        items = {
            { itemName = "weapon_pistol", label = "ITEM 1", chance = 30, sellCredit = 10, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 2", chance = 30, sellCredit = 10, itemType = "common", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 3", chance = 10, sellCredit = 15, itemType = "rare", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 4", chance = 10, sellCredit = 15, itemType = "rare", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 5", chance = 10, sellCredit = 15, itemType = "rare", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 6", chance = 4.5, sellCredit = 20, itemType = "mythical", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 7", chance = 4.5, sellCredit = 20, itemType = "mythical", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
            { itemName = "weapon_pistol", label = "ITEM 8", chance = 0.5, sellCredit = 25, itemType = "legendary", itemCount = 1, giveItemType = "item", image = "./images/items/item.png" },
        },
    },
}

AK4Y.SellCoins = {
    {
        coinCount = 100,
        realPrice = 10,
        directLink = "https://www.google.com/1",
    },
    {
        coinCount = 200,
        realPrice = 20,
        directLink = "https://www.google.com/2",
    },
    {
        coinCount = 300,
        realPrice = 30,
        directLink = "https://www.google.com/3",
    },
    {
        coinCount = 400,
        realPrice = 40,
        directLink = "https://www.google.com/4",
    },
    {
        coinCount = 500,
        realPrice = 50,
        directLink = "https://www.google.com/5",
    },
    {
        coinCount = 600,
        realPrice = 60,
        directLink = "https://www.google.com/6",
    },
    {
        coinCount = 700,
        realPrice = 70,
        directLink = "https://www.google.com/7",
    },
    {
        coinCount = 1000,
        realPrice = 80,
        directLink = "https://ak4y.tebex.io/package/5348821",
    },
    
}

