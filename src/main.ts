import Timer from "./Timer.js"

// buttons
const removeBtn: HTMLButtonElement = document.querySelector('#remove')
const startBtn: HTMLButtonElement = document.querySelector('#start')
const stopBtn: HTMLButtonElement = document.querySelector('#pause')
const finishBtn: HTMLButtonElement = document.querySelector('#finish')

const timer = new Timer(0, 0, 0)

startBtn.addEventListener('click', () => { timer.startTimer() })

stopBtn.addEventListener('click', () => { timer.stopTimer() })

removeBtn.addEventListener('click', () => { 
    timer.restartTimer()
    timer.returnStartBtn()
})

finishBtn.setAttribute('disabled', 'disabled')
finishBtn.addEventListener('click', () => { timer.createResult() })