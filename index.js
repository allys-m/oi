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
   var bdy = $('body')
   bdy.on('mouseover', ()=>{
     bdy.css({
       background-image: 'url("ms.png")'
     });
   });
   bdy.on('mouseout',()=>{
       background-color: "none"
   });
   alert("js done ");
  });
};
