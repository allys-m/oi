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

main.start=()=>{
 
  var tst = $().ready(function(){
   var bdy = $('body');
   bdy.on('mouseover', ()=>{
     bdy.css({
       backgroundImage: "url('ms.png')"
     });
   }); // bdy
  }); // tst
}; // main.start
