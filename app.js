const hamburgerBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
    navList.classList.toggle('active')
    document.body.children[0].classList.toggle('active')
})