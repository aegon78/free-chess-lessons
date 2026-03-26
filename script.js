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


async function renderUnits(){
    const response = await fetch('./data.json')
    const data = await response.json()
    
    const levelsContainer = document.querySelector('.levels')
    const levelsArr = data.levels
    
    levelsArr.forEach((level, idx) =>{

        const levelDiv = document.createElement('div')
        levelDiv.classList.add('level', `level-${idx + 1}`)
        levelsContainer.appendChild(levelDiv)
        
        const levelHeaderDiv = document.createElement('div')
        const levelBodyDiv = document.createElement('div')
        
        levelHeaderDiv.classList.add('level-header')
        levelBodyDiv.classList.add('level-body')

        levelDiv.append(levelHeaderDiv, levelBodyDiv)

        const titleContainerH2 = document.createElement('h2')
        titleContainerH2.innerHTML = `
            <span class="ficon level-icon">${level.levelicon}</span>
            ${level.title}
        `
        const levelToggle = document.createElement('button')
        levelToggle.classList.add('level-toggle')
        levelHeaderDiv.append(titleContainerH2, levelToggle)
    
        level.units.forEach(unit =>{
            const unitContainer = document.createElement('a')
            unitContainer.classList.add('unit')
            unitContainer.innerHTML = `
                <span class="svg-container">   
                    
                    <svg class="unit-icon">
                        <use href="icons.svg#${unit.icon}"></use>
                    </svg>
                </span>
                <p class="unit-title">${unit.title}</p>
            `
            levelBodyDiv.appendChild(unitContainer)
        })    
    })
    const levelHeaders = document.querySelectorAll('.level-header')
    const levelBodies = document.querySelectorAll('.level-body')

    let collapseStatus = JSON.parse(localStorage.getItem('collapse_status')) || {}

    levelHeaders.forEach((header, idx) =>{
        //this line checks when the user first enter the page
        
        if(collapseStatus[idx] === true){
            header.classList.add('show')
        }
        
        header.addEventListener('click', ()=>{
            
            const isCollapsed = header.classList.toggle('show')

            collapseStatus[idx] = isCollapsed

            localStorage.setItem('collapse_status', JSON.stringify(collapseStatus))
        })
})
}
renderUnits()