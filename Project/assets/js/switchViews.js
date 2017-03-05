function showMobileMenu() {
    document.body.style.backgroundColor = "black";
    document.getElementsByClassName("top-menu-nav")[0].style.display = "none";
    document.getElementById("mobile-menu").style.display = "block";
    document.getElementById("btn-close").onclick = function() { hideMobileMenu() };
}

function hideMobileMenu() {
    document.body.style.backgroundColor = "white";
    document.getElementsByClassName("top-menu-nav")[0].style.display = "block";
    document.getElementById("mobile-menu").style.display = "none";
    document.getElementById("mobile-links").style.display = "block";
    document.getElementById("registration").style.display = "none";
}

function showSignUpMenu() {
    document.getElementById("mobile-links").style.display = "none";
    document.getElementById("registration").style.display = "block";
}