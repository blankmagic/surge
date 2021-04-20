//event network-changed script-path=network-changed.js
//version: 2.2
//auther: tempoblink

//The Notification Format.
let TITLE = 'Outbound Changed!';
let SUBTITLE_CELLULAR = 'Cellular: ';
let SUBTITLE_WIFI = 'Wi-Fi: ';
let ABOUT_MODE = 'Outbound mode: ';
let ABOUT_IP = 'New IP address: ';
let CHINA_MOBILE = "China Mobile";
let CHINA_UNICOM = "China Unicom";
let CHINA_TELECOM = "China Telecom";
let CHINA_TIETONG = "China Tietong";

//white ssid and black ssid.
let ALLOWLIST = [
            "home_ssid1",
            "home_ssid2"
    ];
let BLOCKLIST = [
            "free_ssid1",
            "free_ssid2"
    ];

//The default outbound: 'Direct' or 'Rule' or 'Global-proxy'.
let BlockList = "Direct";
let AllowList = "Rule";
let Others = "Rule";
let Cellular = "Rule";

function changeOutboundMode(mode) {
    ABOUT_IP += $network.v4.primaryAddress;
    if($surge.setOutboundMode(mode.toLowerCase()))
        $notification.post(TITLE, NETWORK, ABOUT_MODE + mode + '\n' + ABOUT_IP);
}

//wifi select outbound
let NETWORK = "";
if ($network.v4.primaryInterface == "en0") {
    NETWORK += SUBTITLE_WIFI + $network.wifi.ssid;
    if (BLOCKLIST.indexOf($network.wifi.ssid) != -1) {
        changeOutboundMode(BlockList);
    } else if (ALLOWLIST.indexOf($network.wifi.ssid) != -1) {
        changeOutboundMode(AllowList);
    } else {
        changeOutboundMode(Others);
    }
}else if($network.v4.primaryInterface == "pdp_ip0") {
    let CARRIER = $network['cellular-data'].carrier;  
    if(CARRIER == "460-00" || CARRIER == "460-02" || CARRIER == "460-07") SUBTITLE_CELLULAR += CHINA_MOBILE;
    else if(CARRIER == "460-01" || CARRIER == "460-06" || CARRIER == "460-09") SUBTITLE_CELLULAR += CHINA_UNICOM;
    else if(CARRIER == "460-03" || CARRIER == "460-05" || CARRIER == "460-11") SUBTITLE_CELLULAR += CHINA_TELECOM;
    else if(CARRIER == "460-20") SUBTITLE_CELLULAR += CHINA_TIETONG;
    NETWORK += SUBTITLE_CELLULAR + " " + $network['cellular-data'].radio;
    changeOutboundMode(Cellular);
}

$done();
