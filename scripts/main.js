// Script to handle toggling of the vertical navbar and offcanvas menu
document.addEventListener('DOMContentLoaded', function() {
    const offcanvasToggle = document.querySelector('[data-bs-target="#offcanvasDarkNavbarRight"]');
    const verticalNavbar = document.getElementById('verticalNavbar');
    const offcanvasMenu = new bootstrap.Offcanvas(document.getElementById('offcanvasDarkNavbarRight'));

    offcanvasToggle.addEventListener('click', function() {
        if (!offcanvasMenu.isShown) {
            offcanvasMenu.show();
        } else {
            offcanvasMenu.hide();
        }
    });

    // Close offcanvas menu when a link inside it is clicked
    const offcanvasLinks = document.querySelectorAll('#offcanvasDarkNavbarRight .nav-link');
    offcanvasLinks.forEach(link => {
        link.addEventListener('click', function() {
            offcanvasMenu.hide();
        });
    });
});
includeHTML();
Prism.highlightAll();