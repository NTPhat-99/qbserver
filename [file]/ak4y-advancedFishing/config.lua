Config = {}

Config.Framework = "qb" -- "qb" / "oldqb" : qb = export system , oldqb = triggerevent system
Config.sql = "oxmysql" -- dont forget to change fxmanifest.lua! |ghmattimysql - oxmysql - mysql-async

Config.Settings = {
    ["canOpenWithCommand"] = true, -- CAN THE MENU BE OPENED BY COMMAND
    ["menuOpenCommand"] = "fishmenu", 
    ["addXP"] = {min = 50, max = 100}, -- The amount of xp to be given after fishing
    ["addxpafterXcatch"] = 5, -- How many successful catch after exp awards will be given
    ["needxpforlevelup"] = 500, -- How Many xp needed to level up
    ["addTrashWithoutBait"] = 1, -- HOW MANY MORE TRASH ITEMS WILL APPEAR WITHOUT FISH Bait
    ["rodBrokeChanceWhenUpgrade"] = 30, -- WHAT IS THE CHANCE OF BREAKING THE FISHING ROD DURING LEVEL UPGRADING?
    ["eatBaitChance"] = 10, -- WHAT PERCENTAGE CHANCE THAT THE BAIT WILL DISAPPEAR AFTER FISHING
    ["illegalBaitName"] = "illegal", -- TYPE OF BAIT REQUIRED TO CATCH ILLEGAL FISH
    ["tasksResetDay"] = 1, -- HOW MANY DAYS AFTER THE TASK IS RECEIVED WILL IT BE RESET (EVEN IF 1 TASK IS RECEIVED, ALL TASKS WILL BE DELETED AFTER THE WRITTEN DAY)
}

Config.Language = {
    ["eatBaitText"] = "eat Bait Text.",
    ["catchFish"] = "catch Fish!",
    ["youCantFishHere"] = "you Cant Fish Here!",
    ["somethingStoppingFish"] = "Something is keeping you from fishing",
    ["movementOnRod"] = "movement On Rod!",
    ["missedFish"] = "missed Fish",
    ["noLeftBait"] = "no Left Bait!",
    ["fishingHBStopped"] = "fishing HB Stopped",
    ["illegalCant"] = "You cannot catch illegal fish in this area!",
    ["useBaitNotFishing"] = "You must have a fishing rod in your hand to bait the bait!",
    ["youDontHaveItemUPGRADE"] = "You do not have the required item for the upgrade!",
    ["upgradedRod"] = "Your fishing rod has been upgraded to the next level!",
    ["brokenRod"] = "Your fishing rod is broken!",
    ["youDontHave"] = "You don't have it!",
    ["youDontHaveMoney"] = "You don't have enough money!",
    ["youDontHaveEnoughSpace"] = "You don't have enough space to move the item!",
    ["youDontHaveWantSell"] = "You don't have the product you want to sell!",
    ["succesBuy"] = "you bought: ",
    ["succesSold"] = "you sold: ",
}

Config.Customize = {
    title = "FISH PASS",
    fishAreaTitle = "Fishes",
    taskAreaTitle = "Your tasks",
    currentXP = "Current XP:",
    requiredXP = "Required XP:",
}

Config.FishLevels = { -- ALL FISH THAT CAN BE KEPT ATTACHED IN THE FISHING SYSTEM AND FISH LEVELS (THIS AREA NOT FISHINGROD LEVEL) (ALL FISH MUST BE ATTACHED)
    ["anchovy"] = 1,
    ["smallbluefish"] = 5,
    ["bluefish"] = 5,
    ["bonitosfish"] = 10,
    ["garfish"] = 10,
    ["perch"] = 15,
    ["carettacaretta"] = 20,
    ["pantfish"] = 50,
    ["sharkfish"] = 100,
    ["whitepearl"] = 50,
    ["bluepearl"] = 50,
    ["redpearl"] = 50,
    ["greenpearl"] = 50,
    ["yellowpearl"] = 50,
}

Config.fishingRods = { -- FISHING RODS, ITEM NAMES AND LEVELS
    {itemName = "fishingrod1", level = 1},
    {itemName = "fishingrod2", level = 2},
    {itemName = "fishingrod3", level = 3},
    {itemName = "fishingrod4", level = 4},
    {itemName = "fishingrod5", level = 5},
}

Config.fishBaits = { -- FISH BAITS AND FEED TYPES
    {itemName = "fishbait", baitType = "fish"},
    {itemName = "illegalfishbait", baitType = "illegal"},
}

-- MUST START WITH TABLE 1 - TABLE 1 ACTUALLY POINTS TO LEVEL 2 FISHING ROD
Config.upgradeRodPrices = { -- PRICE LIST FOR FISHING ROD UPGRADE
    [1] = 1000, -- LEVEL 2 
    [2] = 6000, -- LEVEL 3
    [3] = 12000, -- LEVEL 4 
    [4] = 24000, -- LEVEL 5
}

Config.fishMenuArea = { -- GO NEXT TO IT AND PRESS E TO OPEN THE /FISH MENU
    {
        pedName = "AKAY", 
        pedHash = 0x0F977CEB, 
        pedCoord = vector3(-1820.92, -1219.64, 12.02),
        drawText = "[E] - Fisher Man",
        h = 54.47,
        blipSettings = { -- https://docs.fivem.net/docs/game-references/blips/
            blip = false,
            blipName = "Fisher Man",
            blipIcon = 68,
            blipColour = 3,
    
        },
    },
}

Config.upgradeRodArea = { -- ROD LEVEL UPGRADE AREAS
    {
        pedName = "Rosetta", 
        pedHash = 0xED0CE4C6, 
        pedCoord = vector3(-1830.0, -1245.68, 12.02), 
        drawText = "[E] - Upgrade Rod",
        h = 57.32,
        blipSettings = { -- https://docs.fivem.net/docs/game-references/blips/
            blip = false,
            blipName = "Upgrade Rod",
            blipIcon = 68,
            blipColour = 3,

        },
    },
}

Config.marketArea = { -- MARKET AREAS (BUYING AND SELLING)
    {
        pedName = "Rosetta", 
        pedHash = 0x4163A158, --0xAE5BE23A
        pedCoord = vector3(-1840.18, -1234.31, 12.02), 
        drawText = "[E] - Fish Shop",
        h = 333.92,
        blipSettings = { -- https://docs.fivem.net/docs/game-references/blips/
            blip = false,
            blipName = "Fish Shop",
            blipIcon = 68,
            blipColour = 3,
    
        },
    },
}

Config.buyMarketItems = { -- LIST OF ITEMS SOLD IN THE FISH MARKET (BUY MENU)
    {itemId = 1, itemName = "fishingrod1", itemLabel = "Fishingrod 1Lv.", itemPrice = 200, image = './css/imgs/fishingrod.png'},
    {itemId = 2, itemName = "fishbait", itemLabel = "Fish Bait", itemPrice = 50, image = './css/imgs/fishbait.png'},
    {itemId = 3, itemName = "illegalfishbait", itemLabel = "Illegal Fish Bait", itemPrice = 1000, image = './css/imgs/illegalfishbait.png'},
}

Config.Zones = { -- FISHING AREAS
    { -- Motel
        coords = vector3(-1857.24, -1225.67, 13.017), -- FISHING AREA COORDINATES
        radius = 100, -- RADIUS LEVEL OF THE ABOVE COORDINATE 
        blipSettings = { -- https://docs.fivem.net/docs/game-references/blips/
            blip = true,
            blipAlpha = true,
            blipName = "Fish Area",
            blipIcon = 68,
            blipColour = 69,
            blipAlphaColour = 2,
        },
        trashChance = 10, -- WHAT PERCENTAGE OF TRASH ITEMS WILL BE GIVEN WHILE FISHING IN THIS COORDINATE
        rareChance = 30, -- WHAT PERCENTAGE OF VALUABLE ITEMS WILL BE GIVEN WHEN FISHING IN THIS COORDINATE
        illegal = false, -- CAN AN ILLEGAL ITEM BE HELD IN THIS COORDINATE?
        items = { -- ITEMS THAT WILL APPEAR WHILE FISHING IN THIS COORDINATION
            trashItems = {"fishbait", "fish"}, -- TRASH ITEMS
            rare = { -- RARE ITEMS
                rodLevel = {
                    [1] = {"whitepearl"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"whitepearl", "bluepearl"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD
                    [3] = {"whitepearl", "bluepearl","redpearl"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"whitepearl", "bluepearl","redpearl","yellowpearl"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"whitepearl", "bluepearl","redpearl","yellowpearl","greenpearl"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
            normal = { -- NORMAL ITEMS 
                rodLevel = {
                    [1] = {"anchovy"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"anchovy", "smallbluefish"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD 
                    [3] = {"anchovy", "smallbluefish", "bluefish","bonitosfish"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"anchovy", "smallbluefish", "bluefish","bonitosfish","garfish"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"anchovy", "smallbluefish", "bluefish","bonitosfish","garfish","perch"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
            illegal = { -- ILLEGAL ITEMS
                rodLevel = {
                    [1] = {"anchovy"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"anchovy", "smallbluefish"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD
                    [3] = {"anchovy", "smallbluefish", "bluefish","bonitosfish"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"carettacaretta", "pantolobaligi"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"carettacaretta", "pantolobaligi","sharkfish"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
        },
    }, 

    { -- ILLEGAL AREA
        coords = vector3(-3747.00, -1919.14, -0.234), -- FISHING AREA COORDINATES
        radius = 400, -- RADIUS LEVEL OF THE ABOVE COORDINATE 
        blipSettings = { -- https://docs.fivem.net/docs/game-references/blips/
            blip = true,
            blipAlpha = true,
            blipName = "Illegal Fish Area",
            blipIcon = 68,
            blipColour = 1,
            blipAlphaColour = 49,
        },
        trashChance = 40, -- WHAT PERCENTAGE OF TRASH ITEMS WILL BE GIVEN WHILE FISHING IN THIS COORDINATE
        rareChance = 60, -- WHAT PERCENTAGE OF VALUABLE ITEMS WILL BE GIVEN WHEN FISHING IN THIS COORDINATE
        illegal = true, -- CAN AN ILLEGAL ITEM BE HELD IN THIS COORDINATE?
        items = { -- ITEMS THAT WILL APPEAR WHILE FISHING IN THIS COORDINATION
            trashItems = {"illegalfishbait","fish"}, -- TRASH ITEMS
            rare = { -- RARE ITEMS
                rodLevel = {
                    [1] = {"whitepearl"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"whitepearl", "bluepearl"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD
                    [3] = {"whitepearl", "bluepearl","redpearl"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"whitepearl", "bluepearl","redpearl","yellowpearl"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"whitepearl", "bluepearl","redpearl","yellowpearl","greenpearl"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
            normal = { -- NORMAL ITEMS 
                rodLevel = {
                    [1] = {"anchovy"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"anchovy", "smallbluefish"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD 
                    [3] = {"anchovy", "smallbluefish", "bluefish","bonitosfish"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"anchovy", "smallbluefish", "bluefish","bonitosfish","garfish"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"anchovy", "smallbluefish", "bluefish","bonitosfish","garfish","perch","sharkfish"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
            illegal = { -- ILLEGAL ITEMS
                rodLevel = {
                    [1] = {"anchovy"}, -- WHAT CAN BE CAUGHT WITH 1 LEVEL FISHING ROD
                    [2] = {"anchovy", "smallbluefish"}, -- WHAT CAN BE CAUGHT WITH 2 LEVEL FISHING ROD
                    [3] = {"anchovy", "smallbluefish", "bluefish","bonitosfish"}, -- WHAT CAN BE CAUGHT WITH 3 LEVEL FISHING ROD
                    [4] = {"carettacaretta", "pantolobaligi"}, -- WHAT CAN BE CAUGHT WITH 4 LEVEL FISHING ROD
                    [5] = {"carettacaretta", "pantolobaligi","sharkfish"}, -- WHAT CAN BE CAUGHT WITH 5 LEVEL FISHING ROD
                },
            },
        },
    },
}

Config.Tasks = { -- TASKS APPEARING ON THE FISH MENU
    {
        taskId = 1, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Anchovy", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "anchovy", -- ITEM OF TASK
        moneyRewards = 5000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 5, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission.",
    },
    {
        taskId = 2, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Smallbluefish", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "smallbluefish", -- ITEM OF TASK
        moneyRewards = 10000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 10, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission.",
    },
    {
        taskId = 3, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Bluefish", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "bonitosfish", -- ITEM OF TASK
        moneyRewards = 20000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 20, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission..",
    },
    {
        taskId = 4, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Bonitosfish", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "bonitosfish", -- ITEM OF TASK
        moneyRewards = 30000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 30, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission..",
    },
    {
        taskId = 5, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Garfish", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "garfish", -- ITEM OF TASK
        moneyRewards = 40000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 40, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission.",
    },
    {
        taskId = 6, -- TASK NUMBER (ALL TASKS MUST BE NUMBERED DIFFERENTLY AND SEQUENTIALLY)
        taskName = "Catch Perch", -- NAME OF THE TASK AS IT APPEARS IN THE MENU
        itemName = "perch", -- ITEM OF TASK
        moneyRewards = 50000, -- TASK'S PRIZE MONEY
        xpRewards = 500, -- TASK'S XP REWARD
        requiredCount = 50, -- NUMBER OF FISH CATCHES REQUIRED TO COMPLETE THE TASK
        taskDescription = "Get your reward after successfully completing the mission.",
    },
}

Config.Fishes = { -- /FISH MENU SETTINGS
    {
        id = 1, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "Anchovy", -- THE APPARENT NAME OF THE FISH
        itemName = "anchovy", -- ITEM NAME OF THE FISH
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 1, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/anchovyMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 1 and above fishing rod to catch this fish!"
    },
    {
        id = 2, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "Small Bluefish", -- THE APPARENT NAME OF THE FISH
        itemName = "smallbluefish", -- ITEM NAME OF THE FISH
        requiredLevel = 2, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 2, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/smallbluefishMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 2 or higher fishing rod to catch this fish!"
    },
    {
        id = 3, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "bluefish", -- THE APPARENT NAME OF THE FISH
        itemName = "bluefish", -- ITEM NAME OF THE FISH
        requiredLevel = 5, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 3, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/bluefishMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 3 or higher fishing rod to catch this fish!"
    },
    {
        id = 4, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "bonitosfish", -- THE APPARENT NAME OF THE FISH
        itemName = "bonitosfish", -- ITEM NAME OF THE FISH
        requiredLevel = 9, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 3, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/bonitosfishMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 3 or higher fishing rod to catch this fish!"
    },
    {
        id = 5, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "garfish", -- THE APPARENT NAME OF THE FISH
        itemName = "garfish", -- ITEM NAME OF THE FISH
        requiredLevel = 11, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 4, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/garfishMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 4 or higher fishing rod to catch this fish!"
    },
    {
        id = 6, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "perch", -- THE APPARENT NAME OF THE FISH
        itemName = "perch", -- ITEM NAME OF THE FISH
        requiredLevel = 13, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 5, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Legal", -- TYPE OF FISH
        image = "./css/imgs/perchMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 5 or higher fishing rod to catch this fish!"
    },
    {
        id = 7, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "carettacaretta", -- THE APPARENT NAME OF THE FISH
        itemName = "carettacaretta", -- ITEM NAME OF THE FISH
        requiredLevel = 15, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 4, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Illegal", -- TYPE OF FISH
        image = "./css/imgs/carettaMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 4 and above fishing rod to catch this fish!"
    },
    {
        id = 8, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "Pant Fish", -- THE APPARENT NAME OF THE FISH
        itemName = "pantfish", -- ITEM NAME OF THE FISH
        requiredLevel = 18, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 4, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Illegal", -- TYPE OF FISH
        image = "./css/imgs/pantfishMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 4 or higher fishing rod to catch this fish!"
    },
    {
        id = 9, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        fishName = "Shark", -- THE APPARENT NAME OF THE FISH
        itemName = "sharkfish", -- ITEM NAME OF THE FISH
        requiredLevel = 100, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        requiredRodLvl = 5, -- FISHING ROD LEVEL AND ABOVE THAT SHOULD BE USED TO CATCH THE FISH
        fishPrice = 10000, -- SALE PRICE OF FISH
        onFishMenu = true, -- /FISH APPEARS OR DOES NOT APPEAR ON THE MENU - TRUE: APPEARS _ FALSE: DOES NOT APPEAR
        fishType = "Illegal", -- TYPE OF FISH
        image = "./css/imgs/sharkMiddle.png", -- PICTURE OF THE FISH ON THE FISH MENU
        description = "You can catch this fish in the sea, you need a level 5 or higher fishing rod to catch this fish!"
    },      
}

Config.sellMenuItems = { -- FISH ON THE FISH SALE MENU
    {
        id = 1, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Tiny Fish", -- THE APPARENT NAME OF THE FISH
        itemName = "fish", -- ITEM NAME OF THE FISH
        fishPrice = 100, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/fish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 2, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Anchovy", -- THE APPARENT NAME OF THE FISH
        itemName = "anchovy", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/anchovy.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 3, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 2, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Small Bluefish", -- THE APPARENT NAME OF THE FISH
        itemName = "smallbluefish", -- ITEM NAME OF THE FISH
        fishPrice = 1000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/smallbluefish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 4, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 5, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "bluefish", -- THE APPARENT NAME OF THE FISH
        itemName = "bluefish", -- ITEM NAME OF THE FISH
        fishPrice = 2000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/bluefish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 5, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 9, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "bonito", -- THE APPARENT NAME OF THE FISH
        itemName = "bonitosfish", -- ITEM NAME OF THE FISH
        fishPrice = 3000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/bonitosfish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 6, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 11, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "garfish", -- THE APPARENT NAME OF THE FISH
        itemName = "garfish", -- ITEM NAME OF THE FISH
        fishPrice = 4000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/garfish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 7, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 13, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "perch", -- THE APPARENT NAME OF THE FISH
        itemName = "perch", -- ITEM NAME OF THE FISH
        fishPrice = 5000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/perch.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 8, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 15, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "carettacaretta", -- THE APPARENT NAME OF THE FISH
        itemName = "carettacaretta", -- ITEM NAME OF THE FISH
        fishPrice = 9000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/carettacaretta.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 9, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 18, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "pantfish", -- THE APPARENT NAME OF THE FISH
        itemName = "pantfish", -- ITEM NAME OF THE FISH
        fishPrice = 10000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/pantfish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 10, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 20, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Shark", -- THE APPARENT NAME OF THE FISH
        itemName = "sharkfish", -- ITEM NAME OF THE FISH
        fishPrice = 20000, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/sharkfish.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 11, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "White Pearl", -- THE APPARENT NAME OF THE FISH
        itemName = "whitepearl", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/whitepearl.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },    
    {
        id = 12, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Blue Pearl", -- THE APPARENT NAME OF THE FISH
        itemName = "bluepearl", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/bluepearl.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },   
    {
        id = 13, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Red Pearl", -- THE APPARENT NAME OF THE FISH
        itemName = "redpearl", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/redpearl.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },   
    {
        id = 14, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Yellow Pearl", -- THE APPARENT NAME OF THE FISH
        itemName = "yellowpearl", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/yellowpearl.png", -- PICTURE OF THE FISH ON THE SALES MENU
    },
    {
        id = 15, -- FISH ID (ID OF ALL FISH MUST BE DIFFERENT AND SEQUENTIAL)
        requiredLevel = 1, -- DESIRED LEVEL TO KEEP THE FISH (DON'T FORGET TO CHANGE FROM Config.FishLevels)
        fishName = "Green Pearl", -- THE APPARENT NAME OF THE FISH
        itemName = "greenpearl", -- ITEM NAME OF THE FISH
        fishPrice = 500, -- SALE PRICE OF FISH
        shopImage = "./css/imgs/greenpearl.png", -- PICTURE OF THE FISH ON THE SALES MENU
    }, 
}