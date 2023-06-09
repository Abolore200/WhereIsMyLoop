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

const link = document.querySelectorAll('.whereismyloop-sub-menu ul li')
link.forEach(onelink => {
    onelink.addEventListener('click', () => {
        if(menuhome.classList.contains('show') && document.body.classList.contains('fixed')){
            menuhome.classList.remove('show')
            document.body.classList.remove('fixed')
        }
    })
})