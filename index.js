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
var lst = (n)=>{
  for (let i=0; i<n.length; i++){
     alert(i+'  '+n[i]);
  }
};

let mapp = ()=>{
   alert("Herzlichen Willkommen");
   lst(user.agent);
};

