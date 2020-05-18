/*
AdGuard unlock premium
By langkhach
[Script]
Adguard Premium = type=http-response,pattern=^https:\/\/mobile-api\.adguard\.com\/api\/.+\/ios_validate_receipt$,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/maicoo-l/Surge/master/Script/AdGuard.js,script-update-interval=0
[MITM]
hostname = mobile-api.adguard.com
*/

let obj = JSON.parse($response.body);
obj={"products":[{"product_id":"com.adguard.lifetimePurchase","premium_status":"ACTIVE"}]};
$done({body: JSON.stringify(obj)});