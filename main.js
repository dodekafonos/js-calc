const btns = document.querySelectorAll(".button")
const submit = document.querySelector("#submit")
const screen = document.querySelector(".screen")
const clear = document.querySelector("#apagar")
let exp = ""

function getValue() {
    t = window.event.target
    if (t.id != "submit" && t.id != "screen") {
        n = window.event.target.innerText
        exp += n
        screen.innerText += n
    }
}

function calc () {
    screen.innerText = eval(exp)
    exp = ""
}

btns.forEach(btn => {
    btn.addEventListener("click", getValue)
})

submit.addEventListener("click", calc)

clear.addEventListener("click", () => {
    screen.innerText = "";
    exp = "";
})