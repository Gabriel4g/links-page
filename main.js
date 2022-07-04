function animation(rotateAnimation) {
    return rotateAnimation.style.animation = "rotate 900ms ease-in-out"
}

function Modes() {
    const stringModes = ["Light", "Dark"];
    const iconSol = document.querySelector("#sol");
    const iconLua = document.querySelector("#lua");
    let p = document.querySelector(".paragrafo-invisivel");
    const name = document.querySelector(".name");
    const instaName = document.querySelector(".instaName")

    if (p.innerHTML == stringModes[0]) {
        name.style.color = "#0e091b";
        instaName.style.color = "#0e091b"
        document.body.classList.add("lightMode");
        iconSol.style.display = "none";
        iconLua.style.display = "block";
        animation(iconLua);
        p.innerHTML = stringModes[1];
    }

    else if(p.innerHTML == stringModes[1]) {
        name.style.color = "#fff"
        instaName.style.color = "#fff"
        document.body.classList.add("darkMode");
        document.body.classList.remove("lightMode");
        iconLua.style.display = "none";
        iconSol.style.display = "block";
        p.innerHTML = stringModes[0];
        animation(iconSol);
}
}
