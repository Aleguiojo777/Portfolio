// particles.js

(function(){

    const canvas =
    document.getElementById('particles');

    if(!canvas) return;

    const ctx =
    canvas.getContext('2d');

    let width;
    let height;

    let particles = [];

    function resize(){

        width =
        canvas.width =
        window.innerWidth;

        height =
        canvas.height =
        window.innerHeight;

        createParticles();
    }

    function createParticles(){

        particles = [];

        for(let i=0;i<80;i++){

            particles.push({

                x:Math.random()*width,
                y:Math.random()*height,

                vx:(Math.random()-0.5)*0.5,
                vy:(Math.random()-0.5)*0.5,

                r:Math.random()*2+1
            });
        }
    }

    function draw(){

        ctx.clearRect(0,0,width,height);

        particles.forEach(p=>{

            p.x += p.vx;
            p.y += p.vy;

            if(p.x<0) p.x=width;
            if(p.x>width) p.x=0;

            if(p.y<0) p.y=height;
            if(p.y>height) p.y=0;

            ctx.beginPath();

            ctx.fillStyle =
            'rgba(56,189,248,0.8)';

            ctx.arc(
                p.x,
                p.y,
                p.r,
                0,
                Math.PI*2
            );

            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener(
        'resize',
        resize
    );

    resize();

    draw();

})();