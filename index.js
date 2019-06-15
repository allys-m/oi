let user = {};

user.agent = [
  navigator.appName,
  navigator.appCodeName,
  window.location.protocol,
  window.location.host,
  
];

const mapp = ()=>{
   alert('User.nav.appName '+user.agent[1]);
};
