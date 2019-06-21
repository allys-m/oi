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
   var fset = $('fieldset');
   fset.on('click', ()=>{
     fset.css({
       backgroundImage: "url('ms.png')"
     });
     return false;
   }); // fset
  }); // tst
}; // main.start
