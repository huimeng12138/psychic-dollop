#!name=BuGuaKe
#!desc=BuGuaKe
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1020.png

[Script]

http-response ^https:\/\/appwk\.baidu\.com\/bgk\/(user\/getinfo|doc\/(getdocdownloadcopywriter|quedocsearch\?)) script-path=https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/BuGuaKe.js, requires-body=true, timeout=60 ,tag=BuGuaKe_2

[MITM]

hostname = appwk.baidu.com