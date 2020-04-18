var searchButton = $("#searchLyricsButton");

$("#searchLyricsButton").on("click", function () {
    var artistName = $("#artistName").val();
    var songTitle = $("#songTitle").val();
    event.preventDefault();
    findLyrics(artistName, songTitle);
})

function findLyrics(artistName, songTitle) {
    var queryURL = "https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            var searchName = response.name;

            // $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artistName").value + "/" + document.getElementById("songTitle").value,
            //     function (data) {
            //         document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>")
            //     })

        })
}



// function pullApi1(userInput) {
//     var request = new XMLHttpRequest();
//     request.open('GET', 'https://api.lyrics.ovh/v1/artist/title');
//     request.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             console.log('Status:', this.status);
//             console.log('Headers:', this.getAllResponseHeaders());
//             console.log('Body:', this.responseText);
//         }
//     };
//     request.send();
// }


// $("#resultSnippet").empty();
// var queryURL = "https://api.spotify.com/v1/artists/4209804dacd942ddbaff9d1a25ef22d3/related-artists";
// $.ajax({
//     url: queryURL,
//     method: "GET"
// })
//     .then(function (results) {
//         results.Similar.Results.forEach(function (item) {
//             resultsArray.push(item.Name);
//         });
//         console.log(resultsArray);
//     });
// base URL for Spotify: https://api.spotify.com/v1
// related artists for Spotify: /v1/artists/{id}/related-artists