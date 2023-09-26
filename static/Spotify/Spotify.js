async function updateSpotify() {
    let data = await fetch("/spotify");
    let jsonData = await data.json();

    if (jsonData["isPlaying"] != true) {
        document.getElementById("SpotifyImage").style.transition = "all 0.5s ease";
        document.getElementById("SpotifyImage").style.filter = "blur(5px)";
        return;
    }

    document.getElementById("SpotifyImage").style.transition = "all 0.5s ease";
    document.getElementById("SpotifyImage").style.filter = "blur(0px)";
    document.getElementById("SpotifyImage").src = jsonData["albumArt"];
    document.getElementById("SpotifyArtist").textContent = jsonData["artist"];
    document.getElementById("SpotifyTitle").textContent = jsonData["song"];
    document.getElementById("SpotifySlider").value = (jsonData["progress"]/jsonData["duration"])*10000;
}

async function init() {
    let Spotify = document.createElement("div");
    Spotify.id = "Spotify";
    Spotify.className = "Spotify";
    
    let SpotifyImageContainer = document.createElement("div");
    SpotifyImageContainer.className = "Spotify-Album-Image-Container";

    let SpotifyImage = document.createElement("img");
    SpotifyImage.id = "SpotifyImage";
    SpotifyImage.className = "Spotify-Album-Image";
    SpotifyImage.src = "https://i.scdn.co/image/ab67616d0000b2739b497715cf1fd9d075a03a84";
    SpotifyImage.alt = "cover art";

    let SpotifyInfo = document.createElement("div");
    SpotifyInfo.className = "Spotify-Info";

    let SpotifySlider = document.createElement("input");
    SpotifySlider.id = "SpotifySlider";
    SpotifySlider.className = "Spotify-Progress-Slider";
    SpotifySlider.type = "range";
    SpotifySlider.min = "0";
    SpotifySlider.max = "10000";
    SpotifySlider.value = "50";
    SpotifySlider.disabled = true;

    let SpotifyTitle = document.createElement("div");
    SpotifyTitle.id = "SpotifyTitle";
    SpotifyTitle.className = "Spotify-Info-Title";
    SpotifyTitle.textContent = "Title";

    let SpotifyArtist = document.createElement("div");
    SpotifyArtist.id = "SpotifyArtist";
    SpotifyArtist.className = "Spotify-Info-Artist";
    SpotifyArtist.textContent = "Artist";

    SpotifyInfo.appendChild(SpotifySlider);
    SpotifyInfo.appendChild(SpotifyTitle);
    SpotifyInfo.appendChild(SpotifyArtist);

    SpotifyImageContainer.appendChild(SpotifyImage);

    Spotify.appendChild(SpotifyImageContainer);
    Spotify.appendChild(SpotifyInfo);
    
    document.body.appendChild(Spotify);

    if (widgets.hasOwnProperty("Spotify")) {
        const position = widgets["Spotify"].split(",");
        Spotify.style.left = position[0]+"%";
        Spotify.style.top = position[1]+"%";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    init();
    updateSpotify();
});

setInterval(updateSpotify, 100);