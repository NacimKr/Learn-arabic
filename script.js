const btnMenu = document.querySelector('.menu-burger');
const listNav = document.querySelector('.item');
const menu = document.querySelectorAll('.item-nav');
console.log(listNav);

btnMenu.addEventListener('click',()=>{
    listNav.classList.toggle('active')
    console.log("ok");
})

menu.forEach(item=>{
    item.addEventListener('click',()=>{
        listNav.classList.toggle('active')
    })
})