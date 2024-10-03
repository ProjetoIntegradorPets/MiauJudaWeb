/*----------------- variables -----------------*/
const user_btn = document.getElementById('user_txt');
const login_status = localStorage.getItem('login_status');
const register_dropdown = document.querySelectorAll('.dropdown_list li label a');

if(login_status === 'true'){
  user_btn.textContent = 'Perfil';
  user_btn.href = 'perfil_usuario.html';
  register_dropdown[0].href = 'cad_adocao.html';
  register_dropdown[1].href = 'cad_perdido.html';
}