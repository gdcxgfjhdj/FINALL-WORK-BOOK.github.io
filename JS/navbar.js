// I use chatGPT to assist in creating and building some code. This includes the scaling of the navigation bar buttons, the frosted background frame, and its transformation animations. I have made improvements and adjustments to the code as necessary

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if(window.scrollY > 20){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled")
    }
})