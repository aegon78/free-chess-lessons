const params = new URLSearchParams(window.location.search)
const lessonSlug = params.get('l')

async function initWatchPage(){
    const response = await fetch('data.json')
    const data = await response.json()

    console.log(data)
}