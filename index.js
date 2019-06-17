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
  for (let i=0; i<user.agent.length; i++){
     var txt = user.agent[i];
     document.body.append(txt);
  }
};

let mapp = ()=>{
   alert("Herzlichen Willkommen");
   lst();
};

