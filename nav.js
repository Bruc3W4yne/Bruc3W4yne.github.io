const navBar = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".nav-toggle")
const navBars = document.querySelectorAll(".nav-bar")
const navCircle = document.querySelector(".menu-circle")
const navCircleBig = document.querySelector(".big")
const listItem = document.querySelectorAll('li')
const body = document.body




navToggle.addEventListener("click", () => {
    const visible = navBar.getAttribute("visible-desktop")
    const visibleMobile = navBar.getAttribute("visible-mobile")
    var width = body.clientWidth;

    body.classList.toggle("no-scroll")
    
    listItem.forEach(list => list.classList.toggle("opacity"))

    navBars.forEach(element => element.classList.toggle("nav-close"))

    
    
    if (visible === "false" && width >= 1184) {
        navBar.setAttribute("visible-desktop", true)
        navCircle.classList.toggle("animate-circle")
        navCircleBig.classList.toggle("animate-circle-big")
    } else if(width >= 1184){
        navBar.setAttribute("visible-desktop", false)
        navCircle.classList.toggle("animate-circle")
        navCircleBig.classList.toggle("animate-circle-big")
    }

    if (visibleMobile === "false" && width <= 1183) {
        navBar.setAttribute("visible-mobile", true)
    } else {
        navBar.setAttribute("visible-mobile", false)
    }
})