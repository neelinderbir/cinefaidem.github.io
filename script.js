// gsap.from(".landing-card-1", { 
    
//     y:-500,
//     x:200,
//     rotation:0,
    
//     // position:'absolute',
//     delay:1,
//     // rotation: 360,
//     // scale:1.2,
//     // scrollTrigger:{
//     //     trigger:'.landing-card-1',
//     //     // yoyo:true,
      

//     //     // markers:true,
//     //     start:'top 50%',
//     //     end:'top -20%',
//     //     scrub:2,

//     // },
    
    
//   });


//   gsap.from(".landing-card-1", { 
    
//     y:-500,
//     x:200,
//     rotation:0,

    
    
//   });



  gsap.to(".landing-card-1",{
    // y:800,
    rotation:360,
    delay:2,
    scrollTrigger:{
        yoyo:true,
        // markers:true,
        start:'top 50%',
        end:'top -20%',
        scrub:1

    }
  })