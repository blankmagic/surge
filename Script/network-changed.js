/* 
event network-changed by Tempoblink
version: 2.1
auther: tempoblink
[Script]
Outbound Mode = type=event,event-name=network-changed,debug=1,script-path=JS/network-changed.js

PS:记得自己修改WIFI名称 "home_ssid1or2" 
主要功能:指定Wi-Fi下,Surge自动化不同出站模式,三个值可选'Direct' or 'Rule' or 'Global-Proxy' 默认 Direct
虽然设置SSID可以达到基本相同功能
使用脚本,Surge不会被suspend
Rewrite和Scripting依然有效
*/

let NETWORK = $network.wifi.ssid;
let WHITENAME = [
            "home_ssid1",
            "home_ssid2"
    ];
let BLACKNAME = [
            "free_ssid1",
            "free_ssid2"
    ];

let TAG = false;

//The default outbound, you can change it : 'Direct' or 'Rule' or 'Global-proxy'
//BLACK|WHITE|OTHERS is to control the WIFI outbound mode, CELLULAR is to control the 2G/3G/4G outbound mode 
//For example:
//BLACKNAME use BLACK select outbound is direct
//WHITENAME use WHITE select outbound is rule
let BLACK = 'Direct';
let WHITE = 'Rule';
let OTHERS = 'Rule';
let CELLULAR = 'Rule';

function changeoutbound(is_cellular, MODE) {
    if (is_cellular) {
        NETWORK = '蜂窝网, '+$network.v4.primaryAddress;
    }else {
        NETWORK = 'Wi-Fi, '+NETWORK;
    }
    if($surge.setOutboundMode(MODE.toLowerCase()))
        $notification.post("Outbound Changed", "Network: "+NETWORK, "Outbound Mode, "+MODE);
    $done();
}

//wifi select outbound
if ($network.v4.primaryInterface == "en0" && $network.wifi.bssid != 'null') {
    if (BLACKNAME.indexOf(NETWORK) != -1) {
        changeoutbound(TAG, BLACK);
    } else if (WHITENAME.indexOf(NETWORK) != -1) {
        changeoutbound(TAG, WHITE);
    } else {
        changeoutbound(TAG, OTHERS);
    }
}


//cellular select outbound
if($network.v4.primaryInterface == "pdp_ip0") {
    TAG = true;
    changeoutbound(TAG, CELLULAR);
}