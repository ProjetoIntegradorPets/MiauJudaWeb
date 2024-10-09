/*----------------- variables -----------------*/
const user_btn = document.getElementById('user_txt');
const login_status = localStorage.getItem('login_status');
const user_pets = document.getElementById('user_pets');

if(login_status === 'true'){
  user_btn.textContent = 'Perfil';
  user_btn.href = 'perfil_usuario.html';
}
else{
  user_pets.href = 'validar.html'
}