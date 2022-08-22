const iconsTheme = document.querySelector("#img-theme");
const instaName = document.querySelector(".instaName")
const myName = document.querySelector(".name");
const projectText = document.querySelector(".h2-projects");

function animation(rotateAnimation) {
    rotateAnimation.style.animation = ""
    setTimeout(() => {
        rotateAnimation.style.animation = "rotate 900ms ease-in-out"
    }, 100)
}

function lightAndDark() {
    animation(iconsTheme)
    const toggle = document.body.classList.toggle("lightMode");
    if (!toggle) {
        instaName.style.color = "#fff"
        myName.style.color = "#fff"
        projectText.style.color = "#fff"
        iconsTheme.src = "./assets/icon-sol.png"
    }

    else {
        instaName.style.color = "#000"
        myName.style.color = "#000"
        projectText.style.color = "#000"
        document.body.classList.add("darkMode")
        iconsTheme.src = "./assets/lua-icon.png"
    }
}
