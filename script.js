gsap.registerPlugin(ScrollTrigger);

gsap.to(
    ".box-section" ,{
        x:300,
        y:50,
        duration: 8,
        scrollTrigger: {
            trigger: ".carousel",
            start: "top 20%",
            end: "top 60%",
            scrub:3,
            pin: true,
            toggleActions: "restart, reverse, reverse, complete",
        } 
    }
)

gsap.to(
    ".about-holder", {
        x:200,
        y:25,
        duration: 5,
        scrollTrigger: {
            trigger: "",
            start: "top center",
            end: "top 80%",
            markers: true,
            scrub: true,
            toggleActions: "restart , reverse, reverse, complete"
        }
    }
)