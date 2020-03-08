var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// First user step: artist name search function
function search() {

    let inputValue = document.getElementById("search").value;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
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
                        // var btn = document.createElement("BUTTON"); // new line
                        // btn.innerHTML += initialArtistNames; // new line
                        // document.getElementById("artist-name").appendChild(btn); // new line
                        document.getElementById("artist-name").innerHTML += `<button id="artists" onclick="artistSong('${initialArtistNames}')">` + initialArtistNames + "</button>" + "<br>";
                        console.log(initialArtistNames);
                    }
                }
            }
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);

}

// // Second function: When the user clicks on an artist name, that element generates a new search for that artist's popular songs
function artistSong(artistName) {
    console.log("function is still linked");
    let songSearch = document.getElementById("search").value; // equivalent to the inputValue, USED "SEARCH" for now to test it works
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log("the below responseText shows up after the button is clicked");
            console.log(this.responseText);
            // var artistSongs = JSON.parse(this.responseText);
            // var songData = artistSongs.data;

            // Empty array for song results to be inserted into
            // var songList = [];

            // for (i = 0; i < songData.length; i++) {
            //     var returnedSongList = songData[i].title;
            //     // console.log("the below list of songs uses the first 'search input' as the input value")
            //     // console.log(returnedSongList); 
            //     if (returnedSongList.toLowerCase().includes(songSearch.toLowerCase())) {
            //         if (songList.includes(returnedSongList) == false) {
            //             songList.push(returnedSongList);
            //             document.getElementById("popular-song").innerHTML += "<button>" + returnedSongList + "</button>" + "<br>";
            //             console.log(returnedSongList);
            //         }
            //     }
            // };

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + songSearch); // inputvalue is incorrect
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");
    xhr.send(data);
}
    })
}




//     xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === this.DONE) {
//             console.log(this.responseText);
//             var response = JSON.parse(this.responseText);
// 

            // CODE FOR DISPLAYING DIFFERENT ELEMENTS
            // document.getElementById("artist-name").innerHTML += responseData[i].artist.name + "<br>";
            // document.getElementById("popular-song").innerHTML += "Popular song: " + responseData[i].title + "<br>";
            // document.getElementById("preview-song").innerHTML += "Song preview: " + responseData[i].preview + "<br>";                
            // document.getElementById("recommended-album").innerHTML += "Recommended album: " + responseData[i].album.title + "<br>";


        // QUESTIONS
        // Q3. How to make it so that when an artist name pops up, you can click a name and then it shows the song results and suggested albums?
        // Q4. How to make previews show up as images / preview bars
