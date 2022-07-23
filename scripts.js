let scrollPosition = window.scrollY;
const logoContainer = document.getElementsByClassName('navbar')[0];
const navbarMenu = document.getElementsByClassName('navbar__menu')[0]

const toggleNavbar = () => {
	navbarMenu.classList.toggle('navbar__menu--active')
}

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        logoContainer.classList.add('navbar--visible');
    } else {
        logoContainer.classList.remove('navbar--visible');
    }

});