#!name=wyun
#!desc=wyun
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1296.png

[Script]

http-request ^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ script-path=https://raw.githubusercontent.com/WeiRen0/Scripts/main/wyun.js, timeout=60 ,tag=wyun_13

[MITM]

hostname = *.music.163.com