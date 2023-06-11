#!name=WPSOffice
#!desc=WPSOffice
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1074.png

[Script]

http-response ^https:\/\/(vas|account)\.wps\.cn\/(query\/api\/v\d\/list_purchase_info|api\/users\/\d+\/overview) script-path=https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/WPSOffice.js, requires-body=true, timeout=60 ,tag=WPSOffice_2

[MITM]

hostname = vas.wps.cn,account.wps.cn