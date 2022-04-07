//preloader
paceOptions = {
        ajax: true,
        document: true,
        eventLag: false,
};

window.scrollLeft = 0;

//cursor
document.addEventListener('mousemove', e => {
        document.querySelector('#cursor').style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

//register gsap scrolltrigger
gsap.registerPlugin(ScrollTrigger);

//-----------------------------opening------------------------
document.body.style.overflowY = 'hidden';
const opening = gsap.timeline();
const toDown = document.querySelector('#scroll-down');

Pace.on('done', () => {

ScrollTrigger.matchMedia({

"(max-width: 450px)": () => {
opening.to('#preloader-black', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7})
        .to('#preloader-blue', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7,}, '-=1.52')
        .from('.ryrd', { transform: 'translateY(100%)', stagger: .1, ease: Expo.easeInOut, duration: .8, }, '-=.85')
        .to('.ryrd.gone', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .1 })
        .set('#header-title1', { overflowY: 'visible' }, '<')
        .to('.ryrd.stay2', { transform: 'translateX(150%)', scale: 1.75, ease: Expo.easeInOut, duration: .5 }, '-=.5')
        .to('.ryrd.stay1', { transform: 'translateX(180%)', scale: 1.75, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .to('.ryrd.stay4', { transform: 'translateX(462%)', scale: 1.75, ease: Expo.easeInOut, duration: .5 }, '-=.48')
        .to('.ryrd.stay3', { transform: 'translateX(435%)', scale: 1.75, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .from('#name-title', { yPercent: 130, ease: Expo.easeInOut, duration: 1 })
        .from('#profile-box', { scaleY: 0, transformOrigin: 'bottom', ease: Expo.easeInOut, duration: .8 }, '-=.8')
        .to('#blue-block', { yPercent: -120, ease: Expo.easeIn, duration: .6 }, '-=.3')
        .from('.wd', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .01 },'-=.6')
        .from('.line-1', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('.line-2', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('#scroll-down', { opacity: 0, yPercent: -50, duration: .7 }, '<');
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
        .to('#blue-block', { yPercent: -120, ease: Expo.easeIn, duration: .6 }, '-=1.5')
        .from('.line-1', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('.line-2', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('#scroll-down', { opacity: 0, yPercent: -50, duration: .7 }, '<');
}
});     
        document.body.style.overflowY = 'scroll';
        toDown.style.transition = '.2s ease-in';
});     

const mediaQuerySmall = window.matchMedia('(max-width: 450px)');
const mediaQueryMedium = window.matchMedia('(min-width: 451px)');
const mediaQueryBig = window.matchMedia('(min-width: 1025px)');
let currentWindowSize = '';

if(window.innerWidth >= 451) currentWindowSize = 'medium'
else if(window.innerWidth < 451) currentWindowSize = 'small';


window.addEventListener('resize', ()=>{
        if(mediaQueryMedium.matches && currentWindowSize != 'medium') window.location.reload();
        else if(mediaQuerySmall.matches && currentWindowSize != 'small') window.location.reload();
});

toDown.addEventListener('click', () => window.scrollTo(0, 600));

window.addEventListener('scroll', () => { if(window.scrollY > 0) toDown.style.opacity = 0 });

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
const skillsAnimation = gsap.timeline({
        scrollTrigger: {
                trigger: '.skill-box',
                start: 'top 60%',
                toggleClass: {targets: ".skill-box .skill-logo-wrapper svg", className: "animate-svg"},
                toggleActions: 'play none none reverse'
        }
});
skillsAnimation.from('.skill-box .skill-logo-wrapper svg path', {
                        fill: "#00000000",
                }, '+=.45')
skillsAnimation.from('.skill-box .skill-logo-wrapper svg circle', {
                        fill: "#00000000",
                }, '<')
                .to(".skill-box .skill-logo-wrapper svg", {
                        stroke: 'rgba(255,255,255, 0)'
                }, '-=1.15')
                .from('.skill-box .skill-text-wrapper p', {
                        yPercent: 250,
                        duration: 1.2,
                }, '-=1')
                .from('.skill-box .skill-text-wrapper span', {
                        yPercent: 250,
                        duration: 1.2,
                }, '<');

//charming js
//yeah i know.. pasting the library code here look ridiculous, but i try to use it via cdn but it doesn't work. And i'm not installing it from npm because i wanna make this project simple
function charming(
        element,
        {
          tagName = 'span',
          split,
          setClassName = function (index) {
            return 'char' + index
          }
        } = {}
      ) {
        element.normalize()
        let index = 1
        function inject (element) {
          const parentNode = element.parentNode
          const nodeValue = element.nodeValue
          const array = split ? split(nodeValue) : nodeValue.split('')
          array.forEach(function (string) {
            const node = document.createElement(tagName)
            const className = setClassName(index++, string)
            if (className) {
              node.className = className
            }
            node.appendChild(document.createTextNode(string))
            node.setAttribute('aria-hidden', 'true')
            parentNode.insertBefore(node, element)
          })
          if (nodeValue.trim() !== '') {
            parentNode.setAttribute('aria-label', nodeValue)
          }
          parentNode.removeChild(element)
        }
        ;(function traverse (element) {
          // `element` is itself a text node
          if (element.nodeType === 3) {
            return inject(element)
          }
          // `element` has a single child text node
          const childNodes = Array.prototype.slice.call(element.childNodes) // static array of nodes
          const length = childNodes.length
          if (length === 1 && childNodes[0].nodeType === 3) {
            return inject(childNodes[0])
          }
          // `element` has more than one child node
          childNodes.forEach(function (childNode) {
            traverse(childNode)
          })
        })(element)
      };

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
const workContent = document.querySelector('#work-content');

if(window.innerWidth >= 1025){
        workContainer.style.width = `${(80*works.length)+20}vw`;
        workContent.style.width = `${80*works.length}vw`;
}
else if(window.innerWidth < 1025){
        workContainer.style.width = `${(90*works.length)+10}vw`;
        workContent.style.width = `${90*works.length}vw`;
}

ScrollTrigger.matchMedia({
        "(max-width: 1024px)": () => {
                gsap.to('#work-content', {
                        scrollTrigger: {
                                trigger: '#work',
                                start: 'top top',
                                end:`${works.length*100}% top`,
                                pin: true,
                                scrub: .4,
                        }, 
                        transform: `translateX(-${(works.length-1)*90}vw)`
                });
        },
        "(min-width: 1025px)": () => {
                gsap.to('#work-content', {
                        scrollTrigger: {
                                trigger: '#work',
                                start: 'top top',
                                end:`${works.length*150}% top`,
                                pin: true,
                                scrub: .4,
                        }, 
                        transform: `translateX(-${(works.length-1)*80}vw)`
                });
        }
})

//render works display
const renderWorks =  work => {
        let html = `
        <div class="work-display">
                <div class="picture-box" id=${work.id}>
                        <picture>
                                <source media="(max-width: 650px)" srcset=${work.mainImgMobile} />
                                <img src=${work.mainImg} />
                        </picture>
                        <button class="show-project-btn .spb-desktop">
                                <div class="spb-line">
                                        <div class="spb-img">
                                                <img src="img/down.png">
                                        </div>
                                        <p>show project</p>
                                </div>
                        </button>
                </div>
                <div class="block-white-line"></div>
                <h3>${work.name}</h3>
                <p>${work.subName}</p>
                <button class="spb-mobile">
                        <div class="spb-line">
                                <div class="spb-img">
                                        <img src="img/down.png">
                                </div>
                                <p>show project</p>
                        </div>
                </button>
        </div>
        <div class="line line-vertical"></div>
        `;

        const workBox = document.createElement('div');
        workBox.classList.add('work-box');
        workBox.innerHTML = html;

        workContent.prepend(workBox);
}
works.forEach(work => renderWorks(work));

const projImages = document.querySelector('.project-images');

const renderProjImages = (images, id) => {
        let html = `
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
const spbMobile = document.querySelectorAll('.spb-mobile');
const workName = document.querySelector('#work-name');
const workDesc = document.querySelector('#work-desc');
const workLink = document.querySelector('.work-link a');
let currentWorkState;
const textSplit = document.querySelector('#show-work .project-title-box p#work-desc');

const workSlide = i => {
        currentWorkState = works.length-i;
        document.querySelectorAll(`.fullimg-work:not([alt=${works[works.length-1-i].id}])`).forEach(imgs => imgs.parentNode.remove());
        workName.textContent = works[works.length-1-i].name;
        workDesc.innerHTML = works[works.length-1-i].description;
        if(works[works.length-1-i].link != null){
                workLink.parentNode.style.display = 'flex';
                workLink.setAttribute('href', works[works.length-1-i].link);
                
        }
        else{
                workLink.parentNode.style.display = 'none';
        }
        charming(textSplit);
        
        const displayWorkBox = gsap.timeline({paused: true});
        displayWorkBox.from('#show-work .project-title-box h1', { yPercent: 130, ease: Expo.easeOut, duration: 2.5}, '+=.2')
                .from('#show-work .fullimg-close-part',{width: 0, duration: .75, ease: Power1.easeOut}, '-=1.9')
                .from('#show-work .fullimg-close-part.cpart1',{rotation: 0, duration: .5, ease: Power2.easeOut},'-=1.5')
                .from('#show-work .fullimg-close-part.cpart2',{rotation: 0, duration: .5, ease: Power2.easeOut},'<')
                .from('#show-work .project-title-box .line-project-title', { scaleX: 0, transformOrigin: 'left', ease: Expo.easeOut, duration: 1.3}, '-=2')
                .from('#show-work .project-title-box p#work-desc span', { opacity: 0, duration: .02, stagger: .008}, '-=2.25')
                .from('#show-work .project-title-box .work-link', { width: '0px', ease: Expo.easeOut, duration: 1.8}, '<')
                .from('#show-work .project-images .line-8', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeOut, duration: 1.2}, '<')
                .from('#show-work .project-images .pr-image-box', { clipPath: 'inset(0 0 100% 0)' , ease: Power4.easeOut, duration: 1.8, stagger: .2}, '<')
                .from('#show-work .project-images .pr-image-box img', { scale: 1.3 , ease: Expo.easeOut, duration: 1.8, stagger: .2}, '<')
                .from('#show-work .project-title-box .work-link a', { xPercent: -120, ease: Expo.easeOut, duration: 1.8}, '-=2')
                .from('#show-work .project-title-box .work-link img', { xPercent: -120, ease: Expo.easeOut, duration: 1.8}, '-=1.75');

        showWork.style.transform = 'translateX(0%)';
        displayWorkBox.restart();
        document.body.style.overflowY = 'hidden';
}

pictureBox.forEach((pB,i) => pB.addEventListener('click', () => workSlide(i) ));
spbMobile.forEach((spb,i) => spb.addEventListener('click', () => workSlide(i) ));


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
