const navToggle = document.querySelectorAll('.nav-toggle')
const sidebar = document.querySelector('.links-container')
const overlay = document.querySelector('.overlay')

navToggle.forEach(nt =>{
    nt.addEventListener('click', ()=>{
        sidebar.classList.toggle('active')
    })
})

overlay.addEventListener('click', ()=>{
    sidebar.classList.remove('active')
})



const levelHeaders = document.querySelectorAll('.level-header')
const levelBodies = document.querySelectorAll('.level-body')

levelHeaders.forEach(header =>{
    header.addEventListener('click', ()=>{
        header.classList.toggle('show')
    })
})