
var tl = gsap.timeline()

tl.from("#nav h1,#nav-items h3,#nav-sign span",{
    y:-100,
    opacity:0,
    duration:0.8,
    delay:0.2,
    // stagger:0.7,1
    rotate:360
})

// tl.from("#nav-items h3",{
//     y:-100,
//     duration:0.5,
//     opacity:0,
//     rotate:180
    
// })

// tl.from("#nav-sign span",{
//     y:-100,
//     duration:0.5,
//     // delay:0.2,
//     // stagger:1,
//     opacity:0,
//     rotate:-180
// })

tl.from("#front-top",{
    opacity:0,
    z:-100,

})
tl.from("#right img,#left h1 span img, #front-top #left h1,front-top #left h1 span,#left",{
    x:-100,
    duration:1.5,
    delay:0.2,
    // stagger:1,
    opacity:0,
    
})
// tl.from("#front-top #left h1 span",{
//     x:-100,
//     duration:0.2,
//     // delay:0.2,
//     stagger:1,
//     opacity:0,
//     // rotate:-180
// })

// tl.from("#front-top #left h1 span img",{
//     x:100,
//     duration:0.3,
//     // stagger:1,
//     opacity:0,
//     rotate:270
// })



// tl.from("#right img",{
//     z:-400,
//     opacity:0,
//     duration:0.2,
//     delay:0.2,

// })

tl.from("#right input",{
    // x:300,
    opacity:0,
    // stagger:1
    
})

tl.from("#right button",{
    z:300,
    opacity:0,

    
})

tl.from("#right h3",{
    y:-400,
    duration:0.2,
    opacity:0
})


tl.from("#text h3",{
    x:-400,
    opacity:0,
    duration:0.2,
    stagger:1

})


tl.from("#front-bottom #bottom-left h3",{
    opacity:0,
    x:-300,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #bottom-left h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }

})


tl.from("#front-bottom #bottom-left h4",{
    opacity:0,
    y:300,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #bottom-left h4",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})


tl.from("#front-bottom #text2 h3",{
    opacity:0,
    z:-300,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})


tl.from("#front-bottom #text2 h4",{
    opacity:0,
    z:-300,
    duration:0.8,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h4",
        scroll:"body",
        // markers:true,
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})

tl.from(".box1",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})

tl.from(".box1 h2",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})

tl.from(".box2",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})

tl.from(" .box2 h2",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})
tl.from(".box3",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})

tl.from(" .box3 h2,.box3 h1",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:"#page2 #text2 h3",
        scroll:"body",
        start:"top 70%",
        end:"top 55%",
        scrub:1
    }
})