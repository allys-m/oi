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
   alert('User.nav.appName '+user.agent[0]);
   for (let i=0; i<=user.agent.length; i++){
      var time = setTimeout(()=>{
        var t = document.write(i+' '+user.agent[i]+'<br>');
      }, 2000);
      var b = document.getElementById('demo');
      domcument.write(b.innerHTML=time);
   }
};
