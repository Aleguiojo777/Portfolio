(function(){
    const canvas = document.getElementById('particles');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = 0, height = 0, particles = [], animationId = null;

    function resize(){
        // size canvas to its layout size (works when canvas is inside hero)
        const rect = canvas.getBoundingClientRect();
        width = canvas.width = Math.max(1, Math.round(rect.width));
        height = canvas.height = Math.max(1, Math.round(rect.height));

        // choose particle count based on canvas width for responsiveness
        let count = 120;
        if(width < 480) count = 30;
        else if(width < 768) count = 60;
        else if(width < 1080) count = 90;
        initParticles(count);
    }

    function rand(min, max){ return Math.random()*(max-min)+min }

    function initParticles(count){
        particles = [];
        for(let i=0;i<count;i++){
            particles.push({
                x: rand(0,width),
                y: rand(0,height),
                vx: rand(-0.3,0.3),
                vy: rand(-0.3,0.3),
                r: rand(0.6,1.6)
            });
        }
    }

    function draw(){
        ctx.clearRect(0,0,width,height);
        // subtle dark overlay for contrast
        // draw particles
        for(const p of particles){
            p.x += p.vx;
            p.y += p.vy;

            if(p.x < 0) p.x = width;
            if(p.x > width) p.x = 0;
            if(p.y < 0) p.y = height;
            if(p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.fillStyle = 'rgba(56,189,248,0.9)';
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fill();
        }

        // connect nearby particles (reduced distance on mobile)
        const maxDist = width < 480 ? 80 : 140;
        for(let i=0;i<particles.length;i++){
            for(let j=i+1;j<particles.length;j++){
                const a = particles[i], b = particles[j];
                const dx = a.x-b.x, dy = a.y-b.y;
                const d = Math.sqrt(dx*dx+dy*dy);
                if(d < maxDist){
                    const alpha = 1 - d/maxDist;
                    ctx.strokeStyle = `rgba(56,189,248,${alpha*0.12})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(a.x,a.y);
                    ctx.lineTo(b.x,b.y);
                    ctx.stroke();
                }
            }
        }
    }

    function loop(){
        draw();
        animationId = requestAnimationFrame(loop);
    }

    // pause when not visible to save battery
    document.addEventListener('visibilitychange', ()=>{
        if(document.hidden){
            if(animationId) cancelAnimationFrame(animationId);
            animationId = null;
        } else if(!animationId){
            loop();
        }
    });

    window.addEventListener('resize', resize);

    // init
    resize();
    loop();
})();
