const navbarContainer = document.querySelector('nav')
const footerContainer = document.querySelector('footer')

function injectComponents(){
    navbarContainer.innerHTML = `
        <button class="nav-toggle">
            <svg class="show-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30px" height="30px"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
        </button>
        <a class="donate" href="?p=donate"><span class="donate-heart ficon">Ἧ</span>DONATE</a>

        <div class="links-container">
            <button class="nav-toggle">
                <svg class="hide-nav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="30px" height="30px"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
            </button>


            <a href="" class="link">Levels ></a>
            <a href="" class="link">Support ></a>
            <a href="" class="saved">Bookmarks ></a>
        </div>
        <div class="overlay"></div>    
    `
}
injectComponents()

const navbar = document.querySelector('.navbar')
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
            const btcAddress = document.querySelector('.btc-address').innerText
            const copyBtn = document.querySelector('.svgs-container')

            copyBtn.addEventListener('click', ()=>{
                navigator.clipboard.writeText(btcAddress)
                
                copyBtn.classList.add('copied')

                setTimeout(()=> copyBtn.classList.remove('copied'), 3000);
            })
    }else if(page === 'home'){
        renderUnits()
    } 
}

renderPage()
