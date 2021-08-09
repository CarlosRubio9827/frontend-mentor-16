const menu = document.querySelectorAll('.top-nav-bg-list ul');

var arr = Array.from(menu[0].children)
arr.forEach(i => {
    i.addEventListener('click', ()=>{
        i.classList.toggle('top-nav-bg-list-active')
    })
});

const menuBg = document.querySelector('.top-nav-bg')

const menuHamburguer = document.querySelector('.top-nav-menu-icon');
menuHamburguer.addEventListener('click', ()=>{
    if(menuBg.style.display == 'none'){
        menuHamburguer.style.backgroundImage = "url(./images/icon-close.svg)";
        menuBg.style.display = 'grid';
        menuBg.style.animation = 'showBgMobile 0.5s linear';
    }else{
        menuHamburguer.style.backgroundImage = "url(./images/icon-hamburger.svg)";
        menuBg.style.animation = 'hideBgMobile 0.5s linear';
        menuBg.style.display = 'none';
    }
})