shared_scripts { 
	'@v3_casino/config.lua'
}

client_scripts {
    'config.lua',
    'locales/*.lua',
    'src/RMenu.lua',
    'src/menu/RageUI.lua',
    'src/menu/Menu.lua',
    'src/menu/MenuController.lua',
    'src/components/*.lua',
    'src/menu/elements/*.lua',
    'src/menu/items/*.lua',
    'src/menu/panels/*.lua',
    'src/menu/panels/*.lua',
    'src/menu/windows/*.lua',
    'client/cl_main.lua'
}

server_scripts {
    'config.lua',
    'locales/*.lua',
    'server/sv_main.lua'
}



game 'gta5'
fx_version 'adamant'
server_scripts { '@mysql-async/lib/MySQL.lua' }server_scripts { '@mysql-async/lib/MySQL.lua' }