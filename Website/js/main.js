var assets = document.querySelectorAll("img, video, audio, iframe");
for (var i = 0; i < assets.length; i++)
    assets[i].setAttribute("loading", "lazy");
