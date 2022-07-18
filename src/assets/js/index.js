const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector("#aside-menu");

btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('aside-menu--active');
})