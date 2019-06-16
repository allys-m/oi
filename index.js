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

const mapp = ()=>{
   var time = setTimeout(()=>{
     for (var i=0; i<user.agent.length; i++){
       document.write(user.agent[i]);
     }
   }, 2000);
};

mapp();
