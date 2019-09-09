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
"Ich entschuldigung mich jetzt zu sagen "+
"die WEBSITE würde nur on mobile version "+
"gestellt .";

let main = {};

main.start = $(function(){
  var date = new Date();
  alert(msg +"\t\n"+ date +"\nPlatform : \n"+
  user.platf);

}); // start

main.start();
