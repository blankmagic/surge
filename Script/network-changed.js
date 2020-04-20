/* 
event network-changed by Tempoblink

[Script]
Outbound Mode = type=event,event-name=network-changed,debug=1,script-path=JS/network-changed.js

PS:记得自己修改WIFI名称 "home_ssid1or2" or "free_ssid1or2" 
主要功能:指定Wi-Fi下,Surge使用不同出站模式,三个值可选'Direct' or 'Rule' or 'Global-Proxy' 黑名单默认'Direct'
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
let BLACKNAME = [
            "free_ssid1",
            "free_ssid2"
    ];

let OTHERS = 'Rule';
let CELLULAR = 'Rule';

//wifi select outbound
//BLACKNAME select outbound is direct
//WHITENAME select outbound is rule
//others you can change by OTHERS = 'Direct' or 'Rule' or 'Global-Proxy'
if ($network.v4.primaryInterface == "en0" && $network.wifi.bssid != 'null') {
    if (BLACKNAME.indexOf(WIFINAME) != -1) {
        if($surge.setOutboundMode('direct'))
            $notification.post("Network Changed", "Wi-Fi, "+WIFINAME, "出站模式, Direct");
    }
    if (WHITENAME.indexOf(WIFINAME) != -1) {
        if($surge.setOutboundMode('rule'))
            $notification.post("Network Changed", "Wi-Fi, "+WIFINAME, "出站模式, Rule");
    }
    else {
        if($surge.setOutboundMode(OTHERS.toLowerCase()))
            $notification.post("Network Changed", "Wi-Fi, "+WIFINAME, "出站模式, "+OTHERS);
    }
}


//cellular select outbound
if($network.v4.primaryInterface == "pdp_ip0") {
    if($surge.setOutboundMode(CELLULAR.toLowerCase()))
        $notification.post("Network Changed", "蜂窝网, "+IPADDRESS, "出站模式, "+CELLULAR);
}

$done();