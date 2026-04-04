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

    //creating description/description items & appending them.

    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('description-container')
    unitCard.appendChild(descriptionContainer)
    unit.description.forEach(item =>{
        let el;

        if(item.headline){
            el = document.createElement('p')
            el.classList.add('description-headline')
            el.textContent = item.headline
        }else if(item.body){
            el = document.createElement('p')
            el.textContent = item.body
        }else if(item.objectives){
            el = document.createElement('ul')
            item.objectives.forEach(objective => {
                const li = document.createElement('li')
                li.textContent = objective
                el.appendChild(li)
            })
        }

        if(el) descriptionContainer.append(el)

    })
    //creating lessons container and the lessons inside and appending them.
    const lessonsContainer = document.createElement('div')
    lessonsContainer.classList.add('lessons-container')
    bodyEl.append(lessonsContainer)
    
    unit.lessons.forEach((lesson, idx) =>{
        const lessonCard = document.createElement('a')
        lessonCard.setAttribute('href', `watch.html?${lesson.title.toLowerCase().replace(/\s+/g, '-')}`)
        lessonCard.classList.add('lesson-card')
        lessonCard.innerHTML = `
            <div class="lesson-thumbnail">
                <img class="thumbnail-img" src="assets/thumbnails/${level.title}/${unit.title}/${idx + 1}.webp">
                <div class="play-icon-background">
                    <span class="ficon play-icon">J<span>
                </div>
            </div>
        `
        const lessonDetailsContainer = document.createElement('div')
        lessonDetailsContainer.innerHTML = `
                <h3 class="lesson-title">${lesson.title}</h3>
                <p class="lesson-description">${lesson.description}</p>
                <div class="lessonTagsContainer">
                    <span class="duration-icon ficon">J</span>
                    <span class="video-duration-value">${lesson.duration} min</span>
                </div>
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
    
    // const unitDuration = unit.less
    
    unitDuration = unit.lessons.reduce((total, lesson)=>{
        return total + lesson.duration
    }, 0)

    const tagData = [
        { icon: `${level.levelicon}`, value: level.title, className: 'level-info-value' },
        { icon: 'ἔ', value: `${unit.lessons.length} Lessons`, className: 'lessons-info-value' },
        { icon: 'J', value: `${unitDuration} Minutes`, className: 'duration-info-value' },
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