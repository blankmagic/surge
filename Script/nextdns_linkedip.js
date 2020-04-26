//Script event auto linked ipv4 nextdns: network-change

async function launch() {
  await linkedip();
}
launch()
function linkedip(){ 
$httpClient.post('https://link-ip.nextdns.io/maicoo/44c338ed58bbc259', function(error, response, data){
if (error) {
$notification.post('NEXT DNS ', 'Internet error','');
console.log('‼️');
} else {
$notification.post('NEXT DNS ', 'IPv4 (with linked IP)', 'ip :' + data);
console.log('🟢 '+ data);
}
$done();
});
}