const secondsEl = document.getElementById('seconds')
const minutesEl = document.getElementById('minutes')
const millisecondsEl = document.getElementById('milliseconds')
const startBtn = document.getElementById('start')
const pauseBtn = document.getElementById('pause')
const resumeBtn = document.getElementById('resume')
const resetBtn = document.getElementById('reset')
const bgBtn = document.getElementById('bg')
let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

var botoes = document.querySelectorAll('button')

var vid = document.querySelector('video')

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resumeBtn.addEventListener('click', resumeTimer)
resetBtn.addEventListener('click', resetTimer)
bgBtn.addEventListener('click', bg)

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10
            if (milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }
            if (seconds === 60) {
                minutes++
                seconds = 0
            }
            minutesEl.innerHTML = formatTime(minutes)
            secondsEl.innerHTML = formatTime(seconds)
            millisecondsEl.innerHTML = formatMilliseconds(milliseconds)
        }

    }, 10)
    startBtn.style.display = 'none'
    pauseBtn.style.display = 'inline-block'
    resetBtn.style.display = 'inline-block'
}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'inline-block'

}
function resumeTimer() {
    isPaused = false
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'inline-block'
}
function resetTimer() {
    clearInterval(interval)
    isPaused = false
    milliseconds = 0
    seconds = 0
    minutes = 0
    minutesEl.innerHTML = "00"
    secondsEl.innerHTML = "00"
    millisecondsEl.innerHTML = "000"
    startBtn.style.display = 'inline-block'
    resumeBtn.style.display = 'none'
    pauseBtn.style.display = 'none'
    resetBtn.style.display = 'none'
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time) {
    return time < 100 ? `0${time}`.padStart(3, "0") : time
}

var wpp = [
    'videos/samurai-autumn-forest-ghost-of-tsushima-HD-live.mp4',
    'videos/demon-samurai-katana-HD-live.mp4',
    'videos/g-i-dle-HD-live.mp4',
    'videos/pixel-evening-ride-HD-live.mp4',
    'videos/windmill-blue-skies-horizon-live-wallpaper.mp4'
]
var wpp1 = wpp.length

function bg() {
    wpp1--;
    vid.src = wpp[wpp1];

    if (wpp1 === 0) {
        wpp1 = wpp.length;
    }

    setButtonBackgroundColor();
}

function setButtonBackgroundColor() {
    botoes.forEach(botao => {
        botao.classList.remove('btn', 'btn2', 'btn3', 'btn4', 'btn5');
    });

    if (vid.src.includes('samurai-autumn-forest-ghost-of-tsushima-HD-live.mp4')) {
        applyThemeToButtons('btn');
    } else if (vid.src.includes('windmill-blue-skies-horizon-live-wallpaper.mp4')) {
        applyThemeToButtons('btn2');
    } else if (vid.src.includes('pixel-evening-ride-HD-live.mp4')) {
        applyThemeToButtons('btn3');
    } else if (vid.src.includes('g-i-dle-HD-live.mp4')) {
        applyThemeToButtons('btn4');
    } else if (vid.src.includes('demon-samurai-katana-HD-live.mp4')) {
        applyThemeToButtons('btn5');
    }
}

function applyThemeToButtons(themeClass) {
    botoes.forEach(botao => {
        botao.classList.add(themeClass);
    });
}