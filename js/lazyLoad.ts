const bgColor:string = "hsla(0, 0%, 0%, 0.75)"
const lazyLoadOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

// assets
const assets = document.querySelectorAll("img, video, audio, iframe")
for (let i = 0; i < assets.length; i++)
{
  assets[i].setAttribute("src", "assets/loading.svg")
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
const gradient:string = "linear-gradient(" + bgColor + ", " + bgColor + "), url(assets/"
const backgrounds = document.querySelectorAll("[bg]")
for (let i = 0; i < backgrounds.length; i++) {
  const background = <HTMLElement>backgrounds[i];
  const url = "loading.svg"
  background.style.backgroundImage = gradient + url + ")"
}

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