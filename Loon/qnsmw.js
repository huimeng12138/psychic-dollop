#!name=全能扫描王会员
#!desc=CamScanner
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1208.png

[Script]

http-response ^https:\/\/.*\.(intsig\.net|camscanner\.com) script-path=https://raw.githubusercontent.com/chxm1023/Rewrite/main/CamScanner.js, requires-body=true, timeout=60 ,tag=CamScanner_8

[MITM]

hostname = *.camscanner.com,*.intsig.net