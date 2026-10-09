let btnclose = document.getElementById('btnClose');
let btnopen = document.getElementById('btnopen');
let content =document.querySelector(".container1");
let menu = document.querySelector('.Menuparent');
let menulinks = document.querySelectorAll('.menulink');
function closenav (){
    content.classList.add('hide');
    btnclose.classList.add('hide');
    btnopen.classList.remove('hide');
    localStorage.setItem('nav', 'closed');
    if (menu) menu.classList.remove('show')
}
function opennav (){
    btnopen.classList.add('hide');
    content.classList.remove('hide');
    btnclose.classList.remove('hide');
    localStorage.setItem('nav', 'open');
    if (menu) menu.classList.add('show')

}
btnclose.onclick = closenav 
btnopen.onclick = opennav 
if (localStorage.getItem('nav') === 'closed' ) {
    closenav()
    
}else{
    opennav()

}
let pages = document.querySelectorAll('.page, .page-hide');

