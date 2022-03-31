var nav = document.getElementById("nav");
window.onscroll = function() {
	stickyNav();
};

function mobileNav() {
	if ( nav.classList.contains("responsive") ){
		nav.classList.remove("responsive");
	} else {
		nav.classList.add("responsive");
	}
}

function stickyNav() {
	const threshold = 0.9 * window.innerHeight
	if (window.scrollY >= threshold) {
		nav.classList.add("sticky")
	} else {
		nav.classList.remove("sticky");
	}
}