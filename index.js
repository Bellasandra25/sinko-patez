// alert("welcome to sinko pa tez designers, your custom ready to wear provider.")
// let 

const mobileMenu = document.querySelector('.mobile-menu')
const mobileOpen = document.querySelector('.fa-bars')
const mobileClose = document.querySelector('.fa-times')

mobileOpen.addEventListener('click', function() {
    console.log("wre")
    mobileMenu.style.display = "block"
    mobileOpen.style.display = "none"
    mobileClose.style.display = "block"
})

mobileClose.addEventListener('click', function() {
    console.log("wre")
    mobileMenu.style.display = "none"
    mobileOpen.style.display = "block"
    mobileClose.style.display = "none"
})