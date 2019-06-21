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
   fset.on('mouseover', ()=>{
     fset.css({
       backgroundImage: "url('ms.png')",
       background-size: "20px"
     });
     return;
   }); // fset
   fset.on('mouseout',()=>{
     fset.css({
       background-color: none
     });
   }); // m.out
  }); // tst
}; // main.start
