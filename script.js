var searchButton = $("#searchLyricsButton");
var outputLyrics = $("#output");

// onclick function for main search button
$("#searchLyricsButton").on("click", function () {
    var artistName = $("#artistName").val();
    var songTitle = $("#songTitle").val();
    event.preventDefault();
    findLyrics(artistName, songTitle);
})

// function to pull information from lyrics.ovh api and display on screen
function findLyrics(artistName, songTitle, outputLyrics) {
    var queryURL = "https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log("current stuff", response.name);
            var pullLyrics = response;
            $("#output").prepend(pullLyrics);
        })
}

// $.get("https://api.lyrics.ovh/v1/" + document.getElementById("artistName").value + "/" + document.getElementById("songTitle").value,
            //     function (data) {
            //         document.getElementById("output").innerHTML = data.lyrics.replace(new RegExp("\n", "g"), "<br>")
            //     })