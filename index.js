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
  var msg = "Aktung: die seite wurde nur auf mobile version"+
  " aufgebaut mit Portrait Oriantation ";
  alert(msg);
}); // start

main.start();
