const sideMenu = document.querySelector('#sideMenu');

function openMenu() {
    console.log('sideMenu', sideMenu);
    // Incorrect usage: sideMenu.computedStyleMap.transform does not exist.
    // Use style.transform instead.
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}
