const menuBurger = document.querySelector('.menu-burger');
const listNav = document.querySelector('.item')
const allNavigation = document.querySelectorAll('.item-nav')

menuBurger.addEventListener('click',()=>{
    allNavigation.forEach(nav=>{
        nav.classList.toggle('active')

        if(nav.classList.contains('active')){
            menuBurger.childNodes[1].className = "fa-solid fa-xmark"
        }else{
            menuBurger.childNodes[1].className = "fa-solid fa-bars"
        }
    })

})