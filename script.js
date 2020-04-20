var searchButton = $("#searchLyricsButton");
var outputLyrics = $("#output");
var resultsArray = [];

// onclick function for main search button
$("#searchLyricsButton").on("click", function () {
    var artistName = $("#artistName").val();
    var songTitle = $("#songTitle").val();
    event.preventDefault();
    findLyrics(artistName, songTitle);
    callItunesAPI(artistName);
})

// function to pull information from lyrics.ovh api and display on screen
function findLyrics(artistName, songTitle, outputLyrics) {
    var queryURL = "https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // console.log("current stuff", response.lyrics);
            var pullLyrics = response.lyrics;
            $("#output").prepend(pullLyrics);
            // include an empty method to remove previous searches. 
        })
}

// function clearSavorites() {
// }

function callItunesAPI() {
    var artist
    for (var i = 0; i < resultsArray.length; i++) {
        var artistNameFromArray = resultsArray[i]
        var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://itunes.apple.com/search?term=" + artistNameFromArray + "&limit=1";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var result = JSON.parse(response).results;
                artist = {
                    name: result[0].artistName,
                    genre: result[0].primaryGenreName,
                    imageURL: result[0].artworkUrl100,
                    songName: result[0].trackName,
                    songURL: result[0].previewUrl
                };
            });
    };
}
