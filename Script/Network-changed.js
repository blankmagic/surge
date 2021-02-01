//Outbound-Mode = type=event,event-name=network-changed,script-path=JS/Network-changed.js
//version: 2.1
//auther: tempoblink

//The Notification Format.
//You can change the notification by yourself.
let TITLE = 'Outbound Changed!';
let SUBTITLE_CELLULAR = 'Cellular, ';
let SUBTITLE_WIFI = 'Wi-Fi, ';
let ABOUT_MODE = 'Outbound mode: ';
let ABOUT_TIME = 'Start Network: ';
let FORMAT_TIME = "yyyy-MM-dd hh:mm:ss";

//white ssid and black ssid ob rule.
let WHITENAME = [
            "home_ssid1",
            "home_ssid2"
    ];
let BLACKNAME = [
            "free_ssid1",
            "free_ssid2"
    ];

//The default outbound, you can change it : 'Direct' or 'Rule' or 'Global-proxy'.
//BLACK|WHITE|OTHERS is to control the WIFI outbound mode, CELLULAR is to control the 2G/3G/4G outbound mode. 
//For example:
//BLACKNAME use BLACK select outbound is direct
//WHITENAME use WHITE select outbound is rule
let BLACK = 'Direct';
let WHITE = 'Rule';
let OTHERS = 'Rule';
let CELLULAR = 'Rule';

let NETWORK = $network.wifi.ssid;
let TAG = false;

Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 
        "d+" : this.getDate(),                   
        "h+" : this.getHours(),                   
        "m+" : this.getMinutes(),                
        "s+" : this.getSeconds(),                
        "q+" : Math.floor((this.getMonth()+3)/3), 
        "S"  : this.getMilliseconds()            
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}        

let DATE = $script.startTime.format(FORMAT_TIME);

function changeOutboundMode(is_cellular, mode) {
    if (is_cellular) {
        NETWORK = SUBTITLE_CELLULAR + $network.v4.primaryAddress;
    }else {
        NETWORK = SUBTITLE_WIFI + NETWORK;
    }
    if($surge.setOutboundMode(mode.toLowerCase()))
        $notification.post(TITLE, NETWORK, ABOUT_MODE + mode + '\n' + ABOUT_TIME + DATE);
    $done();
}

//wifi select outbound
if ($network.v4.primaryInterface == "en0" && NETWORK != null) {
    if (BLACKNAME.indexOf(NETWORK) != -1) {
        changeOutboundMode(TAG, BLACK);
    } else if (WHITENAME.indexOf(NETWORK) != -1) {
        changeOutboundMode(TAG, WHITE);
    } else {
        changeOutboundMode(TAG, OTHERS);
    }
}

//cellular select outbound
if($network.v4.primaryInterface == "pdp_ip0") {
    TAG = true;
    changeOutboundMode(TAG, CELLULAR);
}
$done();
