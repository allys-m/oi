let user = {};

user.agent = [
  window.navigator.appName,
  window.navigator.appCodeName,
  window.navigator.userAgent,
  window.navigator.cookieEnabled,
  navigator.platform,
  window.location.protocol,
  window.location.host
  
];
var main = {};

main.start = $(function(){
  var date = new Date();
  var msg = "Aktung: die seite wurde nur auf eine mobile version"+
  " aufgebaut mit dem Portrait Oriantation "+
  "Datum  :"+date.getToday();
  alert(msg);
}); // start

main.start();
