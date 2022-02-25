const bgColor:string = "hsla(0, 0%, 0%, 0.75)"
const lazyLoadOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

// assets
const assets = document.querySelectorAll("img, video, audio, iframe")
for (let i = 0; i < assets.length; i++)
{
  assets[i].setAttribute("src", "assets/spinnerAnimation.svg")
  assets[i].setAttribute("loading", "lazy")
}
const assetObserver = new IntersectionObserver((entries, assetObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    const asset = <HTMLImageElement> entry.target
    asset.src = "assets/" + asset.getAttribute("data")
    asset.classList.add("loaded")
    assetObserver.unobserve(entry.target)
  });
}, lazyLoadOptions)
assets.forEach((asset) => {
  assetObserver.observe(asset)
})

// bg
const gradient:string = "linear-gradient(" + bgColor + ", " + bgColor + "), url(assets/bg/"
const backgrounds = document.querySelectorAll("section")
const bgObserver = new IntersectionObserver((entries, bgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    const background = <HTMLImageElement> entry.target
    const bg = background.getAttribute("bg");
    background.style.background = gradient + bg + ")"
    bgObserver.unobserve(entry.target)
  });
}, lazyLoadOptions)
backgrounds.forEach((asset) => {
  bgObserver.observe(asset)
})