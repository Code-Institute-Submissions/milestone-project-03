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

            // Search action to filter results that only include words from inputValue and removes duplicates 
            var artistList = [];

            for (i = 0; i < responseData.length; i++) {
                var initialArtistNames = responseData[i].artist.name;
                if (initialArtistNames.toLowerCase().includes(inputValue.toLowerCase())) {
                    if (artistList.includes(initialArtistNames) == false) {
                        artistList.push(initialArtistNames);
                        document.getElementById("artist-name").innerHTML += "<p>" + initialArtistNames + "</p>";
                        // document.getElementById("artist-name").innerHTML += initialArtistNames + "<br>";
                    }
                }
            }

            /*  
                          if (filteredArtistNames.includes(inputValue.toLowerCase())) {
                                // BELOW 4 LINES ARE EARLY STEPS OF TRYING TO FIGURE OUT FILTER METHOD. CAN BE REMOVED IF NOT POSSIBLE.
                                var finalArtistNames = filteredArtistNames.filter(function (name, index) {
                                    function removeDuplicates(data) {
                                        return data.filter((value, index) = data.indexOf(value) === filteredArtistNames.indexOf(name) === index);
                                    }
                                    console.log(removeDuplicates(finalArtistNames));
                                });
                                document.getElementById("artist-name").innerHTML += responseData[i].artist.name + "<br>";
                            } else {
                                console.log("this, has, not, worked.")
                            }*/
            // document.getElementById("artist-name").innerHTML += responseData[i].artist.name + "<br>";
            // document.getElementById("popular-song").innerHTML += "Popular song: " + responseData[i].title + "<br>";
            // document.getElementById("preview-song").innerHTML += "Song preview: " + responseData[i].preview + "<br>";                
            // document.getElementById("recommended-album").innerHTML += "Recommended album: " + responseData[i].album.title + "<br>";
            // to display each name: create an empty string. then use a for loop, and for each name in artistList, append the following to the string:
            // string += "<p>" + artistList[i] + "</p>";
            // innerHtml of artist div = string

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



