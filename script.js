var settings={
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET" ,
  "headers": {}

}
$.ajax(settings).done(function (response){
    console.log(response);
});