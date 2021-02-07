/*更新TestFlight App时, 提示"APP不可用"问题.by Nobyda

[Script]
TF下载修正 = type=http-request,pattern=^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$,requires-body=1,max-size=0,script-path=https://gist.githubusercontent.com/maicoobox/Surge/tree/master/Script/TF_Download.js
[MITM]
hostname = %APPEND% testflight.apple.com
*/
$done({ 
body: $request.body
.replace(/storefrontId\" ?: ?\".+?\"/,'storefrontId" : "143441-1,29"')
})
