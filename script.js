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


            <a href="" class="lessons-nav">
                <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM224 160L224 224L288 224L288 160L352 160L352 224L416 224L416 160L480 160L480 224L416 224L416 288L480 288L480 352L416 352L416 416L480 416L480 480L416 480L416 416L352 416L352 480L288 480L288 416L224 416L224 480L160 480L160 416L224 416L224 352L160 352L160 288L224 288L224 224L160 224L160 160L224 160zM288 288L352 288L352 224L288 224L288 288zM288 352L288 288L224 288L224 352L288 352zM352 352L288 352L288 416L352 416L352 352zM352 352L416 352L416 288L352 288L352 352z"/></svg>
                Lessons
            <div class="ddm-1">
                    <ul>
                        <li>New to Chess</li>
                        <li>Beginner</li>
                        <li>Intermediate</li>
                        <li>Advanced</li>
                        <li>Mastery</li>
                    </ul>
                </div>

            </a>
            <a href="" class="saved">
                <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 545.1C512 570.7 483.5 585.9 462.2 571.7L320 476.8L177.8 571.7C156.5 585.9 128 570.6 128 545.1L128 128zM192 112C183.2 112 176 119.2 176 128L176 515.2L293.4 437C309.5 426.3 330.5 426.3 346.6 437L464 515.2L464 128C464 119.2 456.8 112 448 112L192 112z"/></svg>
                Bookmarks
            </a>

            <a href="" class="theme-toggle">
                <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
                Dark Mode
            </a>

            <a href="" class="support-nav-link">
                <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z"/></svg>
                Support
            </a>
            <a href="" class="faqs">
                <svg class="mobile-nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/></svg>
                FAQs
            </a>
        </div>

        <img class="navbar-logo" src="assets/learn.png">
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
        if(levelsContainer){
            levelsContainer.appendChild(levelDiv)
        }
        
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
