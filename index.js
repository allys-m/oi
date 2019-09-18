let user = {
 appN  : window.navigator.appName,
 appCo : window.navigator.appCodeName,
 usrAg : window.navigator.userAgent,
 cookE : window.navigator.cookieEnabled,
 platf : window.navigator.platform,
 proto : window.location.protocol,
 cliHos: window.location.host
}; // user 

var msg = "--[*] Herzlichen Wilkommen in mein-BLOG [*]--";

let main = {};

let newUser = function(userN, userP){
 this.userN = userN; this.userP = userP;
};

main.start = $(function(){
  var date = new Date();
  alert(msg + date.getDate());

}); // start

main.start();
