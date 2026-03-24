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

let collapseStatus = JSON.parse(localStorage.getItem('collapse_status')) || {}

levelHeaders.forEach((header, idx) =>{
    
    if(collapseStatus[idx] === true){
        header.classList.add('show')
    }
    
    header.addEventListener('click', ()=>{
        
        const isCollapsed = header.classList.toggle('show')

        collapseStatus[idx] = isCollapsed

        localStorage.setItem('collapse_status', JSON.stringify(collapseStatus))
    })
})