function updateClock(){
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,'0')
    const minutes = now.getMinutes().toString().padStart(2,'0')
    const seconds = now.getSeconds().toString().padStart(2,'0')

    const formattedTime = `${hours}:${minutes}::${seconds}`
    const formattedTimeAMPM = format(now)
    console.log(`24-hours format: ${formattedTime} | 12-hours format: ${formattedTimeAMPM}`)
}

function format(now){
    let hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const ampm = hours>=12 ? 'PM' : 'AM'

    hours = hours%12 
    hours = hours? hours: 12
    
    return `${hours}:${minutes}::${seconds} ${ampm}`
}

updateClock()

setInterval(updateClock,1000)