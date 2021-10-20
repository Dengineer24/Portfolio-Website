const webAction = gsap.timeline({ defaults: { ease: "power1.out"}});

webAction.to(".slider-about", { x: "100%", duration: 1, delay: 0.5});
webAction.to(".slider-about2", { x: "100%", duration: 1, delay: 0.5}, "-=1.25");
webAction.to(".slider-about3", { x: "100%", duration: 1, delay: 0.5}, "-=1");
webAction.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
webAction.fromTo(".project-header", { opacity: 0 }, { opacity: 1, duration: .75 }, "-=1.75")



const menu = document.querySelector('#bars-list');
const menuLinks = document.querySelector('.options-links');

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});

