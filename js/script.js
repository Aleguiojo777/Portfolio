function enterPortfolio(){

    const welcome = document.getElementById('welcomePage');

    const portfolio = document.getElementById('portfolioPage');

    welcome.style.opacity = '0';

    setTimeout(() => {

        welcome.style.display = 'none';

        portfolio.classList.add('entered');

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

});