const navbar = document.querySelector('.navbar')
const navToggle = document.querySelectorAll('.nav-toggle')
const sidebar = document.querySelector('.links-container')
const overlay = document.querySelector('.overlay')

let lastScrollY = window.scrollY

window.addEventListener('scroll', ()=>{
    
    if(lastScrollY < window.scrollY){
        navbar.classList.add('hide')
    }else if(lastScrollY > window.scrollY){
        navbar.classList.remove('hide')
    }

    lastScrollY = window.scrollY
})

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
    
        level.units.forEach((unit) =>{
            const unitContainer = document.createElement('a')
            unitContainer.setAttribute('href', `course.html?u=${unit.title.toLowerCase().replace(/\s+/g, '-')}`)
            unitContainer.classList.add('unit')
            unitContainer.innerHTML = `
                <span class="svg-container">   
                    
                    <svg class="unit-icon">
                        <use href="assets/icons.svg#${unit.icon}"></use>
                    </svg>
                </span>
                <p class="unit-title">${unit.title}</p>
            `
            levelBodyDiv.appendChild(unitContainer)
        })    
    })

    const levelHeaders = document.querySelectorAll('.level-header')
    // const levelBodies = document.querySelectorAll('.level-body')

    let collapseStatus = JSON.parse(localStorage.getItem('collapse_status')) || {}

    levelHeaders.forEach((header, idx) =>{
        if(collapseStatus[idx] !== false){//this line checks when the user first enter the page
            header.classList.add('show')
        }
        
        header.addEventListener('click', ()=>{
            
            const isCollapsed = header.classList.toggle('show')

            collapseStatus[idx] = isCollapsed

            localStorage.setItem('collapse_status', JSON.stringify(collapseStatus))
        })
})
}

function renderPage(){
    const mainSection = document.querySelector('.main-section')
    const params = new URLSearchParams(window.location.search)
    const page = params.get('p') || 'home'

    if(page === 'donate'){
        mainSection.innerHTML = `
            <h2 class="donate-page-title">Donate</h2>
            <p class="donate-page-text">[Website] is a free website that I develop in my free time. If you enjoy it, consider showing your support:</p>
            <div class="donation-card">
                <img class="btc-logo" src="assets/btc-logo.png" alt="">
                <div class="qr-code"></div>
                <div class="address-container">
                    <div class="btc-address">1Aegon1af84be1T82ZDZ33cYjwSsBC821i</div>
                    <div class="svgs-container">
                        <svg class="copy-svg" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#aaa" stroke-width="1"><rect x="2" y="2" width="14" height="14"/><polygon points="22 22 8 22 8 16 16 16 16 8 22 8 22 22"/></svg>
                        <svg class="copy-done" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#28a745"><polygon points="8.6,20 0.8,12.2 2.2,10.8 8.6,17.3 21.8,4 23.2,5.4"/></svg>
                    </div>
                </div>
            </div>

        `
    }else if(page === 'home'){
        renderUnits()
    } 
}

renderPage()


const btcAddress = document.querySelector('.btc-address').innerText
const copyBtn = document.querySelector('.svgs-container')

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(btcAddress)
    
    copyBtn.classList.add('copied')

    setTimeout(()=> copyBtn.classList.remove('copied'), 3000);
})