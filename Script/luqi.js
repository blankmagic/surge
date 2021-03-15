/*
This Script By NobyDa
[Script]
Luqi = type=http-response,pattern=https:\/\/www\.luqijianggushi\.com\/api\/v2\/user\/get,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/maicoobox/Surge/master/Script/luqi.js

[MITM]
hostname = www.luqijianggushi.com
*/

let obj = JSON.parse($response.body);
obj.data.is_vip = 1;
obj.data.vip_endtime = 1630296877;
$done({body: JSON.stringify(obj)});