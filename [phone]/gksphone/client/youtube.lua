
xSound = exports.xsound

RegisterNUICallback('youtplay', function(data)
    exports["xsound"]:Cal(data.link, false)
end)

RegisterNUICallback('youtstop', function() 
    exports["xsound"]:Durdur()
end)




RegisterNUICallback('musicDevamet', function()
    exports["xsound"]:Devamet()
end)

RegisterNUICallback('musicDuraklat', function() 
    exports["xsound"]:Duraklat()
end)


RegisterNUICallback('musicvolume', function(volume) 
    local serverId = GetPlayerServerId(PlayerId())
    local muzikAdi = tostring(serverId)
    TriggerServerEvent("gksphone:ChangeVolume", muzikAdi, volume)
end)

RegisterNetEvent("gksphone:ChangeVolume")
AddEventHandler("gksphone:ChangeVolume", function(muzikAdi, volume)
    exports["xsound"]:setVolumeMax(muzikAdi, volume.volume)
end)