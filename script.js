function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}

function closeMenu() {
    document.getElementById("mobile-menu").style.right = "-250px";
}
