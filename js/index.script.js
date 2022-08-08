// select item
let body = document.body;
let theme = document.getElementById('theme');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let nav = document.getElementById('nav');


moon.addEventListener('click',()=>{
    theme.className = 'icon themeicon sunshow';
    body.className = 'light';
})

sun.addEventListener('click',()=>{
    theme.className = 'icon themeicon moonshow';
    body.className = 'dark';
})

window.addEventListener('scroll',()=>{

    if (window.pageYOffset < 95){
        nav.className = 'hide'
    }else{
        nav.className = '';
    }
})