import getResult from "./Results.js"
let interval: any

// Html elements 
const rocket: HTMLElement = document.querySelector('.timer__line')
const minutHtmlElement: HTMLElement = document.querySelector('.minute')
const secondHtmlElement: HTMLElement = document.querySelector('.second')
const milisecondHtmlElement: HTMLElement = document.querySelector('.milisecond')

// buttons
const startBtn: HTMLButtonElement = document.querySelector('#start')
const stopBtn: HTMLButtonElement = document.querySelector('#pause')
const finishBtn: HTMLButtonElement = document.querySelector('#finish')

class Timer {
    private _milisecond
    private _second 
    private _minut
    
    constructor(milisecond: number, second: number, minut: number) {
        this._milisecond = milisecond
        this._second = second 
        this._minut = minut
    }

    public startTimer(): void {
        clearInterval(interval)                

        this.createStopBtn()

        finishBtn.removeAttribute('disabled')

        rocket.style.transform = 'none'
        rocket.classList.add('animation')
        rocket.style.animationPlayState = 'running'

        interval = setInterval(() => {

            // milisecond
            if (this._milisecond < 99) {
                this._milisecond += 1

                if (this._milisecond < 10) {
                    milisecondHtmlElement.innerHTML = `0${this._milisecond}`
                }

                else {
                    milisecondHtmlElement.innerHTML = String(this._milisecond)
                }
            }

            // second
            else if (this._second < 59) {
                this._milisecond = 0
                this._second += 1

                if (this._second < 10) {
                    secondHtmlElement.innerHTML = `0${this._second}`
                }

                else {
                    secondHtmlElement.innerHTML = String(this._second)
                }
            }

            // minute
            else if (this._minut < 60) {                
                this._second = 0
                secondHtmlElement.innerHTML = `0${this._second}`

                this._milisecond = 0
                this._minut += 1

                if (this._minut < 10) {
                    minutHtmlElement.innerHTML = `0${this._minut}`
                }

                else {
                    minutHtmlElement.innerHTML = String(this._minut)
                }
            }

            else if (this._minut === 60) {
                this.restartTimer()
                this.startTimer()
            }
            
        }, 1)
    }

    public restartTimer() {
        clearInterval(interval)
        this._milisecond = 0
        this._second = 0
        this._minut = 0

        finishBtn.setAttribute('disabled', 'disabled')
        rocket.style.transform = 'rotate(-51deg)'
        rocket.classList.remove('animation')

        milisecondHtmlElement.innerHTML = '00'
        secondHtmlElement.innerHTML = '00'
        minutHtmlElement.innerHTML = '00'

        const results: NodeList = document.querySelectorAll('.results__card')

        results.forEach((result: HTMLElement) => {result.remove()})
    }

    public stopTimer() {
        clearInterval(interval)
        this.returnStartBtn()
        finishBtn.setAttribute('disabled', 'disabled')

        rocket.style.animationPlayState = 'paused'
    }

    public createResult() {
        const result = `${minutHtmlElement.innerHTML}:${secondHtmlElement.innerHTML}:${milisecondHtmlElement.innerHTML}`
        getResult(result)
    }

    public createStopBtn() {
        stopBtn.style.display = 'block'
        startBtn.style.display = 'none'   
    }

    public returnStartBtn() {
        stopBtn.style.display = 'none'
        startBtn.style.display = 'block'   
    }
}

export default Timer