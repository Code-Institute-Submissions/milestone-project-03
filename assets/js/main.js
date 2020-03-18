var data = null;

// Function to clear search bar when user clicks in it to type an artist name
function clearFunction() {
    document.getElementById("search").value = "";
}

// Function to reset the preset value in the search bar after the search is activated
function clearSearch() {
    document.getElementById("search").value = "artist name";
}

// Function to clear search results when a new search is executed
function clearResults() {
    document.getElementById("lg-song-list").innerHTML = "";
    document.getElementById("sm-song-list").innerHTML = "";
    document.getElementById("sm-song-header").innerHTML = "";
    document.getElementById("xs-song-header").innerHTML = "";
    document.getElementById("sm-listen-header").innerHTML = "";
    document.getElementById("lg-song-listen").innerHTML = "";
    document.getElementById("sm-song-listen").innerHTML = ""; 
    document.getElementById("lg-artwork-box").innerHTML = "";
}

// First user step: artist name search function
function search() {

    let inputValue = document.getElementById("search").value;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var response = JSON.parse(this.responseText);

            // The data received from the search function
            var responseData = response.data;

            // Search action to filter results that only include words from inputValue and removes duplicates 
            var artistList = [];

            var html_string = ""; 

            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name;
                if (initialArtistNames.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (artistList.includes(initialArtistNames) == false) {
                        artistList.push(initialArtistNames);

                        html_string += `<button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";    

                        // Send names to column in larger screens
                        document.getElementById("lg-artist-names").innerHTML += `<button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";

                        // Send names to column in smaller screens
                        document.getElementById("sm-artist-names").innerHTML += `<a id="jump-to"><button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "</a>" + "<br>";
                    }
                }
            }

            document.getElementById("lg-artist-names").innerHTML = html_string;
            document.getElementById("sm-artist-names").innerHTML = html_string;
            document.getElementById("lg-artist-header").innerHTML = `<h2 class="category-header disappear-small">artist</h2>
            <h3 id="next-step">select an artist.</h3>`;
            document.getElementById("sm-artist-header").innerHTML = `<h2>artist</h2>
            <h3 id="next-step">select an artist.</h3>`;
            document.getElementById("xs-artist-header").innerHTML = `<h2>artist</h2>
            <h3 id="next-step">select an artist and their songs will appear below.</h3>`;
            document.getElementById("lg-artist-header").style.borderLeft = "1px solid #000";
            document.getElementById("lg-artist-column").style.borderLeft = "1px solid #000";
            document.getElementById("lg-artist-bottom").style.borderLeft = "1px solid #000";

            // window.location.hash = "#xs-song-header";
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);

}

// // Second user step: Function when the user clicks on an artist name, that element generates a new search for that artist's popular songs

function artistSong(artistName) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {

            console.log(this.responseText);
            var artistResponse = JSON.parse(this.responseText);

            // The data received from the specific artist name search
            var artistData = artistResponse.data;

            //Search function
            document.getElementById("lg-song-list").innerHTML = "";
            for (i = 0; i < artistData.length; i++) {
                var songList = artistData[i].title;
                // var artwork = artistData[i].artist.picture_medium;
                // Input song titles in a large screen
                document.getElementById("lg-song-list").innerHTML += `<div><button type="button" id="clickable-songs" onclick="songListen('${artistData[i].preview}');albumArtwork('${artistData[i].album.cover_big}')">` + songList.toLowerCase() + "</button>" + "</div>";
                // Input song titles in a smaller screen
                document.getElementById("sm-song-list").innerHTML += `<div><button type="button" id="clickable-songs" onclick="songListen('${artistData[i].preview}')">` + songList.toLowerCase() + "</button>" + "</div>";
                console.log("SECOND pass");
            }

            document.getElementById("lg-song-header").innerHTML = `<h2 class="category-header disappear-small">songs</h2><h3 class="disappear-small" id="next-step">click on a song.</h3>`;
            document.getElementById("sm-song-header").innerHTML = `<h2>songs</h2><h3 id="next-step">click on a song.</h3>`;
            document.getElementById("xs-song-header").innerHTML = `<h2 href="#jump-to" id="songs-header">songs</h2><h3 id="next-step">click on a song and it will appear at the top.</h3>`; // HREF Artists or 'Jump-To' isn't working either? 

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


// Third user step: Function to preview song & see album artwork

function songListen(preview) {

    document.getElementById("lg-listen-header").innerHTML = `<h2 class="category-header disappear-small">listen</h2>
    <h3 id="next-step">listen to a clip.</h3>`;
    document.getElementById("sm-listen-header").innerHTML = `<h2>listen</h2>
    <h3 id="next-step">listen to a clip.</h3>`;

    document.getElementById("lg-listen-header").style.borderLeft = "1px solid #000";
    document.getElementById("lg-preview-column").style.borderLeft = "1px solid #000";
    document.getElementById("lg-preview-bottom").style.borderLeft = "1px solid #000";
    document.getElementById("sm-listen-header").style.borderLeft = "1px solid #000";
    document.getElementById("sm-song-column").style.borderLeft = "1px solid #000";

    document.getElementById("lg-song-listen").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg" class="audio-player"></audio>`;   
    document.getElementById("sm-song-listen").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg" class="audio-player"></audio>`;
    document.getElementById("xs-song-listen").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg" class="audio-player"></audio>`;
}

function albumArtwork(artworkLink) {
    document.getElementById("lg-artwork-box").innerHTML = `<img src="` + artworkLink + `"></img>`;
    document.getElementById("sm-artwork-box").innerHTML = `<img src="` + artworkLink + `"></img>`;     
}

// $("#search").toggleClass("foo")

// $("#search").toggleClass("foo")