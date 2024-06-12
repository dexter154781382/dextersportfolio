/* NAVBAR STICKY */
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
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

/* ACTIVE NAVBAR LINK */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach (links => {
                links.classList.remove('.active');
                document.querySelector('header nav a href*=' + id + ']').classList.add('.active');
            });
        };
    });
};

/*-Changin Text JS--*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Web. Developer', 'Backend Web. Developer', 'Full Stack Web. Developer'],
    typeSpeed:50,
    backSpeed:70,
    backDelay:1000,
    loop: true,
}); 

