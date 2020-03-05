// Trying a function for removing duplicate name results

function filter() {
    var artistName = responseData[0].artist.name;
    if (artistName == artistname++) {
        console.log("it's the same name");
    } else {
        console.log("it's not the same name");
    }
}

// To show a second result in HTML
Second result(song rank) printed in HTML
var rank = document.getElementById("song-rank");
rank.innerHTML = response.data[0].rank;


// Trying to filter through names
   var artistNames = responseData[0].artist.name;
               var filteredNames = artistNames.split(" ");
               console.log(filteredNames);