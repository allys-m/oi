let user = {};

user.agent = [
  navigator.appName,
  window.href
];

const mapp = ()=>{
   alert('User.nav.appName '+user.agent[1]);
};
