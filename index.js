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
   var fset = $('#f7');
   fset.on('mouseover', ()=>{
     fset.css({
       backgroundColor: white;
     });
   $('#first-div, i ').css({
      color: "black"
   });// instance
   }); // fset
   fset.on('mouseout',()=>{
     fset.css({
       background-color: none
     });
   }); // m.out
  }); // tst
}; // main.start
