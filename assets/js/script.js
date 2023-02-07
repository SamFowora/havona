// declaring variables
const APIkey ="e654a6edc78cc464ebcc23d06567c599";
const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + APIkey;
const todayDate = moment().format('l');


// city search
var city = $("#search-input").val();
    //event listener for the click 

// setting up get request + weather request function
function weatherRequest() {

    $.ajax({
        url: queryURL,
    method: "GET"
})

.then(function(response) {
    var results = response.data;
    console.log(queryURL);
    console.log(response);
})
}

// find a way to exclusively display today's data on the screen

// find a way to get data for next 5 days
    // then find how to display

// list of search history as buttons
    // prepend results so users can see most recent searches higher up
    // adding list attribute [var li =... attr()]?
    // once listed, find how to limit how many appear on screen