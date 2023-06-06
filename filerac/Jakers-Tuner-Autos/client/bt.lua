
Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("tunerStash", vector3(128.54, -3008.09, 7.04), 1.6, 3.2, {
        name="tunerStash",
        heading=0,
        debugPoly=false,
        minZ = 6.14,
        maxZ = 8.94,
        }, {
            options = {
                {
                    type = "client",
                    event = "tuner:stash",
                    icon = "fas fa-box",
                    label = "Stash",
                    job = "tuner",
                },
        },
            distance = 3.5
    })
end)



Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("TunerCraft", vector3(136.71, -3051.53, 7.04), 1, 1, {
        name="TunerCraft",
        heading=0,
        debugPoly=false,
        minZ = 6.04,
        maxZ = 7.64,
        }, {
            options = {
                {
                    type = "client",
                    event = "tuner-jobcrafting:Menu1",
                    icon = "fas fa-truck-monster",
                    label = "Car Parts",
                    job = "tuner",
                },
            },
            distance = 3.5
    })
end)

Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("TunerComputer", vector3(125.43, -3014.84, 7.04), 0.6, 0.6, {
        name="TunerComputer",
        heading=0,
        debugPoly=false,
        minZ = 6.79,
        maxZ = 7.19,
        }, {
            options = {
                {
                    type = "client",
                    event = "tuner:duty",
                    icon = "fas fa-clipboard",
                    label = "Sign on duty",
                    job = "tuner",
                },
            },
            distance = 3.5
    })
end)

Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("TunerBossmenu", vector3(125.53, -3007.18, 7.04), 0.6, 0.6, {
        name="TunerBossmenu",
        heading=0,
        debugPoly=false,
        minZ = 6.79,
        maxZ = 7.39,
        }, {
            options = {
                {
                    type = "client",
                    event = "qb-bossmenu:client:openMenu",
                    icon = "fas fa-shield-alt",
                    label = "Staff room",
                    job = "tuner",
                },
            },
            distance = 3.5
    })
end)


Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("TunerClothing", vector3(154.5, -3011.32, 7.04), 2.2, 0.6, {
        name="TunerClothing",
        heading=0,
        debugPoly=false,
        minZ = 6.04,
        maxZ = 8.44,
        }, {
            options = {
                {
                    type = "client",
                    event = "qb-clothing:client:openOutfitMenu",
                    icon = "fas fa-box",
                    label = "Outfits",
                    job = "tuner",
                },
        },
            distance = 3.5
    })
end)

Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("MechanicShop", vector3(128.62, -3014.76, 7.04), 1.8, 2.6, { Config.MechanicShop,
        name="MechanicShop",
        heading= 0,
        debugPoly=false,
        minZ=6.04,
        maxZ=9.04
        }, {
        options = {
            {
                event = "inventory:client:OpenMechanicShop",
                icon = "fas fa-box", 
                label = "Open Store",
                job = "tuner",
            },
        },
        distance = 3.5
    })
end)

Citizen.CreateThread(function()
    exports['qb-target']:AddBoxZone("TunerPay", vector3(133.13, -3015.12, 7.04), 0.6, 0.6, { Config.MechanicShopPay,
        name="TunerPay",
        heading= 116.55,
        debugPoly=false,
        minZ=6.64,
        maxZ=7.24
        }, {
        options = {
            {
                event = "tuner-autosjob:client:MechanicShopPay",
                --parms = "1",
                icon = "fas fa-credit-card",
                label = "Charge Customer",
                job = "tuner",
            },
        },
        distance = 3.5
    })
end)

local bones = {
    "door_dside_f",
    "door_dside_r",
    "door_pside_f",
    "door_pside_r"
}
exports["qb-target"]:AddTargetBone(bones, {
    options = {
        {
            event = "Check:vehicle",
            icon = "fa fa-search",
            label = "EXAMINE VEHICLE",
            job = "tuner",

        },
    },

    distance = 1.5
})
local bones = {
    "bonnet"
}
exports["qb-target"]:AddTargetBone(bones, {
    options = {
        {
            event = "qb-vehiclefailure:client:RepairVehicleFull",
            icon = "fas fa-wrench",
            label = "REPAIR ENGINE",
            job = "tuner",

        
        },
    },

    distance = 1.5
})
local bones = {
    "door_dside_f",
    "door_dside_r",
    "door_pside_f",
    "door_pside_r"
}
exports["qb-target"]:AddTargetBone(bones, {
    options = {
        {
            event = "qb-vehiclefailure:client:CleanVehicle",
            icon = "fas fa-hand-sparkles",
            label = "CLEAN VEHICLE",
            job = "tuner",


        },
    },

    distance = 1.5
})