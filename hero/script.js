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