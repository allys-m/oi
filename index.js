let user = {
 appN  : window.navigator.appName,
 appCo : window.navigator.appCodeName,
 usrAg : window.navigator.userAgent,
 cookE : window.navigator.cookieEnabled,
 platf : window.navigator.platform,
 proto : window.location.protocol,
 cliHos: window.location.host
}; // user 

var msg = "Aktung: \n"+"die seite wurde nur auf eine mobile version \n"+
  " aufgebaut mit dem Portrait und Landscape Oriantation \n"+
  "Datum  :";

let main = {};

main.start = $(msg).ready(function(){
  var date = new Date();
  alert(msg+" "+date);

}); // start

main.start();
