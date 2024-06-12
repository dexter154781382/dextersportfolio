/* NAVBAR STICKY */
window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle('sticky', window.scrollY > 0);
});

/* DROPDOWN MENU */
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const DropDownMenu = document.querySelector('.dropdown_menu')
console.log(DropDownMenu)

/* OPEN DROPDOWN MENU */
toggleBtn.onclick = function (){
    DropDownMenu.classList.toggle('open')

}


