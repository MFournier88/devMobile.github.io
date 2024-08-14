// Script to handle toggling of the vertical navbar and offcanvas menu
document.addEventListener('DOMContentLoaded', function() {
    const offcanvasToggle = document.querySelector('[data-bs-target="#offcanvasDarkNavbarRight"]');
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

function toggleVisibilityById(id){
    
    const element = document.getElementById(id);

    element.classList.toggle("hidden");
}


// JavaScript to update active class on click
function focusOnNavbar(id){
    document.addEventListener("DOMContentLoaded", function() {
        var checkNavbarLoaded = setInterval(function() {
            var navbar = document.querySelector('.vertical-navbar');
            if (navbar) {
                clearInterval(checkNavbarLoaded); // Stop checking once the navbar is found
                
                // Your logic here
                var links = navbar.querySelectorAll('.nav-link');
                
    
                links.forEach(function(item) {
                    item.classList.remove('active');
                    if(item.id == id){
                        item.classList.add('active')
                    }
                });
                
                    
            }
        }, 100); // Check every 100ms if the navbar is loaded
    });
}


    

