//Const 
const navbar = document.querySelector(".nav");
const sectionOne = document.querySelector(".welcome-section");
const backToTopButton = document.querySelector("#back-to-top-btn");
const txtCopyInput = document.getElementById("txtCopyInput");
const btnCopy = document.getElementById("btnCopy");
const copyMessage = document.querySelector(".copyMessage");
const showMsg = document.querySelector(".showMsg");
const showMsg2 = document.querySelector(".showMsg2");
const copyMessage2 = document.querySelector(".copyMessage2");
const loader = document.getElementById("preloader");


// Swiper config


//Button animations
window.addEventListener("scroll", scrollFunction);
function scrollFunction(){
  if(window.pageYOffset > 300){// Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")){
    backToTopButton.classList.remove("btnExit");
    backToTopButton.classList.add("btnEntrance");
    backToTopButton.style.display="block";
  }
} else { // Hide backToTopButton
  if(backToTopButton.classList.contains("btnEntrance")){
    backToTopButton.classList.remove("btnEntrance");
    backToTopButton.classList.add("btnExit");
    setTimeout(function(){
    backToTopButton.style.display="none";
    }, 250);
    
  }
 }
}

backToTopButton.addEventListener("click",backToTop);
  function backToTop(){
    window.scrollTo(0,0);
  }

//Contact Section copy message 
showMsg.addEventListener('click', showCopyMessage);
showMsg.addEventListener('click', copyMessageAnimation);
function showCopyMessage(){
  copyMessage.style.display="flex"
  setTimeout(function(){
    copyMessage.style.display="none"
  }, 1700);
}

showMsg2.addEventListener('click',showCopyMessage2);
showMsg2.addEventListener('click', copyMessageAnimation2);
function showCopyMessage2(){
  copyMessage2.style.display="flex"
  setTimeout(function(){
    copyMessage2.style.display="none"
  }, 1700);
}

function copyMessageAnimation(){
    if(!copyMessage.classList.contains("msgEntrance")){
      copyMessage.classList.add("msgEntrance");
      copyMessage.style.display="flex";
  } else { // Hide backToTopButton
  if(copyMessage.classList.contains("msgEntrance")){
    setTimeout(function(){
      copyMessage.classList.remove("msgEntrance");
    }, 2500);
    
  }
 }
}
function copyMessageAnimation2(){
  if(!copyMessage2.classList.contains("msgEntrance")){
    copyMessage2.classList.add("msgEntrance");
    copyMessage2.style.display="flex";
} else { // Hide backToTopButton
if(copyMessage2.classList.contains("msgEntrance")){
  setTimeout(function(){
    copyMessage2.classList.remove("msgEntrance");
  }, 2500);
  
}
}
}


//Navbar transparent to color on scroll 
const sectionOneOptions = {
    rootMargin:"-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function
    (entries,
    sectionOneObserver
) {
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navbar.classList.add('nav-scrolled');
        } else{
            navbar.classList.remove('nav-scrolled');
        }
    })
},
 sectionOneOptions);

 sectionOneObserver.observe(sectionOne);
 
 //Copied!
 //btnCopy txtCopyInput

 btnCopy.onclick = function(){
  txtCopyInput.select();
  document.execCommand("copy");
 };
 btnCopy2.onclick = function(){
  txtCopyInput2.select();
  document.execCommand("copy");
 };

 //Particles JS :D

 /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
 window.addEventListener('DOMContentLoaded', (event) =>{
     particlesJS('particles-js',
 {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#e97725"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#e97725",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
 )});
 window.addEventListener('DOMContentLoaded', (event) =>{
    particlesJS('particles-js2',
{
   "particles": {
     "number": {
       "value": 30,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#e97725"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 10,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 80,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 300,
       "color": "#e97725",
       "opacity": 0.4,
       "width": 2
     },
     "move": {
       "enable": true,
       "speed": 12,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": false,
         "mode": "repulse"
       },
       "onclick": {
         "enable": false,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 800,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 800,
         "size": 80,
         "duration": 2,
         "opacity": 0.8,
         "speed": 3
       },
       "repulse": {
         "distance": 400,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 }
)});

//Mobile nav
function openNav() {
  document.getElementById("sideNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sideNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


//Preloader

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},3000);

},false);