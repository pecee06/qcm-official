let tl = gsap.timeline();

tl.from(".home-content h1",{
    opacity: 0,
    x: "-25%",
    duration: 1
});
tl.from(".home-content h3",{
    opacity: 0,
    x: "25%",
    duration: 1
});
tl.from(".home-content p",{
    opacity: 0,
    y: "50%",
    duration: 0.5
});

$(".navbar div").on("mouseover",(e)=>{
    gsap.to(e.currentTarget.querySelector("a"),{
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "none"
    });
    gsap.to(e.currentTarget.querySelector("i"),{
        y: "-1vw",
        opacity: 0,
        duration: 0.2,
        ease: "none"
    });
})
$(".navbar div").on("mouseleave",(e)=>{
    gsap.to(e.currentTarget.querySelector("a"),{
        y: "1vw",
        opacity: 0,
        duration: 0.2,
        ease: "none"
    });
    gsap.to(e.currentTarget.querySelector("i"),{
        y: 0,
        opacity: 1,
        duration: 0.2,
        ease: "none"
    });
})