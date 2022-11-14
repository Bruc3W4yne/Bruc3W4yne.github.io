const navBar = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".nav-toggle")
const navBars = document.querySelectorAll(".nav-bar")
const body = document.body



navToggle.addEventListener("click", () => {
    const visible = navBar.getAttribute("visible-desktop")
    const visibleMobile = navBar.getAttribute("visible-mobile")
    var width = body.clientWidth;

    body.classList.toggle("no-scroll")

    if (visible === "false" && width >= 1184) {
        navBar.setAttribute("visible-desktop", true)
        console.log(width)
    } else {
        navBar.setAttribute("visible-desktop", false)
    }

    if (visibleMobile === "false" && width <= 1183) {
        navBar.setAttribute("visible-mobile", true)
    } else {
        navBar.setAttribute("visible-mobile", false)
    }
})