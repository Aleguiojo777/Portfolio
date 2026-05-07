function enterPortfolio(){

    const welcome = document.getElementById('welcomePage');

    const portfolio = document.getElementById('portfolioPage');

    const navbar = document.querySelector('.navbar');

    welcome.style.opacity = '0';

    setTimeout(() => {

        welcome.style.display = 'none';
        welcome.classList.add('hidden');

        portfolio.classList.add('entered');

        // Show navbar after welcome fades
        if (navbar) {
            navbar.classList.add('show');
        }

    },1000);
}

/* SECTION ANIMATION */

function revealSections(){

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry)=>{

            if(entry.isIntersecting){

                entry.target.classList.add('in-view');

            }

        });

    },{
        threshold:0.2
    });

    sections.forEach((section)=>{
        observer.observe(section);
    });
}

/* AUTO START */

document.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        enterPortfolio();

        revealSections();

    },3000);

    // Close offcanvas menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.offcanvas .nav-link');
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Use Bootstrap's offcanvas API to hide
            if (offcanvasElement && window.bootstrap) {
                const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
                bsOffcanvas.hide();
            }
        });
    });
});