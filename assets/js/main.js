var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// // Function to clear search bar (in small screens) when user clicks in it to type an artist name
// function clearFunctionSmall() {
//     document.getElementById("search-small").value="";
// }

// // Function to reset the preset value (in small screens) in the search bar after the search is activated
// function clearSearchSmall() {
//     document.getElementById("search-small").value = "artist name";
// }

// Function to clear search bar when user clicks in it to type an artist name
function clearFunction() {
    document.getElementById("search").value = "";
}

// Function to reset the preset value in the search bar after the search is activated
function clearSearch() {
    document.getElementById("search").value = "artist name";
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

            // To reset the search when a new artist is clicked
            // document.getElementById("artist-names").innerHTML = "";

            var html_string = ""; // added by Xav 11/03

            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name;
                if (initialArtistNames.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (artistList.includes(initialArtistNames) == false) {
                        artistList.push(initialArtistNames);

                        html_string += `<button type="button" id="artists" class="highlighted-buttons" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>"; // added by Xav 11/03     

                        // Send names to column in larger screens
                        document.getElementById("artist-names").innerHTML += `<button type="button" id="artists" class="highlighted-buttons" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";

                        // Send names to column in smaller screens
                        document.getElementById("small-artist-names").innerHTML += `<button type="button" id="artists" class="highlighted-buttons" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames.toLowerCase() + "</button>" + "<br>";
                        console.log("FIRST pass");
                    }
                }
            }

            document.getElementById("artist-names").innerHTML = html_string;
            document.getElementById("small-artist-names").innerHTML = html_string;
            document.getElementById("artist-header").innerHTML = `<h2 class="category-header disappear-small">artist</h2>`;
            document.getElementById("small-artist-header").innerHTML = `<h2>artist</h2>`;
            document.getElementById("artist-header").style.borderLeft = "1px solid #000";
            document.getElementById("artist-results").style.borderLeft = "1px solid #000";
            document.getElementById("artist-bottom").style.borderLeft = "1px solid #000";
            document.getElementById("artist-bottom").innerHTML = `<h3 id="next-step">click on a name.</h3>`;
            document.getElementById("artist-bottom-small").innerHTML = `<h3 id="next-step">click on a name.</h3>`;

        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);

}

// // Second function: When the user clicks on an artist name, that element generates a new search for that artist's popular songs

function artistSong(artistName) {

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {

            console.log(this.responseText);
            var artistResponse = JSON.parse(this.responseText);

            // The data received from the specific artist name search
            var artistData = artistResponse.data;

            // Empty array 
            var duplicateList = [];

            //Search function
            document.getElementById("song-list").innerHTML = "";
            for (i = 0; i < artistData.length; i++) {
                var songList = artistData[i].title;
                // Input song titles in a large screen
                document.getElementById("song-list").innerHTML += `<div class="song-bars"><button type="button" id="clickable-songs" onclick="songListen('${artistData[i].preview}')">` + songList.toLowerCase() + "</button>" + "</div>";
                // Input song titles in a smaller screen
                document.getElementById("small-songs-list").innerHTML += `<div class="song-bars"><button type="button" id="clickable-songs" onclick="songListen('${artistData[i].preview}')">` + songList.toLowerCase() + "</button>" + "</div>";
                console.log("SECOND pass");
            }

            document.getElementById("popular-songs").innerHTML = `<h2 class="category-header disappear-small">songs</h2>`;
            document.getElementById("small-songs-header").innerHTML = `<h2>songs</h2>`;
            document.getElementById("song-header-xs").innerHTML = `<h2>songs</h2>`;
            document.getElementById("popular-songs").style.borderLeft = "1px solid #000";
            document.getElementById("song-results").style.borderLeft = "1px solid #000";
            document.getElementById("song-bottom").style.borderLeft = "1px solid #000";
            document.getElementById("song-bottom").innerHTML = `<h3 id="next-step">click on a song.</h3>`;
            document.getElementById("song-bottom-small").innerHTML = `<h3 id="next-step">click on a song.</h3>`;
            document.getElementById("song-bottom-xs").innerHTML = `<h3 id="next-step">click on a song and it'll appear at the top.</h3>`;
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artistName);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);
}


// Function to preview song

function songListen(preview) {

    document.getElementById("preview-songs").innerHTML = `<h2 class="category-header disappear-small">listen</h2>`;
    document.getElementById("small-previews-header").innerHTML = `<h2>listen</h2>`;
    document.getElementById("preview-header-xs").innerHTML = `<h2>listen</h2>`;
    document.getElementById("preview-songs").style.borderLeft = "1px solid #000";
    document.getElementById("preview-results").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg" id="audio-player"></audio>`;
    document.getElementById("small-song-listen").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg"></audio>`;
    document.getElementById("xs-song-listen").innerHTML = `<audio controls volume=0.1 src="` + preview + `" type="audio/mpeg"></audio>`;
    document.getElementById("preview-results").style.borderLeft = "1px solid #000";
    document.getElementById("preview-bottom").style.borderLeft = "1px solid #000";
    document.getElementById("preview-bottom").innerHTML = `<h3 id="next-step">happy listening!</h3>`;
    document.getElementById("preview-bottom-small").innerHTML = `<h3 id="next-step">happy listening!</h3>`;
}



        // QUESTIONS / TO DO
        // TO-DO: How to remove data from a page when a new element is clicked on?

        // TO-DO: How to change the position of the preview bar so it is in line with the button it's clicked on?

        // TO-DO: Add filter to song results, so duplicate songs don't show. 

        // TO-DO: Highlight the artist and songs that have been selected

        // TO-DO: Fix search function, currently if you search for Jack no results show up? 

        // TO-DO: Reset columns when a new search is performed - location.reload?

