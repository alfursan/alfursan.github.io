const assets = document.querySelectorAll("img, video, audio, iframe")
for (let i = 0; i < assets.length; i++)
  assets[i].setAttribute("loading", "lazy")