
var introText = document.querySelector('.intro-text');
var introWhite = document.querySelector('.intro-whitespace');
var bodyElement = document.querySelector('body');
var txtHi = document.querySelector('#hi');
var txtIm = document.querySelector('#im');
var txtIsaac = document.querySelector('#isaac');
var txtWey = document.querySelector('#weymouth');
var txtDesc = document.querySelector('#mydesc');
var txtHighlights = document.querySelectorAll('.highlighter.h-w0');

export function setupListeners(){
    document.addEventListener('click', () => introComplete(),{once:true})
    window.onbeforeunload = function () {
        window.scroll(0,0);
    }

    document.addEventListener('scroll', toggleNavShadow)
}

export function setupObservers(){
    var observer = new IntersectionObserver(scrollReveal, {threshold: 0.7})
    var targets = document.querySelectorAll('.reveal');
    targets.forEach(t => observer.observe(t));
    var sideSwitch = true;
    var sidePx = '100px'

    function scrollReveal (entries, observer){
        entries.forEach(entry=> {
            if (entry.isIntersecting){
                sidePx = sideSwitch?'50px':'-50px';
                anime({
                    targets: entry.target,
                    duration: 500,
                    opacity: [0,1],
                    translateX:[sidePx, 0],
                    easing: 'easeInOutSine',
                    complete: function(){
                        var highlighters = entry.target.querySelectorAll('.h-w0');
                        var t = 50;
                        highlighters.forEach( h=>{
                            setTimeout(()=>{h.classList.remove('h-w0')}, t);
                            t += 50;
                        });
                    }
                });

                observer.unobserve(entry.target);
                sideSwitch = !sideSwitch;
            }
        })
    }
}

export function introAnimation(){
    var introFadein = anime.timeline({
        duration: 250,
        easing: 'easeInSine'
    });

    introFadein
        // greeting and name
        .add({
            targets: txtHi,
            opacity: [0,1],
            delay: 200
        })
        .add({
            targets: txtIm,
            opacity: 1,
            delay: 300
        })
        .add({
            targets: [txtIsaac, txtWey],
            opacity: 1,
            delay: 50,
            duration: 500,
        })
        .add({
            begin: function(anim) {
                txtHighlights[0].classList.remove('h-w0')
            }
        },'-=150')
        .add({ 
            begin: function(anim) {
                txtHighlights[1].classList.remove('h-w0')
            }
        },'-=200')
        // tagline
        .add({
            targets: txtDesc.querySelectorAll('span'),
            duration: 100,
            // opacity: 1,
            // translateY: ['50px', 0],
            // translateX: ['-5px', 0],
            // easing: 'spring(1, 80, 10, 0)',
            // delay: anime.stagger(150, {easing: 'linear'})
            translateY: [50,0],
            translateX:[25,0],
            rotate:[90, 0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 800,
            delay: (el, i) => 300 + 30 * i
            
        }, '+=200')
        .add({
            delay: 150,
            begin: function(anim) {
                introComplete();
            }
        })

}

function introComplete() {
    bodyElement.classList.remove('scroll-block');
    introText.classList.remove('scaled');
    introWhite.classList.remove('full-h');
    introWhite.classList.add('jumbo-bg');
}

function toggleNavShadow(){
    let nav = $('#navbarNav')
    let navTop = nav.offset().top
    let headerHeight = nav.prev().outerHeight()
    if (navTop > headerHeight+5) {
        nav.addClass('shadow-md')
    } else {
        nav.removeClass('shadow-md')
    }
}

