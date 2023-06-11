#!name=wyydcd
#!desc=wyydcd
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1215.png

[Script]

http-response ^https:\/\/dict\.youdao\.com\/vip\/user\/status script-path=https://raw.githubusercontent.com/jizhi0520/QX/main/wyydcd.js, requires-body=true, timeout=60 ,tag=wyydcd_6

[MITM]

hostname = dict.youdao.com