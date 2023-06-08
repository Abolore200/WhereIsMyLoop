const menuBar = document.querySelector('#menubtn')
const body = document.querySelector('body')
const menuhome = document.querySelector('.whereismyloop-sub-menu')
menuBar.addEventListener('click', () => {
    menuhome.classList.toggle('show')
    body.classList.toggle('fixed')
})

const year = new Date().getFullYear()
const span = document.querySelector('.footer-head .follow .copyright p span')
span.innerHTML = year