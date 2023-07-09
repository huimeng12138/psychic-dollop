#!name=Kying
#!desc=Kying
#!icon=https://github.com/Toperlock/Quantumult/raw/main/icon/Doraemon/Doraemon-1004.png

[Script]

http-response ^http[s]?:\/\/(id\.kwaiying|api\.kmovie\.gifshow)\.com.*$ script-path=https://raw.githubusercontent.com/WeiRen0/Scripts/main/Kying.js, requires-body=true, timeout=60 ,tag=Kying_13

[MITM]

hostname = api.kmovie.gifshow.com,id.kwaiying.com