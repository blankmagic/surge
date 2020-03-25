//Script event auto linked ipv4 nextdns: network-change

$httpClient.get('liked IP填这里', function(error, response, data){
  if (error) {
console.log(error + '‼️');
  } else {
console.log(data);
$done();
  }
});
