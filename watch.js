const params = new URLSearchParams(window.location.search)
const lessonSlug = params.get('l')

async function initWatchPage(){
    const response = await fetch('data.json')
    const data = await response.json()

    data.levels.forEach(level =>{
        level.units.forEach(unit =>{
            unit.lessons.forEach(lesson =>{
                const currentLesson = lesson.title.toLowerCase().replace(/\s+/g, '-')
                if(currentLesson === lessonSlug){
                    renderWatch(lesson)
                }
            })
        })
    })
}

initWatchPage()

function renderWatch(lesson){
    const mainContainer = document.querySelector('.main-container')
    
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video-container')
    videoContainer.innerHTML = `
        <iframe src="https://streamtape.com/e/${lesson.urlid}/" allowfullscreen allow="autoplay" scrolling="no"></iframe>
    `
    //info section (title, coach section...)
    const videoInfoContainer = document.createElement('div')
    videoInfoContainer.classList.add('video-info-container')

    const videoInfoPanel = document.createElement('div')
    videoInfoPanel.classList.add('video-info-panel')
    videoInfoPanel.innerHTML = `
        <span class="ficon lesson-icon">ἔ</span><span class="video-title">${lesson.title}</span>
    `
    const coachSection = document.createElement('div')
    
    coachSection.classList.add('coach-section')
    
    const coach = document.createElement('div')
    coach.classList.add('coach')
    
    coach.innerHTML = `<img src="assets/coach.png" alt="">`
    
    const lessonDescriptionWrapper = document.createElement('div')
    lessonDescriptionWrapper.classList.add('lesson-description-wrapper')
    lessonDescriptionWrapper.textContent = lesson.description

    coachSection.append(coach, lessonDescriptionWrapper)
    videoInfoContainer.append(videoInfoPanel, coachSection)

    mainContainer.append(videoContainer, videoInfoContainer)
}   