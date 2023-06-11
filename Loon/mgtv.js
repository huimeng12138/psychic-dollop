#!name=MGTV
#!desc=MGTV
#!icon=https://github.com/KeiKinn/StickerOnScreen/raw/main/Stickers/Sticker_1058.png

[Rewrite]

^https?:\/\/nuc\.api\.mgtv.com\/Logout - reject-200
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ - reject-img
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/ - reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/package\.json - reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/server_bidding\/pre_fetch\/ - reject-200
&src\=mgtv&suuid\=.*&testversion\=&ticket\=[A-Z0-9]{32} &src=mgtv&testversion=&ticket=44C417517F6B34B9AA7903C0A5650483 302
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/ - reject-200
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ - reject-200
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot - reject-200
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support - reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/ - reject-200

[Script]

#芒果VIP
http-request ^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ script-path=https://raw.githubusercontent.com/WeiRen0/Scripts/main/MGTK.js, timeout=60 ,tag=MGTK_14

http-response ^http[s]?:\/\/.*mgtv\.com/(client\/dynamic_entry|v8\/video\/getSource|GetUserInfo|v3\/module\/list|credits\/url).*$ script-path=https://raw.githubusercontent.com/WeiRen0/Scripts/main/MGTV.js, requires-body=true, timeout=60 ,tag=MGTV_15

[MITM]

hostname = *.mgtv.com