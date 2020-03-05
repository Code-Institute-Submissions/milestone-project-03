var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// Initial search function
function search() {

    let inputValue = document.getElementById("search").value;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            var response = JSON.parse(this.responseText);

            // The data received from the search function
            var responseData = response.data;

            // Search action to filter results that only include words from inputValue 
            
            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name.toLowerCase();
                var filteredArtistNames = initialArtistNames.split(" "); 
                if (filteredArtistNames.includes(inputValue.toLowerCase())) {
                    // BELOW 2 LINES ARE EARLY STEPS OF TRYING TO FIGURE OUT FILTER. CAN BE REMOVED IF NOT POSSIBLE.
                    var finalArtistNames = filteredArtistNames.filter(function (name, index) {
                        return filteredArtistNames.indexOf(name) === index;
                    });
                    console.log(finalArtistNames);
                    document.getElementById("artist-name").innerHTML += responseData[i].artist.name + "<br>";
                } else {
                    console.log("not today Satan.")
                }
            
                // document.getElementById("popular-song").innerHTML += "Popular song: " + responseData[i].title + "<br>";
                // document.getElementById("preview-song").innerHTML += "Song preview: " + responseData[i].preview + "<br>";                
                // document.getElementById("recommended-album").innerHTML += "Recommended album: " + responseData[i].album.title + "<br>";
            }
        }
    });

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");

    xhr.send(data);

}


        // QUESTIONS
        // Q1 How to make search specific eg. artist name, rather than songs which also have the artist name in it?
        // - I have tried if (xxx.includes(inputValue === true, so whatever the name input in the search is)) {
            // console.log(success!);
            // } else {
            // console.log(failure!);
            // }
            // ... but only shows failure
            // - The 'in' operator
        // Q2. How to show results once, rather than duplicates eg. names
        // Q3. How to make it so that when an artist name pops up, you can click a name and then it shows the song results and suggested albums?
        // Q4. How to make previews show up as images / preview bars
        // Q5. Do I need to do anything with the other API GET Keys eg. artist / album?



