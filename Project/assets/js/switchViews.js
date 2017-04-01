// Switch between Mobile menu and Desktop menu
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

// Dropdown menu switch
//Toggle between two classes for a <div> element:
function showDropdownMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var index = 0; index < dropdowns.length; index++) {
            var openDropdown = dropdowns[index];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}