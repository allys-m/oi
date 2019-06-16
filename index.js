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
var lst = ()=>{
  for (let i=0; i<10; i++){
     alert(i);
  }
};

let mapp = ()=>{
   alert("Herzlichen Willkommen");
   lst();
};

