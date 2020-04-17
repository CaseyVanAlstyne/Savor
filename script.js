var searchButton = $("#mainSearchButton");

$("#mainSearchButton").on("click", function () {
    event.preventDefault();
    var userChoice = searchButton.val().trim();
    pullApiNAMEHERE(userChoice);
})

function pullApiNAMEHERE(userChoice) {
    // empty the prepended data
    $("#resultSnippet").empty();
    var queryURL = "" + userChoice + "API KEY";
    // trying to get Spotify for the related artist API. 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log("current stuff", response);
            var searchName = response.name;
            console.log(searchName);

            // var weatherDiv = $("<div>");

            // var mainContainer = $("<div>").addClass("jumbotron")
            // var p0 = $("<div>").addClass("card").text("This is what you searched for: " + searchName);
            // var p = $("<div>").addClass("card").text("Current Temperature: " + searchTemp);
            // var p1 = $("<div>").addClass("card").text("It currently feels like: " + searchFeelsLike);
            // var p2 = $("<div>").addClass("card").text("The minimum temperature is " + searchTempMin);
            // var p3 = $("<div>").addClass("card").text("The maximum temperature is " + searchTempMax);
            // var p4 = $("<div>").addClass("card").text("The humidity level is " + searchHumidity);
            // var p5 = $("<div>").addClass("card").text("This is where you currently are. I need to access this information in another function/api call, but can't figure it out. " + JSON.stringify(searchLonLat));

            // mainContainer.append(p0, p, p1, p2, p3, p4, p5);
            // weatherDiv.append(mainContainer);

            // $("#resultSnippet").prepend(weatherDiv);
        })
}