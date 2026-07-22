let currentStage = 1;
let starCount = 65;
let musicPlaying = false;

// Yahan apni sabhi photos ke naam likhein jo aapne upload ki hain
const photosList = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
let currentPhotoIdx = 0;

const bgMusic = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
    if (!musicPlaying) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        }).catch(err => console.log("Audio Playback error: ", err));
    } else {
        bgMusic.pause();
        musicPlaying = false;
        musicBtn.innerText = "🎵 Play Music";
        musicBtn.classList.remove('playing');
    }
}

musicBtn.addEventListener('click', toggleMusic);

function startSurpriseWithMusic() {
    nextPage(2);
    if (!musicPlaying) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicBtn.innerText = "⏸ Pause Music";
            musicBtn.classList.add('playing');
        }).catch(err => {
            console.log("Audio play block hui, par surprise chalta rahega: ", err);
        });
    }
}

function initStars() {
    const container = document.querySelector('.stars-container');
    if(!container) return;
    container.innerHTML = '';
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        let size = Math.random() * 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}
initStars();

function nextPage(pageNumber) {
    const currentActive = document.querySelector('.page.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }

    setTimeout(() => {
        let targetPage;
        if (pageNumber === 10) {
            targetPage = document.getElementById('final-page');
        } else {
            targetPage = document.getElementById(`page-${pageNumber}`);
        }
        
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById('final-page').classList.add('active');
        }
    }, 150);
    
    currentStage = pageNumber;
}

function revealIrritate() {
    document.getElementById('q4-btns').classList.add('hide');
    document.getElementById('q4-title').classList.add('hide');
    document.getElementById('q4-reveal').classList.remove('hide');
}

function startCountdown() {
    nextPage(5);
    const counterElement = document.getElementById('countdown-number');
    let count = 3;
    counterElement.innerText = "3️⃣";
    
    let timer = setInterval(() => {
        count--;
        if (count === 2) {
            counterElement.innerText = "2️⃣";
        } else if (count === 1) {
            counterElement.innerText = "1️⃣";
        } else if (count <= 0) {
            clearInterval(timer);
            triggerGrandReveal();
        }
    }, 1000);
}

function triggerGrandReveal() {
    nextPage(6);
    startCanvasFX(5); 
    spawnBalloonsLoop(25);
}

const letterString = `🎉 HAPPY BIRTHDAY BHAIYA 🎉

Happy Birthday! 
Do you know how grateful I am to have you as my Bhaiya? 🤍
Thank you for always being there.
May Allah bless you with happiness, success, good health and endless smiles.
Happy Birthday once again. 💙

| ┌ ┐💗
└ ┘APPY_🎂🎆🎉
┌┐    🄱🄸🅁🅃🄷🄳🄰🅁🎉🎆🌌
└┘. 🤟 🐬
"Officially, you're one year older now... but don't worry, you're still not that old. 😂

"I wish you happiness on this wonderful day! HAPPY BIRTHDAY 🎉🎉
May God Bless you and bring more happiness and success in your life♦#* 🔥🥰
*Happy Birthday*🎂🍰
*Wish You Many Many Happy Return's Of The Day*
**Happy Birthday Wishes**  💖💖💖❥︎♡︎     **HAPPY BIRTHDAY   WishinG Y◯u A *Very* Happy Birthday**
💗وه لمحے تمہارے قدموں میں ہوں💗
**May All Y◯ur *Dreams* C◯me True**🥰
💗خدا وہ سب کچھ تم کو دے 😻
**May Y◯u Have *Always* Smile Like *TOday***💙
💗جو سوچا تم نے اپنے سپنوں میں ہو 🥺-♡︎
•°🎈🥂🍾°•
🤍🫶🏻
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
◦ #💙💙💙═════════🖤🖤🖤 #
┊┊┊┊┊┊┊⇣❥︎.
┊┊┊┊┊┊⇣❥︎
||════♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══||
◦ #💙💙💙═════════🖤🖤🖤 #
┊┊┊┊┊┊┊⇣❥︎.
┊┊┊┊┊┊⇣❥︎
┊┊┊┊┊⇣❥︎
┊┊┊┊⇣❥︎
┊┊┊⇣❥︎
┊┊⇣❥︎
┊⇣❥︎
⇣❥︎
❥︎.      ╭══. ❁ཻུ۪۪. ══╮
***Birthday post***
╰══. ❁ཻུ۪۪. ══╯
*#Birthday_Celebration*
🎂🎂🎂🎂🎂🎂🎂🎂
💠💠💠💠💠💠💠💠💠💠💠💠💠💠
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
***Happy Birthda*y**
*╚══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╝*
💮💮💮💮💮💮💮💮💮💮💮💮💮💮
╭══█ ❃ █══╮
***Happy birthday***
🌹 
╰══█ ❃ █══╯
💞🍃💨💗(&)🔏💞💗💗💗💗💗💗
┊┊┊┊.
┊┊┊💞.
┊┊💗.
┊💞⃠.
💗.
💮💮💮💮💮💮💮💮💮💮💮💮💮💮
🌹❣️▬ ▬▬💗 ♦ 💗▬▬ ▬❣️🌹
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
💮💮💮💮💮💮💮💮💮💮💮💮💮💮
🎂🎂🎂🎂🎂🎂🎂
🎂🎂🎂🎂🎂🎂🎂🎂
*╚══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╝*
🌹❣️▬ ▬▬💗 ♦ 💗▬▬ ▬❣️🌹
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
◦ #💙💙💙═════════🖤🖤🖤 #
┊┊┊┊┊┊┊⇣❥︎.
┊┊┊┊┊┊⇣❥︎
╭══. ❁ཻུ۪۪. ══╮
***Happy birthday***
╰══. ❁ཻུ۪۪. ══╯
🎂🎂      🎂🎂
💠💠💠💠💠💠💠💠💠💠💠💠💠💠
╭───────══❁ཻུ۪۪══───────╮
🄷 🄰 🄿 🄿 🅈
🄱 🄷 🄰 🄿 🅈 🄰
╰───────══❁ཻུ۪۪══───────╯
👈. ¸.·´¯·.´¯·.¸¸.·´¯·.¸ ( ☂️❄️      ) #*Happy* 💞    #🌹🌹💚 ◦ ¸.·´¯·.´¯·.¸¸.·´¯·.¸ ☂️
(            ) #*Birthday*
💞    #🌹🌹💚
#💙💙💙═════════🖤🖤🖤 #
¸.·´¯·.´¯·.¸❀ ¸.·´¯·.´¯·.¸
❀    ☕☕☕          ➸➸➸➸✿➸➸➸➸
💐.¸¸.·´¯`·.¸☕☕☕
✨🍒✨🍒✨🍒
┊┊┊┊┊┊┊⇣❥︎
┊┊┊┊┊┊⇣❥︎
┊┊┊┊┊⇣❥︎
┊┊┊┊⇣❥︎
┊┊┊⇣❥︎
┊┊⇣❥︎
┊⇣❥︎
⇣❥︎ *🌹🌹*
⚟. ♦♦♦♦♦♦♦♦⚫♦
❥︎$$$$$$$$$$
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
*#Happy_Birthday*
*╔══♦•°୨୧° ᵒ ᵒ°୨୧°•♦ ══╗*
*°୨୧°•♦ ══╝*
Happy birthdaY💞🥀🌹🎂💖💖💖💖💖 💖💖💖💖💖💖💖
کروڑوں دعاؤں اور خوشیوں کے
لازوال خزانے کے ساتھ
آپ کی سالگرہ کا اور ہر آنے ola din
خوشیوں ،رحمتوں، اور برکتوں wala ho
ربِ کائنات آپ کو ڈھیروں، کامیابیاں، اور خوشیاں نصیب کرے...😍
💗آمــیـن یا ربـــ العالمـیــن💗
😍ہمیشہ ہنستےمسکراتےرہیں
💗💞جیو ہزاروں سال 💞💗
Happy birthday to you
🎂🖤😍
🎈
┌┐APPY_🎂🎆🎉
└┘ 🄱🄸🅁🅃🄷🄳🄰🅁🎉🎆. @😍 Wait 🎂🎂💖💖
#happybirthdaywishes💗💖#HAPP we_𝓑𝓲𝓡📳𝓗𝓓aY
💖💖💖💖💖💖
💖🎂🎂
🎂🎂🎂🍰🍰🍫🍫🍰
❣❣❣❣❣❣❣❣
Happy Birthday 💖💖💖
🎂..🧡🌹🌹🌹🌹🌹🌹🌹🌹
Wish you a very happy and beautiful long life
ALLAH bless you all happiness in life
Ameen ✨...😻🌹🌹😍😍😍😍..`;

function startSlideshowPage() {
    nextPage(8);
    currentPhotoIdx = 0;
    updateSlideshowImage();
}

function changePicture(direction) {
    currentPhotoIdx += direction;
    // Agar limits cross hon toh wapas rotate karein
    if (currentPhotoIdx >= photosList.length) {
        currentPhotoIdx = 0;
    } else if (currentPhotoIdx < 0) {
        currentPhotoIdx = photosList.length - 1;
    }
    updateSlideshowImage();
}

function updateSlideshowImage() {
    const imgElement = document.getElementById('slideshow-img');
    if (imgElement && photosList.length > 0) {
        imgElement.style.opacity = '0.3';
        setTimeout(() => {
            imgElement.src = photosList[currentPhotoIdx];
            imgElement.style.opacity = '1';
        }, 150);
    }
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'page-7' && mutation.target.classList.contains('active')) {
            executeTypingEffect();
        }
    });
});
observer.observe(document.getElementById('page-7'), { attributes: true, attributeFilter: ['class'] });

function executeTypingEffect() {
    const container = document.getElementById('typing-text');
    const actionBtn = document.getElementById('letter-continue-btn');
    const scrollBox = document.querySelector('.letter-box');
    if(!container) return;
    container.innerText = "";
    if(actionBtn) actionBtn.classList.add('hide');
    
    let idx = 0;
    function typeChar() {
        if (idx < letterString.length) {
            container.innerText += letterString.charAt(idx);
            idx++;
            if (scrollBox) scrollBox.scrollTop = scrollBox.scrollHeight; 
            setTimeout(typeChar, 20);
        } else {
            if(actionBtn) actionBtn.remove('hide');
            if(actionBtn) actionBtn.classList.remove('hide');
        }
    }
    setTimeout(typeChar, 400);
}

function goToCakePage() {
    const candle = document.getElementById('cake-candle');
    const blowBtn = document.getElementById('blow-btn');
    if (candle) candle.classList.remove('blown');
    if (blowBtn) {
        blowBtn.removeAttribute('disabled');
        blowBtn.innerText = "🕯 Blow Candle";
    }
    nextPage(9);
}

function blowCandle() {
    const candle = document.getElementById('cake-candle');
    const blowBtn = document.getElementById('blow-btn');
    if (candle) candle.classList.add('blown');
    if (blowBtn) {
        blowBtn.setAttribute('disabled', 'true');
        blowBtn.innerText = "Blown! 💖";
    }
    
    startCanvasFX(8);
    
    setTimeout(() => {
        nextPage(10); 
    }, 2500);
}

function restartSurprise() {
    fxActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('q4-reveal').classList.add('hide');
    document.getElementById('q4-btns').classList.remove('yes', 'hide');
    document.getElementById('q4-title').classList.remove('hide');
    nextPage(1);
}

/* CANVAS PARTICLES ENGINE */
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let fxActive = false;
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor(x, y, color, type) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;
        this.radius = type === 'firework' ? Math.random() * 3 + 1 : Math.random() * 4 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = type === 'firework' ? Math.random() * 6 + 2 : Math.random() * 3 + 1;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.gravity = type === 'firework' ? 0.12 : 0.06;
        this.opacity = 1;
        this.fade = Math.random() * 0.015 + 0.01;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += this.gravity;
        if(this.type === 'confetti') {
            this.vx += Math.sin(this.y / 20) * 0.05;
            this.rotation += this.rotationSpeed;
        }
        this.opacity -= this.fade;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        if(this.type === 'firework') {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 1.5);
        }
        ctx.restore();
    }
}

function spawnFireworkBurst() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height * 0.5) + canvas.height * 0.15;
    const hues = ['#ffd700', '#aa7c11', '#38bdf8', '#ffffff', '#f43f5e'];
    const selectedColor = hues[Math.floor(Math.random() * hues.length)];
    for(let i = 0; i < 60; i++) {
        particles.push(new Particle(x, y, selectedColor, 'firework'));
    }
}

function spawnConfettiRain() {
    const colors = ['#ffd700', '#aa7c11', '#38bdf8', '#ffffff', '#e11d48'];
    if(particles.length < 200) {
        for(let i = 0; i < 5; i++) {
            particles.push(new Particle(Math.random() * canvas.width, -10, colors[Math.floor(Math.random() * colors.length)], 'confetti'));
        }
    }
}

function renderFXLoop() {
    if(!fxActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spawnConfettiRain();
    if(Math.random() < 0.04) { spawnFireworkBurst(); }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].opacity <= 0) { particles.splice(i, 1); } 
        else { particles[i].draw(); }
    }
    requestAnimationFrame(renderFXLoop);
}

function startCanvasFX(durationSeconds) {
    fxActive = true;
    particles = [];
    renderFXLoop();
    setTimeout(() => {
        fxActive = false;
        setTimeout(() => { ctx.clearRect(0, 0, canvas.width, canvas.height); }, 100);
    }, durationSeconds * 1000);
}

function spawnBalloonsLoop(count) {
    const container = document.getElementById('balloon-container');
    if (!container) return;
    container.innerHTML = '';
    const colors = ['rgba(212,175,55,0.7)', 'rgba(56,189,248,0.7)', 'rgba(255,215,0,0.7)', 'rgba(244,63,94,0.7)'];
    for(let i=0; i<count; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 95 + '%';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = (Math.random() * 6) + 's';
        balloon.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(balloon);
    }
}

