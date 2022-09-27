import Timer from "./Timer.js";
// buttons
const removeBtn = document.querySelector('#remove');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#pause');
const finishBtn = document.querySelector('#finish');
const timer = new Timer(0, 0, 0);
startBtn.addEventListener('click', () => { timer.startTimer(); });
stopBtn.addEventListener('click', () => { timer.stopTimer(); });
removeBtn.addEventListener('click', () => {
    timer.restartTimer();
    timer.returnStartBtn();
});
finishBtn.setAttribute('disabled', 'disabled');
finishBtn.addEventListener('click', () => { timer.createResult(); });
