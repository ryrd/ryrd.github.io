//preloader
paceOptions = {
        ajax: true,
        document: true,
        eventLag: false,
};

//cursor
var cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

//gsap
gsap.registerPlugin(ScrollTrigger);

//opening
document.body.style.overflowY = 'hidden';
var opening = gsap.timeline();

const styles = ['color: #eeeeee','background: #101010','font-family: courier','font-size: 13px','padding: 15px','border: 4px solid #000875'].join(';');
console.log('%cRefresh the page when you open device mode/change viewport width. (it\'s GSAP bug and i don\'t know how to fix it yet 🙃)', styles);

Pace.on('done', function(){

ScrollTrigger.matchMedia({

"(max-width: 450px)": function(){
opening.to('#preloader-black', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7})
        .to('#preloader-blue', {yPercent: -110, ease: Expo.easeInOut, duration: 1.7,}, '-=1.52')
        .from('.ryrd', { transform: 'translateY(100%)', stagger: .1, ease: Expo.easeInOut, duration: .8, }, '-=.85')
        .to('.ryrd.gone', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .1 })
        .to('.ryrd.stay2', { transform: 'translateX(130%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.5')
        .to('.ryrd.stay1', { transform: 'translateX(160%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .to('.ryrd.stay4', { transform: 'translateX(430%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.48')
        .to('.ryrd.stay3', { transform: 'translateX(410%)', scale: 1.5, ease: Expo.easeInOut, duration: .5 }, '-=.46')
        .from('#name-title', { yPercent: 130, ease: Expo.easeInOut, duration: 1 })
        .from('#profile-box', { scaleY: 0, transformOrigin: 'bottom', ease: Expo.easeInOut, duration: .8 }, '-=.8')
        .to('#blue-block', { yPercent: -120, ease: Expo.easeInOut, duration: .6 })
        .from('.wd', { opacity: 0, stagger: .1, ease: Expo.easeIn, duration: .01 },'-=.6')
        .from('.line-1', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('.line-2', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeInOut, duration: 1 }, '<')
        .from('#scroll-down', { opacity: 0, yPercent: -50, duration: 1 }, '<');
},
"(min-width: 451px)": function(){
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

let s1 = document.getElementById('header-title1');
let s2 = document.getElementById('about-rr');
let s3 = document.getElementById('rr');

let lastClick = 0;

s1.addEventListener('dblclick', show1);
s1.addEventListener('touchstart', function(e) {
  e.preventDefault();
  let date = new Date();
  let time = date.getTime();
  const time_between_taps = 200;
  if (time - lastClick < time_between_taps) {
        show1();
  }
  lastClick = time;
});

//about
ScrollTrigger.matchMedia({

"(max-width: 450px)": function(){
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


"(min-width: 1025px)": function(){
        ScrollTrigger.create({
                trigger: '#about--title',
                start: 'top top',
                end: '170% bottom',
                pin: true,
        });
        ScrollTrigger.create({
                trigger: '#work-title',
                start: 'top top',
                end: '150% bottom',
                pin: true,
        });
},
});

var m1 = ['?','l','l','a',' ','t','a',' ','m','e','h','t',' ','p','l','e','h',' ','t','\'','n','a','c',' ','u','o','y',' ','d','n','a',' ','g','n','i','y','d',
          ,' ','e','r','a','c',' ','u','o','y',' ','e','n','o','e','m','o','s',' ','n','e','h','w',' ','e','k','i','l',' ','l','e','e','f',' ','t','i',' ','w','o','h'];

//my name - about
gsap.from('.about-anim', {
        scrollTrigger: {
                trigger: '#about-name',
                start: 'top 95%',
                toggleActions: 'play none none reverse'
        },
        xPercent: -120,
        ease: Expo.easeOut,
        duration: 2,
        stagger: .5
});

function show2(){
        let rts = m2.reverse();
        let str = rts.join('');
        document.getElementById('hm').style.display = 'block';
        document.getElementById("hmp").innerHTML = str;
        setTimeout(
                function(){
                        document.getElementById('hm').style.display = 'none';
                        document.getElementById("hmp").innerHTML = '';
                        rts = m2.reverse();
                }
        ,10);
};


//about text
gsap.from('.about-box-reveal #about-txt-1', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-1',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateY(120%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-2', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-2',
                start: 'bottom 73%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateY(120%)',
        ease: Expo.easeOut,
        duration: 2
});
s2.addEventListener('dblclick', show2);
s2.addEventListener('touchstart', function(e) {
  e.preventDefault();
  let date = new Date();
  let time = date.getTime();
  const time_between_taps = 200;
  if (time - lastClick < time_between_taps) {
        show2();
  }
  lastClick = time;
});
gsap.from('.about-box-reveal #about-txt-3', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-3',
                start: 'bottom 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateY(120%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-4', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-4',
                start: 'center 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateX(-110%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-5', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-5',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateY(120%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-6', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-6',
                start: 'center 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateX(-150%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-7', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-7',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateY(120%)',
        ease: Expo.easeOut,
        duration: 2
});
gsap.from('.about-box-reveal #about-txt-8', {
        scrollTrigger: {
                trigger: '.about-box-reveal #about-txt-8',
                start: 'center 70%',
                toggleActions: 'play none none reverse'
        },
        transform: 'translateX(-150%)',
        ease: Expo.easeOut,
        duration: 2
});


function show3(){
        let rts = m3.reverse();
        let str = rts.join('');
        document.getElementById('hm').style.display = 'block';
        document.getElementById("hmp").innerHTML = str;
        setTimeout(
                function(){
                        document.getElementById('hm').style.display = 'none';
                        document.getElementById("hmp").innerHTML = '';
                        rts = m3.reverse();
                }
        ,10);
};


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


function show1(){
        let rts = m1.reverse();
        let str = rts.join('');
        document.getElementById('hm').style.display = 'block';
        document.getElementById("hmp").innerHTML = str;
        setTimeout(
                function(){
                        document.getElementById('hm').style.display = 'none';
                        document.getElementById("hmp").innerHTML = '';
                        rts = m1.reverse();
                }
        ,10);
};

var m3 = ['e','n','o','l','a',' ','o','t',' ','t','n','a','w',' ','i',' ','y','h','w',' ','s','\'','t','a','h','t'];

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



s3.addEventListener('dblclick', show3);
s3.addEventListener('touchstart', function(e) {
  if (e.cancelable) {
          e.preventDefault();
  }
  let date = new Date();
  let time = date.getTime();
  const time_between_taps = 200;
  if (time - lastClick < time_between_taps) {
        show3();
  }
  lastClick = time;
});

var sm = ['e','r','e','h',' ','e','g','a','s','s','e','m',' ','n','e','d','d','i','h',' ','e','e','s',' ','a','n','n','a','w',' ','t','\'','n','o','d',' ','u','o','y'];
//skills
gsap.from('.skill-box', {
        scrollTrigger: {
                trigger: '#skill',
                start: 'top 77%',
                toggleActions: 'play none none reverse'
        },
        opacity: 0,
        yPercent: 50,
        ease: Expo.easeIn,
        duration: .75,
        stagger: .15
});

var m2 = ['e','m',' ','d','e','z','i','t','a','m','u','a','r','t',' ','t','i'];

//work
//work-district survei
let work = gsap.timeline({paused: true});
work.from('#district-survey .project-title-box h1', { opacity: 0, transform: 'translateY(120%)', ease: Expo.easeOut, duration: 2.5, delay: .5})
    .from('#district-survey .project-title-box h2', { opacity: 0, transform: 'translateY(120%)', ease: Expo.easeOut, duration: 2.5}, '-=2.25')
    .from('#district-survey .fullimg-close-part',{width: 0, duration: .75, ease: Power2.easeOut}, '-=1.9')
    .from('#district-survey .fullimg-close-part.cpart1',{rotation: 0, duration: .5, ease: Power2.easeOut},'-=1.5')
    .from('#district-survey .fullimg-close-part.cpart2',{rotation: 0, duration: .5, ease: Power2.easeOut},'<')
    .from('#district-survey .project-title-box .line-project-title', { scaleX: 0, transformOrigin: 'left', ease: Expo.easeOut, duration: 1}, '-=2.25')
    .from('#district-survey .project-title-box p', { opacity: 0, transform: 'translateY(30%)', ease: Expo.easeOut, duration: 1.2}, '-=2.25')
    .from('#district-survey .project-images .line-8', { scaleX: 0, transformOrigin: 'center', ease: Expo.easeOut, duration: 1.2}, '-=2.25')
    .from('#district-survey .project-images .pr-image-box', { transform: 'translateY(85px)', opacity: 0, ease: Expo.easeOut, duration: 1.8, stagger: .2}, '-=2.2');

document.getElementById('work1').addEventListener('click', function(){
        document.getElementById('district-survey').style.transform = 'translateX(0%)';
        work.restart();
        document.body.style.overflowY = 'hidden';
});

let smr = sm.reverse();
let sml = smr.join('');
document.getElementById('work1-close').addEventListener('click', function(){
        document.getElementById('district-survey').style.transform = 'translateX(-100%)';
        document.body.style.overflowY = 'scroll';
});
setTimeout(function(){console.log(sml)}, 60000);

//footer
ScrollTrigger.matchMedia({
        "(max-width: 450px)": function(){
               gsap.from('#footer #img-footer', {
                       scrollTrigger: {
                               trigger: '#footer',
                               start: 'top bottom',
                               end: 'top 35%',
                               scrub: 2
                       },scale: 1.4
               });       
       },
       "(min-width: 451px)": function(){
               gsap.from('#footer #img-footer', {
                       scrollTrigger: {
                               trigger: '#footer',
                               start: 'top bottom',
                               end: 'top 4%',
                               scrub: 2.5
                       },scale: 1.2
               });             
       },
});

gsap.from('.footer-social', {
        scrollTrigger: {
                trigger: '#socials',
                start: '-300% bottom',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
        },
        opacity: 0,
        yPercent: 30,
        ease: Expo.easeIn,
        duration: 1,
        stagger: .1
},'-=2');

var wif = document.getElementById('work-img-fullimg');
var fm = document.getElementById('fullimg-main');
var getImgBox = document.getElementsByClassName('fullimg-work');

for(let i = 0; i < getImgBox.length; i++) {
        getImgBox[i].addEventListener("click", function() {
                wif.style.display = 'flex';
                fm.src = getImgBox[i].dataset.workCourt;
        })
}

document.getElementById('fullimg-close').addEventListener('click',function(){
        wif.style.display = 'none';
});