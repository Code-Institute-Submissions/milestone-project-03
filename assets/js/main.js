var data = null;

// Function to clear search bar when user clicks in it to type an artist name
function clearFunction() {
    document.getElementById("search").value = "";
}

// Function to reset the preset value in the search bar after the search is activated
function clearSearch() {
    document.getElementById("search").value = "artist name here.";
}

// Function to clear search results when a new search is executed
function clearResults() {
    document.getElementById("lg-song-list").innerHTML = "";
    document.getElementById("sm-song-list").innerHTML = "";
    document.getElementById("xs-song-header").innerHTML = "";
    document.getElementById("lg-song-listen").innerHTML = "";
    document.getElementById("sm-song-listen").innerHTML = "";
    document.getElementById("lg-artwork-box").innerHTML = "";
    document.getElementById("sm-artwork-box").innerHTML = "";
    document.getElementById("lg-artist-names").innerHTML = "";
    document.getElementById("sm-artist-names").innerHTML = "";
    document.getElementById("lg-song-title").innerHTML = "";
    document.getElementById("sm-song-title").innerHTML = "";
    document.getElementById("xs-song-title").innerHTML = "";
}

// First user step: artist name search function
function search() {

    var inputValue = document.getElementById("search").value;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var response = JSON.parse(this.responseText);

            // The data received from the search function
            var responseData = response.data;

            var artistList = [];

            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name;
                if (initialArtistNames.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (artistList.includes(initialArtistNames) == false) {
                        artistList.push(initialArtistNames);

                        // Send artist names to artist column in larger screens
                        document.getElementById("lg-artist-names").innerHTML += `<button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";

                        // Send artist names to artist column in smaller screens
                        document.getElementById("sm-artist-names").innerHTML += `<button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "</a>" + "<br>";
                    }
                }
            }

            // Column headers added to artist column
            document.getElementById("lg-artist-header").innerHTML = `<h2 class="category-header disappear-small">artist</h2>
            <h3 id="next-step">select an artist.</h3>`;
            document.getElementById("sm-artist-header").innerHTML = `<h2>artist</h2>
            <h3 id="next-step">select an artist.</h3>`;
            document.getElementById("xs-artist-header").innerHTML = `<h2>artist</h2>
            <h3 id="next-step">select an artist and their songs will appear below.</h3>`;

            // Borders added to artist column after function is run
            document.getElementById("lg-artist-header").style.borderLeft = "1px solid #000";
            document.getElementById("lg-artist-column").style.borderLeft = "1px solid #000";
            document.getElementById("lg-artist-bottom").style.borderLeft = "1px solid #000";

            // Error message on large screen in case no results match the input value

            var noMatchLG = document.getElementById("lg-artist-names");
            if (noMatchLG.innerHTML == "") {
                $('#myModal').modal('show');
            }

            // Error message on small screen in case no results match the input value

            var noMatchSM = document.getElementById("sm-artist-names");
            if (noMatchSM.innerHTML == "") {
                $('#myModal').modal('show');
            }
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);

}


// Search function if user presses enter instead of click
function clickSearch(event) {
    var x = event.key;
    if (x == "Enter") {
        search(); clearSearch(); clearResults();
    }
}


// // Second user step: Function when the user clicks on an artist name and generates a new search for that artist's popular songs

function artistSong(artistName) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {

            var artistResponse = JSON.parse(this.responseText);

            // The data received from the specific artist name search
            var artistData = artistResponse.data;

            //Search function
            document.getElementById("lg-song-list").innerHTML = "";
            for (i = 0; i < artistData.length; i++) {
                var songList = artistData[i].title.replace(/'/g, "&apos;");

                // Input song title buttons in a large screen (buttons will return preview, artwork and song titles when clicked)
                document.getElementById("lg-song-list").innerHTML += `<div><button type='button' id='clickable-songs' onclick='songListen("${artistData[i].preview}");albumArtwork("${artistData[i].album.cover_big}");songTitle(\"${songList}\")'>${songList.toLowerCase()}</button></div>`;

                // Input song title buttons on a smaller screen (buttons will return preview, artwork and song titles when clicked)
                document.getElementById("sm-song-list").innerHTML += `<div><button type='button' id='clickable-songs' onclick='songListen("${artistData[i].preview}");albumArtwork("${artistData[i].album.cover_big}");songTitle(\"${songList}\")'>${songList.toLowerCase()}</button></div>`;
            }

            // Header and instructions added to songs column after function is performed
            document.getElementById("lg-song-header").innerHTML = `<h2 class="category-header disappear-small">songs</h2><h3 class="disappear-small" id="next-step">click on a title.</h3>`;
            document.getElementById("sm-song-header").innerHTML = `<h2>songs</h2><h3 id="next-step">click on a song.</h3>`;
            document.getElementById("xs-song-header").innerHTML = `<h2 id="songs-header">songs</h2><h3 id="next-step">click on a song and it will appear at the top.</h3>`;

            // Styling adding to songs column after function is performed
            document.getElementById("lg-song-header").style.borderLeft = "1px solid #000";
            document.getElementById("lg-song-column").style.borderLeft = "1px solid #000";
            document.getElementById("lg-song-bottom").style.borderLeft = "1px solid #000";
            document.getElementById("sm-song-header").style.borderLeft = "1px solid #000";
            document.getElementById("sm-song-list").style.borderLeft = "1px solid #000";
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);
}


// User step 3A: Function to preview song

function songListen(preview) {

    // Header and next instructions added to listen column
    document.getElementById("lg-listen-header").innerHTML = `<h2 class="category-header disappear-small">listen</h2>
    <h3 id="next-step">listen to a clip.</h3>`;
    document.getElementById("sm-listen-header").innerHTML = `<h2>listen</h2>
    <h3 id="next-step">listen to a clip.</h3>`;

    // Styling added to listen column after function is run
    document.getElementById("lg-listen-header").style.borderLeft = "1px solid #000";
    document.getElementById("lg-preview-column").style.borderLeft = "1px solid #000";
    document.getElementById("lg-preview-bottom").style.borderLeft = "1px solid #000";
    document.getElementById("sm-listen-header").style.borderLeft = "1px solid #000";
    document.getElementById("sm-song-column").style.borderLeft = "1px solid #000";

    // Audio player added to listen column after function is run
    document.getElementById("lg-song-listen").innerHTML = `<audio controls volume=0.1 src="${preview}" type="audio/mpeg" class="audio-player"></audio>`;
    document.getElementById("sm-song-listen").innerHTML = `<audio controls volume=0.1 src="${preview}" type="audio/mpeg" class="audio-player"></audio>`;
    document.getElementById("xs-song-listen").innerHTML = `<audio controls volume=0.1 src="${preview}" type="audio/mpeg" class="audio-player"></audio>`;
}


// User step 3B: Function to input preview artwork
function albumArtwork(artworkLink) {
    document.getElementById("lg-artwork-box").innerHTML = `<img src="${artworkLink}">`;
    document.getElementById("sm-artwork-box").innerHTML = `<img src="${artworkLink}">`;
}


// User step 3C: Function to show song title beneath audio player
function songTitle(titleLink) {
    document.getElementById("lg-song-title").innerHTML = `<p>now playing: ${titleLink.toLowerCase()}</p>`;
    document.getElementById("sm-song-title").innerHTML = `<p>now playing: ${titleLink.toLowerCase()}</p>`;
    document.getElementById("xs-song-title").innerHTML = `<p id="xs-title">now playing: ${titleLink.toLowerCase()}</p>`;
}

