Config = {}
Config.CoreName = "QBCore"
Config.Core = "QBCore:GetObject"
Config.CoreNotify = "QBCore:Notify"
Config.OpenPhone = 'U'   --## Phone open key ## https://docs.fivem.net/docs/game-references/input-mapper-parameter-ids/keyboard/
Config.Locale       = 'en'
Config.Phones       = {"phone"}
Config.Fahrenheit   = false



Config.BillingCommissions = { -- This is a percentage (0.10) == 10% ( Must be active to receive commission - If the player is not in the game, she/he cannot receive a commission.)
    mechanic = 0.10
}



-- Discord WebHook - start --
Config.Carseller = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.JobNotif = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.TwitterWeb = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.YellowWeb = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.InstagramWeb = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.Crypto = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.BankTrasnfer = 'https://discordapp.com/api/webhooks/1077180054976593920/c9aGRl27HLnLZJH9cWm87gCu7EJEdGya-t24XZEea6ZCJbwVVZyax31dXMWuJfQ9MyFS'
Config.BankLimit = 5000 -- # Minimum money transfer for discord webhook

-- Discord WebHook - end --



-- Phone Settings - Start --

Config.UseMumbleVoIP    = true -- Use Frazzle's Mumble-VoIP Resource (Recomended!) https://github.com/FrazzIe/mumble-voip
Config.PMAVoice         = true
Config.UseTokoVoIP      = false
Config.SaltyChat        = false

Config.CallPhone        = true  -- If the player is not in the game or there is no item on it, it will give a warning.
Config.BlockNumber      = true   -- Number blocking

-- Phone Settings - Finish --

Config.ValePrice        = 1500    -- Vale Price
Config.TaxiPrice        = 100     -- Taxi Price ( 100$/KM )


