/*----------------- filter config -----------------*/
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".card");

filterContainer.addEventListener("click", (event) =>{
  // get all filters
  if(event.target.classList.contains("filter-item")){
       filterContainer.querySelector(".active").classList.remove("active");
       
       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{

      // if filter === all
      if(item.classList.contains(filterValue) || filterValue === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      // if filter == cat or filter == dog
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});

/*----------------- variables -----------------*/
const user_btn = document.getElementById('user_txt');
const login_status = localStorage.getItem('login_status');

if(login_status === 'true'){
  user_btn.textContent = 'Perfil';
  user_btn.href = 'perfil_usuario.html';
}