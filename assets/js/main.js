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

            // The search action (artist name) to be printed in HTML
            for (i = 0; i < responseData.length; i++) {
            
                // Function to try ensure artist search results contain the name searched for
                var artistName = response.data[i].artist.name;
                if (artistName.includes(inputValue)) {
                    console.log("success!");
                } else {
                    console.log("failure!");
                }
                document.getElementById("artist-name").innerHTML += "Artist name: " + responseData[i].artist.name + "<br>";
                document.getElementById("popular-song").innerHTML += "Popular song: " + responseData[i].title + "<br>";
                document.getElementById("recommended-album").innerHTML += "Recommended album: " + responseData[i].album.title + "<br>";
            }             
        }
    });
        // QUESTIONS
        // 1. How to make search specific eg. artist name, rather than songs which also have the artist name in it?
        // 2. How to show results once, rather than duplicates eg. names
        // 3. Do I need to do anything with the other API GET Keys eg. artist / album?

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");

    xhr.send(data);

}

