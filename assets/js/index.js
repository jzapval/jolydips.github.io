const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'No somos una salsa, \n Cremoso, cuchareable \n con trocitos de aguacate'
let idx = 1
let speed = 300 / speedEl.value
writeText()
function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

