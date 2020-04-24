$(document).ready(function () {
  var searchButton = $("#searchLyricsButton");
  var outputLyrics = $("#outputSearch");

  // onclick function for main search button
  $("#searchLyricsButton").on("click", function () {
    var artistName = $(".artistName").val();
    var songTitle = $(".songTitle").val();
    if (artistName === "" && songTitle === "") {
      return;
    } else {
      $("#outputSearch").empty();
      $("#lyricContainer").removeClass("hide").addClass("show");
      $("#artistContainer").removeClass("hide").addClass("show");
      event.preventDefault();
      findLyrics(artistName, songTitle);
      callItunesAPI(artistName, songTitle);
      $("#icon_prefix").val("");
      $("#icon_telephone").val("");
    }
  });

  // function to pull information from lyrics.ovh api and display on screen
  function findLyrics(artistName, songTitle) {
    var queryURL = "https://api.lyrics.ovh/v1/" + artistName + "/" + songTitle;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //console.log("current stuff", response.lyrics);
      var pullLyrics = response.lyrics.replace(new RegExp("\n", "g"), "<br>");
      $("#outputSearch").prepend(pullLyrics);
    });
  }

  function callItunesAPI(artistName, songTitle) {
    var queryURL =
      "https://cors-anywhere.herokuapp.com/" + "https://itunes.apple.com/search?term=" + artistName + "/" + songTitle + "&type=songs&limit=1";
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var result = JSON.parse(response).results;
      artist = {
        name: result[0].artistName,
        genre: result[0].primaryGenreName,
        imageURL: result[0].artworkUrl100,
        artistViewUrl: result[0].artistViewUrl,
        songName: result[0].trackName,
        // songURL: result[0].previewUrl
      };
      // console.log("current log", result)
      // console.log("this is 100", result[0].artworkUrl100)
      // console.log("this is artist view url", result[0].artistViewUrl)
      $("#artistInfo").attr("href", result[0].artistViewUrl);
      $("#imageOutput").attr("src", result[0].artworkUrl100);
      $("#imageOutput").attr("alt", result[0].artistName);
      $(".artistNameInfo").text("Artist Name: " + artist.name);
      $(".genreNameInfo").text("Genre: " + artist.genre);
      $(".trackNameInfo").text("Song: " + artist.songName);
      $("#artistInfo").text("Click here for " + artist.name + "'s information");
    });
  }
});