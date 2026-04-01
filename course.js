const params = new URLSearchParams(window.location.search)
const unitSlug = params.get('u')

async function initUnit(){
    const response = await fetch('data.json')
    const data = await response.json()

    data.levels.forEach(level =>{
        level.units.forEach(unit =>{
            currentTitle = unit.title.toLowerCase().replace(/\s+/g, '-')

            if(currentTitle === unitSlug){
                renderUnit(level, unit)
            }
        })
    })

}
initUnit()

function renderUnit(level, unit){
    const bodyEl = document.querySelector('body')
    const unitCard = document.querySelector('.unit-card')
    unitCard.innerHTML = ''

    //creating the level name at top and appending it
    const levelName = document.createElement('h2')
    levelName.classList.add('level-name')
    levelName.innerHTML = `
        <span class="level-icon ficon">${level.levelicon}</span>${level.title}
    `
    unitCard.append(levelName)

    //creating the circle and the icon and appending them
    const unitIconContainer = document.createElement('div')
    unitIconContainer.classList.add('unit-icon-container')
    unitIconContainer.innerHTML = `
        <span>   
            <svg class="theSVG">
                <use href="assets/icons.svg#${unit.icon}"></use>
            </svg>
        </span>
    `
    unitCard.append(unitIconContainer)

    //creating the title and appending it.
    const unitTitle = document.createElement('h2')
    unitTitle.classList.add('unit-title')
    unitTitle.innerText = unit.title
    unitCard.append(unitTitle)

    //creating lessons container and the lessons inside and appending them.
    const lessonsContainer = document.createElement('div')
    lessonsContainer.classList.add('lessons-container')
    bodyEl.append(lessonsContainer)
    unit.lessons.forEach(lesson =>{
        const lessonCard = document.createElement('div')
        lessonCard.classList.add('lesson-card')
        lessonCard.innerHTML = `
            <div class="lesson-thumbnail"><span class="play-icon ficon">J</span></div>
        `
        const lessonDetailsContainer = document.createElement('div')
        lessonDetailsContainer.innerHTML = `
                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-description">${lesson.description}</p>

        `
        lessonCard.append(lessonDetailsContainer)
        lessonsContainer.append(lessonCard)
    })

    //creating tags (based on a mini database array) and appending them.
        
    const unitInfoCard = document.createElement('div')
    unitInfoCard.classList.add('unit-info-card')
    bodyEl.append(unitInfoCard)

    const infoCardTitle = document.createElement('div')
    infoCardTitle.classList.add('info-card-title')
    infoCardTitle.innerText = unit.title
    unitInfoCard.append(infoCardTitle)
    
    const tagData = [
        { icon: `${level.levelicon}`, value: level.title, className: 'level-info-value' },
        { icon: 'ἔ', value: `${unit.lessons.length} Lessons`, className: 'lessons-info-value' },
        { icon: 'J', value: `${unit.duration} Minutes`, className: 'duration-info-value' },
        { icon: 'a', value: `Released ${unit.releaseDate}`, className: 'release-info-value' }
    ];
    tagData.forEach(tag =>{
        const infoTag = document.createElement('div')
        infoTag.classList.add('info-tag')
        infoTag.innerHTML = `
            <span class="info-tag-icon ficon">${tag.icon}</span>
            <span class="${tag.className}">${tag.value}</span>
        `
        unitInfoCard.append(infoTag)
    })

}