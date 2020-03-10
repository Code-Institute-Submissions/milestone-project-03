var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// Function to clear search bar when user clicks in it to type an artist name
function clearFunction() {
    document.getElementById("search").value="";
}

// Function to reset the preset value in the search bar after the search is activated
function clearSearch() {
    document.getElementById("search").value = "Artist name";
}

// First user step: artist name search function
function search() {

    let inputValue = document.getElementById("search").value;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);
            var response = JSON.parse(this.responseText);

            // The data received from the search function
            var responseData = response.data;

            // Search action to filter results that only include words from inputValue and removes duplicates 
            var artistList = [];

            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name;
                if (initialArtistNames.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (artistList.includes(initialArtistNames) == false) {
                        artistList.push(initialArtistNames);
                        document.getElementById("artist-names").innerHTML += `<button type="button" id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";
                        console.log("FIRST TEST");
                    }
                }
            }
            document.getElementById("artist-header").innerHTML = `<h2 class="category-header">artist</h2>`;
            document.getElementById("artist-header").style.borderLeft = "1px solid #000";
            document.getElementById("artist-results").style.borderLeft = "1px solid #000";
            document.getElementById("artist-bottom").style.borderLeft = "1px solid #000";
            document.getElementById("artist-bottom").innerHTML = `<h3 id="next-step">click on a name.</h3>`;
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);

}

// // Second function: When the user clicks on an artist name, that element generates a new search for that artist's popular songs
function artistSong(artistName) {
    // alert(artistName + " first bit worked");

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            // console.log(artistName + " second bit worked");
            console.log(this.responseText);
            var artistResponse = JSON.parse(this.responseText);

            // The data received from the specific artist name search
            var artistData = artistResponse.data;
            // console.log(artistData);

            // Empty array 
            var duplicateList = [];

            //Search function
            for (i = 0; i < artistData.length; i++) {
                var songList = artistData[i].title;
                // console.log(songList); //Songlist is there
                document.getElementById("song-list").innerHTML += `<div class="song-bars"><button type="button" id="clickable-songs" onclick="songListen('${artistData[i].preview}')">` + songList.toLowerCase() + "</button>" + "</div>";
            }
            document.getElementById("popular-songs").innerHTML = `<h2 class="category-header">songs</h2>`;
            document.getElementById("popular-songs").style.borderLeft = "1px solid #000";
            document.getElementById("song-results").style.borderLeft = "1px solid #000";
            document.getElementById("song-bottom").style.borderLeft = "1px solid #000";
            document.getElementById("song-bottom").innerHTML = `<h3 id="next-step">click on a song.</h3>`;
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);
}

// Function to preview song

function songListen(preview) {

    document.getElementById("preview-songs").innerHTML = `<h2 class="category-header">listen</h2>`;
    document.getElementById("preview-songs").style.borderLeft = "1px solid #000";
    document.getElementById("preview-results").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg"></audio>`;
    document.getElementById("preview-results").style.borderLeft = "1px solid #000";
    document.getElementById("preview-bottom").style.borderLeft = "1px solid #000";
    document.getElementById("preview-bottom").innerHTML = `<h3 id="next-step">try another one?</h3>`;
}



        // QUESTIONS / TO DO
        // TO-DO: How to remove data from a page when a new element is clicked on?
        // Eg. if I clicked on George Michael, then saw his songs, but then clicked on George Ezra - how to clear George Michael's songs?
        // And how to clear the search bar as soon as 'search' is clicked on. 

        // TO-DO: How to change the position of the preview bar so it is in line with the button it's clicked on?

        // TO-DO: Make the song titles clickable, so they play sound instead of a separate sound bar.

        // TO-DO: Add filter to song results, so duplicate songs don't show. 

