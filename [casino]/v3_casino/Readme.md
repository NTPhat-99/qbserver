--//--//--//--//--//--//--//--//--//-- Job

["casino"] = {
    label = "Grand Casino",
    salary = 300,
    grades = {
        [0] = {
            name = "Security",
            salary = 300
        },
        [1] = {
            name = "Bar Tender/Cashier",
            salary = 300
        },
        [2] = {
            name = "Assistant Manager",
            salary = 300,
            isboss = true
        },
        [3] = {
            name = "Casino Boss",
            salary = 300,
            isboss = true
        }
    },
    ["boss"] = {
        [1] = {x = 956.41, y = 20.64, z = 75.74, h = 209.06}
    },
    defaultDuty = false
},

--//--//--//--//--//--//--//--//--//-- Item

["casinochips"] = {
    ["name"] = "casinochips",
    ["label"] = "Chips",
    ["weight"] = 0,
    ["type"] = "item",
    ["image"] = "casinochips.png",
    ["unique"] = false,
    ["useable"] = false,
    ["shouldClose"] = false,
    ["combinable"] = nil,
},

--//--//--//--//--//--//--//--//--//-- Item

["wheeltoken"] = {
    ["name"] = "wheeltoken",
    ["label"] = "Lucky Wheel Token",
    ["weight"] = 100,
    ["type"] = "item",
    ["image"] = "token.png",
    ["unique"] = false,
    ["useable"] = false,
    ["shouldClose"] = false,
    ["combinable"] = nil,
    ["expire"] = 9,
},

--//--//--//--//--//--//--//--//--//--