resource_manifest_version '77731fab-63ca-442c-a67b-abc70f28dfa5'

files {
	'vehicles.meta',
	'carvariations.meta',
	'carcols.meta',
	'handling.meta',
	'caraddoncontentunlocks.meta',
	'dlctext.meta',
	'vehiclelayouts.meta',
}

data_file 'HANDLING_FILE' 'handling.meta'
data_file 'VEHICLE_METADATA_FILE' 'vehicles.meta'
data_file 'CARCOLS_FILE' 'carcols.meta'
data_file 'VEHICLE_VARIATION_FILE' 'carvariations.meta'
data_file 'CONTENT_UNLOCKING_META_FILE' 'caraddoncontentunlocks.meta'
data_file 'VEHICLE_VARIATION_FILE' 'dlctext.meta'
data_file 'VEHICLE_LAYOUTS_FILE' 'vehiclelayouts.meta'


files {
	'audioconfig/novitecsvj_game.dat151.rel',
	'audioconfig/novitecsvj_sounds.dat54.rel',
	'sfx/dlc_novitecsvj/novitecsvj.awc',
	'sfx/dlc_novitecsvj/novitecsvj_npc.awc'
}

data_file 'AUDIO_GAMEDATA' 'audioconfig/novitecsvj_game.dat'
data_file 'AUDIO_SOUNDDATA' 'audioconfig/novitecsvj_sounds.dat'
data_file 'AUDIO_WAVEPACK' 'sfx/dlc_novitecsvj'



client_script {
    'vehicle_names.lua'
}