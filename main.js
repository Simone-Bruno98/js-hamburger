const icona = document.querySelector(".fa-bars");
const chiusura = document.querySelector(".fa-times");
const menuHamburger = document.querySelector(".hamburger-menu");


icona.addEventListener("click", function(){
  menuHamburger.classList.add("active");
});

chiusura.addEventListener("click", function(){
  menuHamburger.classList.remove("active");
});


// chiusura.addEventListener ("click", funtion(){
//     menuHamburger.classList.add("close");
// });