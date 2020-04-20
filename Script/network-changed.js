/* 
event network-changed script-path=network-changed.js

[Script]
Outbound Mode = type=event,event-name=network-changed,debug=1,script-path=JS/network-changed.js

PS:记得自己修改WIFI名称 "home_ssid1or2"
主要功能:蜂窝网跟指定Wi-Fi(路由器翻)下,Surge使用规则模式,其他网络下Surge使用直连
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效
*/

let WIFINAME = $network.wifi.ssid;
let IPADDRESS = $network.v4.primaryAddress;
let WHITENAME = [
            "home_ssid1",
            "home_ssid2"
    ];

if ($network.v4.primaryInterface == "en0" && $network.wifi.bssid != 'null' && WHITENAME.indexOf(WIFINAME) == -1) {
    if($surge.setOutboundMode('direct'))
        $notification.post("出站模式", "Wi-Fi, "+WIFINAME, "Outbound Mode, 𝗗𝗜𝗥𝗘𝗖𝗧");
} else {
    if($surge.setOutboundMode('rule'));
      if($network.v4.primaryInterface == "pdp_ip0")
        $notification.post("出站模式", "Cellular, "+IPADDRESS, "Outbound Mode, Rule-based Proxy🪁");
      if($network.v4.primaryInterface == "en0")
        $notification.post("出站模式", "Wi-Fi, "+WIFINAME, "Outbound Mode, Rule-based Proxy🪁");
}
$done();