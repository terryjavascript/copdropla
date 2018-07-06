

$("#submit").on("click", function(e) {

    e.preventDefault();
       
    var zip = $("#zip").val().trim();
    console.log(zip)

    var APIKey = "069e6c29b01864f920d606bdc0cccc3e";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "zip=" + zip + ",us&units=imperial&appid=" + APIKey;

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {

            console.log(queryURL);

            console.log(response);

            function weatherChecker() {
                let temp = response.main.temp;
                if (temp > 65 && temp < 120) {
                    $("body").css("background-image", "url('assets/images/change3.png')");
                    hotweatherDiv();
                    
                } else if (temp > 30 && temp < 65) {
                    $("body").css("background-image", "url('assets/images/change4.png')");
                    coldweatherDiv();
                    
                }
            };



   
            function hotweatherDiv() {
                $(".weather-box").empty();
                var hotDiv = $("<div>").addClass("hot");
                var sunSpan = $("<span>").addClass("sun");
                var sunxSpan = $("<span>").addClass("sunx");
                var weatherAreaDiv = $("<div>").addClass("weather-area");
                var appendAll = hotDiv.append(sunSpan, sunxSpan, weatherAreaDiv);
                $(".weather-box").fadeIn("slow");
                $(".weather-box").append(appendAll);
                createWeatherArea();

            }

            function coldweatherDiv() {
                $(".weather-box").empty();
                var stormyDiv = $("<div>").addClass("stormy");
                var li = $("<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>");
                var ul = $("<ul>").append(li);
                var snoweSpan = $("<span>").addClass("snowe");
                var snowexSpan = $("<span>").addClass("snowex");
                var stickSpan = $("<span>").addClass("stick");
                var stick2Span = $("<span>").addClass("stick2");
                var weatherAreaDiv = $("<div>").addClass("weather-area");
                var appendAll = stormyDiv.append(ul, snoweSpan, snowexSpan, stickSpan, stick2Span, weatherAreaDiv);
                
                $(".weather-box").append(appendAll);
                $(".stormy").fadeIn("slow");

                createWeatherArea();

            }


            function createWeatherArea() {

                $(".weather-area").empty();
                var weatherDetails = ["city", "icon", "temp"];
                for (var i = 0; i < weatherDetails.length; i++) {
                    var div = $("<div>");
                    div.addClass("weather-details");
                    div.attr('id', weatherDetails[i]);
                    $(".weather-area").append(div);


                }
                showWeather();

            }

            function showWeather() {
                var cityName = response.name;
                var iconUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
                var weatherIcon = $("<img>").attr("src", iconUrl).attr("width", "auto").attr("height", "75px");
                var tempValue = response.main.temp + "&#730F"
                var temp = $("<p>").addClass("temp-font").html(tempValue);
                $("#city").append(cityName);
                $("#icon").append(weatherIcon);
                $("#temp").append(temp);
            }



            weatherChecker();


        });
});
