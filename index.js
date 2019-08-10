let user = {
 appN  : window.navigator.appName,
 appCo : window.navigator.appCodeName,
 usrAg : window.navigator.userAgent,
 cookE : window.navigator.cookieEnabled,
 platf : window.navigator.platform,
 proto : window.location.protocol,
 cliHos: window.location.host
}; // user 

var main = {};

main.start = $().ready(function(){
  var date = new Date();
  var msg = "Aktung: die seite wurde nur auf eine mobile version"+
  " aufgebaut mit dem Portrait Oriantation "+
  "Datum  :"+date;

  alert(msg);

}); // start

main.start();
