const houerElement = document.querySelector('.houer')
const menutElement = document.querySelector('.menut')
const secondElement = document.querySelector('.second')
const daysElement = document.querySelector('.days')

// buttons
const pauseBtn = document.querySelector('#pause')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')

// Listener 
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startFn, 10)
})

const resultFn = () => {
    const result = document.querySelector('.timer-numbers')
    const cardResult = `
    <div style="background-color: #151f36;" class="result animate__animated animate__fadeInUp
    text-green-400 text-xl w-80 px-4 py-4 rounded absolute right-0 bottom-0 mb-3 mr-3
  ">
    <h5>Your result !</h5>
    <p class="text-white">${result.innerHTML}</p>
  </div>
    `

    const body = document.querySelector('body')
    body.insertAdjacentHTML('beforeend', cardResult)

    setTimeout(() => {
        document.querySelectorAll('.result').forEach(element => element.remove())

    }, 8000)
}

pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
    resultFn()
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)

    houer = 00
    houerElement.innerHTML = '00'

    menut = 00
    menutElement.innerHTML = '00'

    second = 00
    secondElement.innerHTML = '00'

    days = 00
    daysElement.innerHTML = '00'

    interval = null
})

// Variables
let houer = 00,
    menut = 00,
    second = 00,
    days = 00,
    interval 


const secondFn = () => {
    second += 1
    if (second < 10 ) {
        secondElement.innerHTML = `0${second}`
    } 

    if (second > 9) {
        secondElement.innerHTML = second
    }
}

const menutFn = () => {    
    menut += 1

    if (menut < 10 ) {
        menutElement.innerHTML = `0${menut}`
    } 

    if (menut > 9) {
        menutElement.innerHTML = menut
    }
}

const houerFn = () => {
    houer += 1

    if (houer < 10 ) {
        houerElement.innerHTML = `0${houer}`
    }

    if (houer > 9) {
        houerElement.innerHTML = houer 
    }
}

const daysFn = () => {
    days += 1

    if (days < 10) {
        daysElement.innerHTML = `0${days}`
    }

    if (days > 9) {
        daysElement.innerHTML = days
    }
}

const startFn = () => {
    secondFn()

    if (second === 60) {
        second = 00
        menutFn()
    }

    if (menut === 60) {
        second = 00
        menut = 00
        houerFn()
    }

    if (houer === 24) {
        second = 00
        menut = 00
        houer = 00
        daysFn()
    }
}