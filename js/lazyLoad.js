var bgColor = "hsla(0, 0%, 0%, 0.75)";
var lazyLoadOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};
// assets
var assets = document.querySelectorAll("img, video, audio, iframe");
for (var i = 0; i < assets.length; i++) {
    assets[i].setAttribute("src", "assets/spinnerAnimation.svg");
    assets[i].setAttribute("loading", "lazy");
}
var assetObserver = new IntersectionObserver(function (entries, assetObserver) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting)
            return;
        var asset = entry.target;
        asset.src = "assets/" + asset.getAttribute("data");
        asset.classList.add("loaded");
        assetObserver.unobserve(entry.target);
    });
}, lazyLoadOptions);
assets.forEach(function (asset) {
    assetObserver.observe(asset);
});
// bg
var gradient = "linear-gradient(" + bgColor + ", " + bgColor + "), url(assets/bg/";
var backgrounds = document.querySelectorAll("section");
var bgObserver = new IntersectionObserver(function (entries, bgObserver) {
    entries.forEach(function (entry) {
        if (!entry.isIntersecting)
            return;
        var background = entry.target;
        var bg = background.getAttribute("bg");
        background.style.background = gradient + bg + ")";
        bgObserver.unobserve(entry.target);
    });
}, lazyLoadOptions);
backgrounds.forEach(function (asset) {
    bgObserver.observe(asset);
});
