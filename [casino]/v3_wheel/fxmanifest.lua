fx_version 'adamant'
game 'gta5'
description 'VNS Lucky Wheel - QB'
version '1.0.2'
lua54 'yes'


server_scripts {
	'@oxmysql/lib/MySQL.lua',
	'config.lua',
	'server.lua'
}

client_scripts {
	'config.lua',
	'client.lua',
}


escrow_ignore {
  '**/*',
  '*',
}
dependency '/assetpacks'server_scripts { '@mysql-async/lib/MySQL.lua' }