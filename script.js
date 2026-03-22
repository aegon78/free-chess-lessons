const navToggle = document.querySelector('.nav-toggle')
const sidebar = document.querySelector('.links-container')

navToggle.addEventListener('click', ()=>{
    sidebar.classList.toggle('active')
})

const levelHeaders = document.querySelectorAll('.level-header')
const levelBodies = document.querySelectorAll('.level-body')

levelHeaders.forEach(header =>{
    header.addEventListener('click', ()=>{
        header.classList.toggle('show')
    })
})