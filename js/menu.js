const menu = document.querySelector('.menu')
const btnOpen = document.querySelector('.btn-open')
const btnClose = document.querySelector('.btn-close')

btnOpen.addEventListener('click', function() {
    menu.classList.add('menu-open')
    btnOpen.classList.add('btn-visibily')
})

btnClose.addEventListener('click', function() {
    menu.classList.remove('menu-open')
    btnOpen.classList.remove('btn-visibily')
})