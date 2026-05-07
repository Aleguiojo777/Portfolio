// script.js

document.addEventListener('DOMContentLoaded',()=>{

    // WELCOME SCREEN

    const welcome =
    document.getElementById('welcomePage');

    setTimeout(()=>{

        welcome.style.opacity='0';

        setTimeout(()=>{

            welcome.style.display='none';

        },1000);

    },3000);

    // CLOSE MOBILE MENU

    const navLinks =
    document.querySelectorAll('.offcanvas .nav-link');

    const offcanvasElement =
    document.getElementById('mobileMenu');

    navLinks.forEach(link=>{

        link.addEventListener('click',()=>{

            const bsOffcanvas =
            bootstrap.Offcanvas.getInstance(offcanvasElement);

            if(bsOffcanvas){

                bsOffcanvas.hide();
            }
        });
    });

});


// DOWNLOAD RESUME

function forceDownload(){

    const link = document.createElement('a');

    link.href = './Resume/resume-ITRelated.pdf';

    link.download = 'Aljey_Aleguiojo_Resume.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}