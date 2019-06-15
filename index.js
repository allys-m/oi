let user = {};

user.agent = [
  navigator.appName,
  window.location.protocol
];

const mapp = ()=>{
   alert('User.nav.appName '+user.agent[1]);
};
