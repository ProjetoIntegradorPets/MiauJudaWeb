/*----------------- variables -----------------*/
const user_btn = document.getElementById('user_txt');
const login_status = localStorage.getItem('login_status');
const abacate = 123;

if(login_status === 'true'){
  user_btn.textContent = 'Perfil';
  user_btn.href = 'perfil_usuario.html';
}