$(document).ready(function () {

    var searchButton = $("#searchLyricsButton");
    var outputLyrics = $("#outputSearch");

    // onclick function for main search button
    $("#searchLyricsButton").on("click", function () {
        var artistName = $("#artistName").val();
        var songTitle = $("#songTitle").val();
        event.preventDefault();
        findLyrics(artistName, songTitle);
        callItunesAPI(artistName);
    })

    // function to pull information from lyrics.ovh api and display on screen
    function findLyrics(artistName, songTitle) {
        var queryURL = "https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                // console.log("current stuff", response.lyrics);
                var pullLyrics = response.lyrics;
                $("#outputSearch").prepend(pullLyrics);
                // include an empty method to remove previous searches. 
            })
    }

    function callItunesAPI(artistName) {
        console.log("hey i ran out of ideas")
        var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://itunes.apple.com/search?term=" + artistName + "&limit=1";
        $.ajax({
            url: queryURL,
            method: "GET",
        })
            .then(function (response) {
                console.log("hey no")
                var result = JSON.parse(response).results;
                artist = {
                    name: result[0].artistName,
                    // genre: result[0].primaryGenreName,
                    imageURL: result[0].artworkUrl100,
                    // songName: result[0].trackName,
                    // songURL: result[0].previewUrl
                };
                console.log("current log", result)
                // $("#imageOutput").prepend(result);
            });
    }
})

