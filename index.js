const hamburgerMenu = document.getElementsByClassName('hamburger__menu')[0]
const hamburgerBar = document.getElementsByClassName('hamburger__bar')[0]
const sideBar = document.getElementsByClassName('nav__sidebar')[0]
const closeSidebar = document.getElementsByClassName('close__icon')[0]
const overlay = document.getElementsByClassName('overlay')[0]

hamburgerMenu.addEventListener('click', () => {
    sideBar.classList.toggle('active')
    overlay.classList.toggle('active')
})

closeSidebar.addEventListener('click', () => {
    sideBar.classList.toggle('active')
    overlay.classList.toggle('active')
})

function changeBackground() {
    const navBar = document.getElementsByClassName('nav-bar')[0]
    const scrollValue = window.scrollY; 

    if (scrollValue < 150) 
        navBar.classList.remove('nav__background');
    else 
        navBar.classList.add('nav__background');
}

window.addEventListener('scroll', changeBackground);







