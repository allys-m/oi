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
        alert("dome");
      }, 2000);
      document.write(i+' '+user.agent[i]+'<br>');
   }
};
