let user = {
 appN  : window.navigator.appName,
 appCo : window.navigator.appCodeName,
 usrAg : window.navigator.userAgent,
 cookE : window.navigator.cookieEnabled,
 platf : window.navigator.platform,
 proto : window.location.protocol,
 cliHos: window.location.host
}; // user 

var msg = "Aktung: \n"+
 "die seite wurde nur auf eine mobile version"+
 " aufgebaut mit dem Portrait und \n"+
 "Landscape Oriantation \n"+
 "Datum  :";

let main = {};

main.start = $(function(){
  var date = new Date();
  alert(msg+" "+date+"Platform :"+
  user.platf);

}); // start

main.start();
