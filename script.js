//preloader
paceOptions = {
        ajax: true,
        document: true,
        eventLag: false,
};

//cursor
document.addEventListener('mousemove', e => {
        document.querySelector('#cursor').style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

//register gsap scrolltrigger
gsap.registerPlugin(ScrollTrigger);

//-----------------------------opening------------------------
document.body.style.overflowY = 'hidden';
const opening = gsap.timeline();

Pace.on('done', () => {

ScrollTrigger.matchMedia({

"(max-width: 450px)": () => {
opening.to('#preloader-black', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7})
        .to('#preloader-blue', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7,}, '-=1.52')
        .from('.ryrd', { transform: 'translateY(100%)', stagger: .1, ease: Expo.easeInOut, duration: .8, }, '-=.85')
        .to('.ryrd.gone', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .1 })
        .to('.ryrd.stay2', { transform: 'translateX(125%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.5')
        .to('.ryrd.stay1', { transform: 'translateX(165%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .to('.ryrd.stay4', { transform: 'translateX(455%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.48')
        .to('.ryrd.stay3', { transform: 'translateX(440%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .from('#name-title', { yPercent: 130, ease: Expo.easeInOut, duration: 1 })
        .from('#profile-box', { scaleY: 0, transformOrigin: 'bottom', ease: Expo.easeInOut, duration: .8 }, '-=.8')
        .to('#blue-block', { yPercent: -120, ease: Expo.easeInOut, duration: .6 })
        .from('.wd', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .01 },'-=.6')
        .from('.line-1', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('.line-2', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('#scroll-down', { opacity: 0, yPercent: -50, duration: 1 }, '<');
},
"(min-width: 451px)": () => {
        opening.to('#preloader-black', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7})
        .to('#preloader-blue', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7,}, '-=1.52')
        .from('.ryrd', { transform: 'translateY(100%)', stagger: .1, ease: Expo.easeInOut, duration: .8, }, '-=.85')
        .to('.ryrd.gone', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .2 })
        .to('.ryrd.stay1', { transform: 'translateX(-300%)', ease: Expo.easeInOut, duration: .5 }, '-=.6')
        .to('.ryrd.stay2', { transform: 'translateX(-305%)', ease: Expo.easeInOut, duration: .5 }, '-=.5')
        .from('.wd', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .01 })
        .from('#profile-box', { scaleY: 0, transformOrigin: 'bottom', ease: Expo.easeInOut, duration: .6 }, '<')
        .to('#blue-block', { yPercent: -120, ease: Expo.easeInOut, duration: .6 }, '-=.8')
        .from('.line-1', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('.line-2', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('#scroll-down', { opacity: 0, yPercent: -50, duration: 1 }, '<');
}
});     
        document.body.style.overflowY = 'scroll';
});     

const mediaQuerySmall = window.matchMedia('(max-width: 450px)');
const mediaQueryMedium = window.matchMedia('(min-width: 451px)');
const mediaQueryBig = window.matchMedia('(min-width: 1025px)');
let currentWindowSize = '';

if(window.innerWidth >= 451){
        currentWindowSize = 'medium';
}
else if(window.innerWidth < 451){
        currentWindowSize = 'small';
}

window.addEventListener('resize', ()=>{
        if(mediaQueryMedium.matches && currentWindowSize != 'medium'){
                window.location.reload();
        }
        else if(mediaQuerySmall.matches && currentWindowSize != 'small'){
                window.location.reload();
        }        
});

const toDown = document.querySelector('#scroll-down');
toDown.addEventListener('click', () => {
        window.scrollTo(0, 600);
})

window.addEventListener('scroll', () => {
        window.scrollY > 0 ? toDown.style.display = 'none' : null
})

//progressbar
const progressbar = document.querySelector("#progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
        let progress = (window.pageYOffset/ totalHeight) * 100;
        progressbar.style.height = `${progress}%`;
}

const s1 = document.querySelector('#header-title1');
const m1 = ['e','i','d',' ','a','n','n','a','w',' ','i'];
const hm = document.querySelector('#hm');
const hmp = document.querySelector('#hmp');
let lastClick = 0;

const show = arr => {
        let str = arr.reverse().join('');
        hm.style.display = 'block';
        hmp.innerHTML = str;
        setTimeout(() => {
                hm.style.display = 'none';
                hmp.innerHTML = '';
        }, 10);
}

const showMobile = (e, arr) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        const time_between_taps = 200;
        if (time - lastClick < time_between_taps) {
                show([...arr]);
        }
        lastClick = time;
}

s1.addEventListener('dblclick', () => show([...m1]));
s1.addEventListener('touchstart', () => showMobile(e, [...m1]));

//-----------------------------about----------------------------
ScrollTrigger.matchMedia({
"(max-width: 450px)": () => {
        gsap.to('#profile-box', {
                yPercent: -55,
                scrollTrigger: {
                        trigger: '#profile-box',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                }
        });
},

"(min-width: 1025px)": () => {
        ScrollTrigger.create({
                trigger: '#about--title',
                start: 'top top',
                end: '170% bottom',
                pin: true,
        });
}
});

//my name - about
gsap.from('.about-anim', {
        scrollTrigger: {
                trigger: '#about-name',
                start: 'top 95%',
                toggleActions: 'play none none reverse'
        },
        xPercent: -120,
        ease: Expo.easeOut,
        duration: 3.7,
        stagger: .5
});

//about text
const aboutTxt = gsap.utils.toArray('.about-txt');
const aboutTxtHigh = gsap.utils.toArray('.about-txt-highlight');

aboutTxt.forEach(text => {
        gsap.from(text, {
                scrollTrigger: {
                        trigger: text,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                },
                transform: 'translateY(120%)',
                ease: Expo.easeOut,
                duration: 5
        })
});

aboutTxtHigh.forEach(text => {
        gsap.from(text, {
                scrollTrigger: {
                        trigger: text,
                        start: 'center 85%',
                        toggleActions: 'play none none reverse'
                },
                transform: 'translateX(-120%)',
                ease: Expo.easeOut,
                duration: 3.5     
        })
});

//about img
gsap.from('#about--img img', {
        scrollTrigger: {
                trigger: '#about--img',
                start: 'top bottom',
                end: 'bottom 20%',
                scrub: 1
        },
        transform: 'scale(1.2)'
});

gsap.to('#about-txt-img1', {
        scrollTrigger: {
                trigger: '#about-txt-img1',
                start: 'top bottom',
                end: '200% top',
                scrub: .6
        },
        yPercent: 50
});
gsap.to('#about-txt-img2', {
        scrollTrigger: {
                trigger: '#about-txt-img2',
                start: 'top bottom',
                end: 'top top',
                scrub: .6
        },
        yPercent: -90
});

//skills
gsap.from('.skill-box', {
        scrollTrigger: {
                trigger: '.skill-box',
                start: 'top 78%',
                toggleActions: 'play none none reverse'
        },
        opacity: 0,
        yPercent: 50,
        ease: Expo.easeIn,
        duration: .75,
        stagger: .15,
});

//--------------------------------work----------------------------
const works = [
        {
            id : "work1",
            name : "Survei Kepuasan Layanan Masyarakat",
            subName : "Pengadilan Negeri Banjarmasin Kelas 1A",
            description : "this web application is created to automate service satisfaction survey at Banjarmasin District Court who previously calculated manually. this Web App is hosted in Banjarmasin District Court local server, so this web can't accessed online. but here some screenshot of this web app.",
            mainImg : "img/work/pengadilan/pengadilan1.jpg",
            mainImgMobile : "img/work/pengadilan/pengadilan1-2.jpg",
            link : null,
            imgs : [
                "img/work/pengadilan/pengadilan1.jpg",
                "img/work/pengadilan/pengadilan7.jpg",
                "img/work/pengadilan/pengadilan2.jpg",
                "img/work/pengadilan/pengadilan3.jpg",
                "img/work/pengadilan/pengadilan4.jpg",
                "img/work/pengadilan/pengadilan6.jpg"
            ]
        },
        {
            id : "work2",
            name : "Stylish Wear",
            subName : "Dummy Project",
            description : "stylish wear is a dummy website showing few information about clothes.<br>made with :<br>- HTML, CSS, Javascript<br>- Swiper.js<br>- Pace.js<br>- GSAP",
            mainImg : "img/work/sw/sw2.jpg",
            mainImgMobile : "img/work/sw/sw5.jpg",
            link : "https://stylish-wear.netlify.app",
            imgs : [
                "img/work/sw/sw1.jpg",
                "img/work/sw/sw2.jpg",
                "img/work/sw/sw3.jpg",
            ]
        },
    ];

const workContainer = document.querySelector('#work');

if(mediaQueryBig.matches){
        workContainer.style.height = `${(100*works.length)+50}vh`;
}
else if(mediaQuerySmall.matches){
        workContainer.style.height = `${(50*works.length)+30}vh`;
}

ScrollTrigger.matchMedia({
        "(max-width: 450px)": () => {
                ScrollTrigger.create({
                        trigger: '#work-title',
                        start: 'top top',
                        end: `${(50*works.length)+30}% bottom`,
                        pin: true,
                });
        },
        "(min-width: 1025px)": () => {
                ScrollTrigger.create({
                        trigger: '#work-title',
                        start: 'top top',
                        end: `${(100*works.length)+50}% bottom`,
                        pin: true,
                });
        }
});

//render works display
const workContent = document.querySelector('#work-content');
const renderWorks =  work => {
        html = `
        <div class="work-display">
                <div class="picture-box" id=${work.id}>
                        <picture>
                                <source media="(max-width: 650px)" srcset=${work.mainImgMobile} />
                                <img src=${work.mainImg} />
                        </picture>
                        <div class="show-project-btn">
                                <div class="spb-line">
                                        <div class="spb-img">
                                                <img src="img/down.png">
                                        </div>
                                        <p>show project</p>
                                </div>
                        </div>
                </div>
                <div class="block-white-line"></div>
                <h3>${work.name}</h3>
                <p>${work.subName}</p>
        </div>
        <div class="line line-6"></div>
        `;

        const workBox = document.createElement('div');
        workBox.classList.add('work-box');
        workBox.innerHTML = html;

        workContent.prepend(workBox);
}
works.forEach(work => renderWorks(work));

const projImages = document.querySelector('.project-images');

const renderProjImages = (images, id) => {
        html = `
              <div class="fullimg-work" alt="${id}">
                <img src=${images}>
              </div>
        `
        const prImgBox = document.createElement('div');
        prImgBox.classList.add('pr-image-box');
        prImgBox.innerHTML = html;

        projImages.append(prImgBox);
}

works.forEach(work => {
        work.imgs.forEach(img => renderProjImages(img, work.id));
});

//show full work    
const showWork = document.querySelector('#show-work');
const pictureBox = document.querySelectorAll('.picture-box');
const workName = document.querySelector('#work-name');
const workDesc = document.querySelector('#work-desc');
const workLink = document.querySelector('.work-link a');
let currentWorkState;

pictureBox.forEach((pB,i) => pB.addEventListener('click', () => {
        currentWorkState = works.length-i;
        document.querySelectorAll(`.fullimg-work:not([alt=${works[works.length-1-i].id}])`).forEach(imgs => imgs.parentNode.remove());
        workName.textContent = works[works.length-1-i].name;
        workDesc.innerHTML = works[works.length-1-i].description;
        if(works[works.length-1-i].link != null){
                workLink.parentNode.style.display = 'grid';
                workLink.setAttribute('href', works[works.length-1-i].link);
        }
        else{
                workLink.parentNode.style.display = 'none';
        }
        
        const displayWorkBox = gsap.timeline({paused: true});
        displayWorkBox.from('#show-work .project-title-box h1', { opacity: 0, transform: 'translateY(120%)', ease: Expo.easeOut, duration: 2.5, delay: .35})
                .from('#show-work .fullimg-close-part',{width: 0, duration: .75, ease: Power2.easeOut}, '-=1.9')
                .from('#show-work .fullimg-close-part.cpart1',{rotation: 0, duration: .5, ease: Power2.easeOut},'-=1.5')
                .from('#show-work .fullimg-close-part.cpart2',{rotation: 0, duration: .5, ease: Power2.easeOut},'<')
                .from('#show-work .project-title-box .line-project-title', { scaleX: 0, transformOrigin: 'left', ease: Expo.easeOut, duration: 1}, '-=2.25')
                .from('#show-work .project-title-box p#work-desc', { opacity: 0, transform: 'translateY(40%)', ease: Expo.easeOut, duration: 1.6}, '-=2.25')
                .from('#show-work .project-title-box .work-link', { opacity: 0, yPercent: 90 , ease: Expo.easeOut, duration: 1.8}, '-=2.05')
                .from('#show-work .project-images .line-8', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeOut, duration: 1.2}, '-=2.25')
                .from('#show-work .project-images .pr-image-box', { clipPath: 'inset(0 0 100% 0)' , ease: Power4.easeOut, duration: 1.8, stagger: .2}, '-=2.2')
                .from('#show-work .project-images .pr-image-box img', { scale: 1.3 , ease: Expo.easeOut, duration: 1.8, stagger: .2}, '<');

        showWork.style.transform = 'translateX(0%)';
        displayWorkBox.restart();
        document.body.style.overflowY = 'hidden';
}));


document.querySelector('#work-close').addEventListener('click', () => {
        showWork.style.transform = 'translateX(-100%)';
        setTimeout(() => {
                document.querySelectorAll(`.fullimg-work[alt=${works[currentWorkState-1].id}]`).forEach(imgs => imgs.parentNode.remove());
                works.forEach(work => {
                        work.imgs.forEach(img => renderProjImages(img, work.id));
                });
        }, 500);
        document.body.style.overflowY = 'scroll';
});


//-------------------------------footer----------------------------
gsap.from('#footer #img-footer', {
        scrollTrigger: {
                trigger: '#footer',
                start: 'top bottom',
                end: 'top 4%',
                scrub: 2.5
        },scale: 1.25
});

gsap.from('.footer-social', {
        scrollTrigger: {
                trigger: '#socials',
                start: 'top bottom',
                toggleActions: 'play none none reverse'
        },
        opacity: 0,
        yPercent: 50,
        ease: Expo.easeIn,
        duration: 1.5,
        stagger: .1
},'-=1.2');
