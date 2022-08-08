// select item
let body = document.body;
let theme = document.getElementById('theme');
let moon = document.getElementById('moon');
let sun = document.getElementById('sun');
let nav = document.getElementById('nav');
let faviconlink = document.getElementById("favicon");
console.log(faviconlink.href);


moon.addEventListener('click',()=>{
    theme.className = 'icon themeicon sunshow';
    body.className = 'light';
    faviconlink.href = './asset/favicon/light.png';
})

sun.addEventListener('click',()=>{
    theme.className = 'icon themeicon moonshow';
    body.className = 'dark';
    faviconlink.href = './asset/favicon/dark.png';
})

window.addEventListener('scroll',()=>{

    if (window.pageYOffset < 95){
        nav.className = 'hide'
    }else{
        nav.className = '';
    }
})