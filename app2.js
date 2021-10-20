const webAction = gsap.timeline({ defaults: { ease: "power1.out"}});

webAction.to(".slider-about", { x: "100%", duration: 1, delay: 0.5});
webAction.to(".slider-about2", { x: "100%", duration: 1, delay: 0.5}, "-=1.25");
webAction.to(".slider-about3", { x: "100%", duration: 1, delay: 0.5}, "-=1");
webAction.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 })
webAction.fromTo("#big-text-about", { opacity: 0 }, { opacity: 1, duration: .75 }, "-=1.75")
webAction.fromTo("#me", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")
webAction.fromTo("#myinfo", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")
webAction.fromTo("#resume", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")
webAction.fromTo("#github", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")
webAction.fromTo("#linkedIn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")


const menu = document.querySelector('#bars-list');
const menuLinks = document.querySelector('.options-links');

menu.addEventListener('click', function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})

let logoBounce = document.getElementById('logo2');
let ball1 = document.getElementById('ball1');
let ball2 = document.getElementById('ball2');
let ball3 = document.getElementById('ball3');
let wordmash = document.getElementById('explain4');
let wordmashText = document.getElementById('text4');


logoBounce.addEventListener('mouseover', function() {
	logoBounce.style.transform = "rotateZ(180deg)";
	setTimeout(function(){
		ball1.style.opacity = "1";
		ball2.style.opacity = "1";
		ball3.style.opacity = "1";
	}, 3000)
	setTimeout(function(){
		ball1.style.transform = "translateX(-1500px)";
		ball2.style.transform = "translateX(-1500px)";
		ball3.style.transform = "translateX(-1500px)";
		setTimeout(function(){
			wordmash.style.transform = "translateX(-1000px)";
			wordmash.style.opacity = "0";
			setTimeout(function(){
				wordmash.style.transform = "translateX(300px)";
				wordmash.style.color = "var(--secondaryColor)";
				wordmashText.style.color = "#FFFFFF";
				wordmash.style.opacity = "1";
			}, 6000)
			setTimeout(function(){
				wordmash.style.transform = "translateX(-20px)";
				logoBounce.style.transform = "rotateZ(-360deg)";
				logoBounce.scr = "/Users/dhruvengineer/Desktop/d-projects/Portolfio Website/images/image0.png";
				console.log('done');
			}, 9000)
		}, 1500);
	}, 4000)
})


//function logBounceHoriz() {
//	setTimeout(function(){
//		logoBounce.style.transform = "translateX(100px)";
//		console.log('moved right');
//	}, 2000)
//	setTimeout(function(){
//		logoBounce.style.transform = "translateX(-100px)";
//		console.log('moved back');
//		}, 1000);
//}

//logoBounce.addEventListener('click', logBounceHoriz());

//document.addEventListener('DOMContentLoaded', function() {
//	logBounceHoriz();
//}, false);


//	logoBounce.style.transform = "translateY(-100px)";
//	setTimeout(function(){
//		logoBounce.style.transform = "translateY(0px)";
//	}, 200);
//	logoBounce.style.transform = "translateY(-50px)";
//	setTimeout(function(){
//		logoBounce.style.transform = "translateY(0px)";
//		console.log('50 down')
//	}, 200);

