dayjs.extend(dayjs_plugin_duration)

function activateCountdown(element, dateString){
    const targetDate = dayjs(dateString)

    setInterval(() => {
        const now = dayjs()
        const duration = dayjs.duration(targetDate.diff(now))
            let dni = duration.days().toString().padStart(2,"0")
            let godziny = (dni * 24)  + parseInt(duration.hours().toString().padStart(2,"0"))
            let minuty = (godziny * 60) + parseInt(duration.minutes().toString().padStart(2,"0"))
            let sekundy= (minuty * 60) + parseInt(duration.seconds().toString().padStart(2,"0"))

        
        if(duration.asMilliseconds() <= 0) return

        element.querySelector("#seconds").textContent = sekundy
        element.querySelector("#min").textContent = minuty
        element.querySelector("#hours").textContent = godziny
        element.querySelector("#days").textContent =dni
    },250)
}
function hours(){
    let hour = (duration.hours().toString().padStart(2,"0")) * duration.days().toString().padStart(2,"0")
    element.querySelector("#hours").textContent = hour
}
activateCountdown(document.getElementById("okno2"), "2022-07-18")
// duration.seconds().toString().padStart(2,"0")
// duration.minutes().toString().padStart(2,"0")
// duration.hours().toString().padStart(2,"0")
// duration.days().toString().padStart(2,"0")