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
                    renderWatch(lesson, unit)
                }
            })
        })
    })
}

initWatchPage()

function renderWatch(lesson, unit){
    const mainContainer = document.querySelector('.main-container')
    
    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video-container')
    videoContainer.innerHTML = `
        <iframe src="https://streamtape.com/e/${lesson.urlid}/" allowfullscreen allow="autoplay" scrolling="no" sandbox="allow-scripts"></iframe>
    `
    //info section (title, coach section...)
    const videoInfoContainer = document.createElement('div')
    videoInfoContainer.classList.add('video-info-container')

    const videoInfoPanel = document.createElement('div')
    videoInfoPanel.classList.add('video-info-panel')
    if(videoInfoPanel){
        videoInfoPanel.innerHTML = `
        <span class="ficon lesson-icon">ἔ</span><span class="video-title">${lesson.title}</span>
    `}
    const coachSection = document.createElement('div')
    
    coachSection.classList.add('coach-section')
    
    const coach = document.createElement('div')
    coach.classList.add('coach')
    
    let currentInstructor = unit.instructor.toLowerCase()

    coach.innerHTML = `<img src="assets/instructors/${currentInstructor}.png" alt="">`
    
    const lessonDescriptionWrapper = document.createElement('div')
    lessonDescriptionWrapper.classList.add('lesson-description-wrapper')

    const letters = lesson.description.split('')
    let index = 0

    const spans = letters.map(char =>{
        const span = document.createElement('span')
        span.textContent = char
        span.style.opacity = '0'
        span.style.transition = '0.05s'
        lessonDescriptionWrapper.append(span)
        return span

    })

    function coachSays(){
        if(index < spans.length){
            spans[index].style.opacity = 1
        }
        index++
        setTimeout(coachSays, 9)
    }

    coachSays()

    coachSection.append(coach, lessonDescriptionWrapper)
    videoInfoContainer.append(videoInfoPanel, coachSection)

    mainContainer.append(videoContainer, videoInfoContainer)
}   