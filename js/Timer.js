import getResult from "./Results.js";
let interval;
// Html elements 
const rocket = document.querySelector('.timer__line');
const minutHtmlElement = document.querySelector('.minute');
const secondHtmlElement = document.querySelector('.second');
const milisecondHtmlElement = document.querySelector('.milisecond');
// buttons
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#pause');
const finishBtn = document.querySelector('#finish');
class Timer {
    constructor(milisecond, second, minut) {
        this._milisecond = milisecond;
        this._second = second;
        this._minut = minut;
    }
    startTimer() {
        clearInterval(interval);
        this.createStopBtn();
        finishBtn.removeAttribute('disabled');
        rocket.style.transform = 'none';
        rocket.classList.add('animation');
        rocket.style.animationPlayState = 'running';
        interval = setInterval(() => {
            // milisecond
            if (this._milisecond < 99) {
                this._milisecond += 1;
                if (this._milisecond < 10) {
                    milisecondHtmlElement.innerHTML = `0${this._milisecond}`;
                }
                else {
                    milisecondHtmlElement.innerHTML = String(this._milisecond);
                }
            }
            // second
            else if (this._second < 59) {
                this._milisecond = 0;
                this._second += 1;
                if (this._second < 10) {
                    secondHtmlElement.innerHTML = `0${this._second}`;
                }
                else {
                    secondHtmlElement.innerHTML = String(this._second);
                }
            }
            // minute
            else if (this._minut < 60) {
                this._second = 0;
                secondHtmlElement.innerHTML = `0${this._second}`;
                this._milisecond = 0;
                this._minut += 1;
                if (this._minut < 10) {
                    minutHtmlElement.innerHTML = `0${this._minut}`;
                }
                else {
                    minutHtmlElement.innerHTML = String(this._minut);
                }
            }
            else if (this._minut === 60) {
                this.restartTimer();
                this.startTimer();
            }
        }, 1);
    }
    restartTimer() {
        clearInterval(interval);
        this._milisecond = 0;
        this._second = 0;
        this._minut = 0;
        finishBtn.setAttribute('disabled', 'disabled');
        rocket.style.transform = 'rotate(-51deg)';
        rocket.classList.remove('animation');
        milisecondHtmlElement.innerHTML = '00';
        secondHtmlElement.innerHTML = '00';
        minutHtmlElement.innerHTML = '00';
        const results = document.querySelectorAll('.results__card');
        results.forEach((result) => { result.remove(); });
    }
    stopTimer() {
        clearInterval(interval);
        this.returnStartBtn();
        finishBtn.setAttribute('disabled', 'disabled');
        rocket.style.animationPlayState = 'paused';
    }
    createResult() {
        const result = `${minutHtmlElement.innerHTML}:${secondHtmlElement.innerHTML}:${milisecondHtmlElement.innerHTML}`;
        getResult(result);
    }
    createStopBtn() {
        stopBtn.style.display = 'block';
        startBtn.style.display = 'none';
    }
    returnStartBtn() {
        stopBtn.style.display = 'none';
        startBtn.style.display = 'block';
    }
}
export default Timer;
