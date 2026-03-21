const levelHeaders = document.querySelectorAll('.level-header')
const levelBodies = document.querySelectorAll('.level-body')

levelHeaders.forEach(header =>{
    header.addEventListener('click', ()=>{
        header.classList.toggle('show')
    })
})