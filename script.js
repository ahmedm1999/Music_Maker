window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound") ;
    const pads = document.querySelectorAll(".pads div") ;
    const visual = document.querySelector(".visual") ; 
    let colors = [] ;
    let i = 0 ; 
    while (i < 6) {
        colors.push(sounds[i].getAttribute("data-color")) ;
        i += 1 ;
    }
    //console.log(colors[0]) ;
    pads.forEach((pad, index) => {
        pad.addEventListener("click", () => {
            sounds[index].currentTime = 0 ;
            sounds[index].play() ;
            creatBubble(index) ;
        }) ;
    }) ;
    // I will Make the Animated Bubbles ! .... 
    const creatBubble = index => {
        // creat bubble .
        const bubble = document.createElement("div") ;
        visual.appendChild(bubble) ;
        bubble.style.backgroundColor = colors[index] ;
        bubble.style.animation = `jump 1s ease`; 
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
          });
    } ;
}) ;