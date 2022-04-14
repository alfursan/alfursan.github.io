const assetLoc = "../" + "assets/"

const blackt:string = "hsla(0, 0%, 0%, 0.90)"
const bgColor:string = "hsla(0, 0%, 0%, 0.65)"
const lazyLoadOptions = {
	threshold: 0,
	rootMargin: "0px 0px 600px 0px"
};

// assets
const assets = document.querySelectorAll("[data]")
const assetObserver = new IntersectionObserver((entries, assetObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		
		const asset = <HTMLMediaElement> entry.target;
		asset.src = assetLoc + asset.getAttribute("data");		
		assetObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
assets.forEach((asset) => {
	asset.setAttribute("loading", "lazy")
	assetObserver.observe(asset);
	
	(<HTMLMediaElement> asset).onload = function (){
		asset.classList.add("loaded")
	}
})
// linear6
// bg
// const gradient:string = "linear-gradient(" + bgColor + ", " + bgColor + "), url(" + assetLoc

// linear-gradient(black 0%, bgColor 10%, bgColor 90%, black 100%)
const gradient:string = "linear-gradient(" + blackt + " 0%, " + bgColor + " 25%, " + bgColor + " 75%, "+ blackt + " 100%), url(" + assetLoc

const backgrounds = document.querySelectorAll("[bg]")
const bgObserver = new IntersectionObserver((entries, bgObserver) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return
		const background = <HTMLElement> entry.target
		const url = "bg/" + background.getAttribute("bg");
		background.style.backgroundImage = gradient + url + ")"
		bgObserver.unobserve(entry.target)
	});
}, lazyLoadOptions)
backgrounds.forEach((asset) => {
	bgObserver.observe(asset)
})