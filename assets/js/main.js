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
            // First result (song title search) printed in HTML
            var titleText = response.data;
            for (i = 0; i < titleText.length; i++) {
               document.getElementById("title-text").innerHTML += "Title: " + titleText[i].title + "<br>";
            }
            // Second result (song rank) printed in HTML
            var rank = document.getElementById("song-rank");
            rank.innerHTML = response.data[0].rank;
        }
    });
        // NEXT STEPS
        // 1. Putting data into HTML code
        // 2. Adding a 'for loop' to be able to iterate through the whole array

    xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + inputValue);
    xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "188d30da21msh99fa3832c206cd5p1eb131jsn0acc1b025fc9");

    xhr.send(data);

}

