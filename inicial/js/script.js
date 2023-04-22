const lua = document.querySelector('.icon');
const nav = document.querySelector('.nav-bar');
const txt = document.querySelector('.principal');
const contatos = document.querySelector('#cont');
const sol = document.querySelector('.sol');
const corpo = document.querySelector('body');

lua.addEventListener('click', ()=> {
    sol.classList.add('active')
    lua.classList.add('invisible')
    contatos.classList.add('dark-on')
    txt.classList.add('dark-on')
    nav.classList.add('dark-on')
    corpo.classList.add('dark-on')
})

sol.addEventListener('click', ()=> {
    sol.classList.remove('active')
    lua.classList.remove('invisible')
    contatos.classList.remove('dark-on')
    txt.classList.remove('dark-on')
    nav.classList.remove('dark-on')
    corpo.classList.remove('dark-on')
})