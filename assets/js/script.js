$(document).ready(function() {
    
    function searchInfo() {
        var city = $(".searchText").val();
        // var city = "Arcadia";

        // Calls current day weather info ============
        $.ajax({
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=927111b528d2a9c2df44804564767062",
          method: "GET"
        }).then(function(response) {
            // console.log(response);
            var nameDiv = $("#currentName");
            var tempDiv = $("#currentTemp");
            var humidDiv = $("#currentHumid");
            var windDiv = $("#currentWind");

            // Displays current city Name, Date and Weather Icon
            var name = response.name;
            var currentDate = moment().format("l");
            $("#currentName").text(name + " (" + currentDate + ")");
            var todayIconDiv = $("<img>");
            var todayCode = response.weather[0].icon;
            var todayurl = "http://openweathermap.org/img/w/" + todayCode + ".png";
            todayIconDiv.attr('src', todayurl);
            todayIconDiv.attr('alt', 'Weather Icon');
            nameDiv.append(todayIconDiv);

            // Displays current temperature converted from K
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $("#currentTemp").text("Temperature: " + tempF.toFixed(1) + " ℉");

            // Displays current humidity
            var humid = response.main.humidity;
            $("#currentHumid").text("Humidity: " + humid + "%");

            // Displays current wind speed
            var wind = response.wind.speed;
            $("#currentWind").text("Wind Speed: " + wind + " MPH");
            
            // Displays UV Index
            var lat = response.coord.lat;
            var lon = response.coord.lon;

            $.ajax({
              url: "https://api.openweathermap.org/data/2.5/uvi?appid=927111b528d2a9c2df44804564767062&lat=" + lat + "&lon=" + lon,
              method: "GET"
            }).then(function(response) {
                var uvDiv = $("#uv");
                var uv = response.value;
                $("#uv").text("UV Index: " + uv);

                if (uv < 3) {
                    uvDiv.attr("style", "background-color: green");
                } else if (uv >= 3 && uv < 8) {
                    uvDiv.attr("style", "background-color: orange");
                } else {
                    uvDiv.attr("style", "background-color: red");
                }
            });
        });

            
        // ============ Calls future forecast info ============
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=927111b528d2a9c2df44804564767062",         
            method: "GET"
        }).then(function(response) {
            var title = $("#forecastTitle");
            var day1Div = $("#day1");
            var day2Div = $("#day2");
            var day3Div = $("#day3");
            var day4Div = $("#day4");
            var day5Div = $("#day5");
            day1Div.empty();
            day2Div.empty();
            day3Div.empty();
            day4Div.empty();
            day5Div.empty();

            // console.log(response);
            title.text("5-Day Forecast:");


        // = = = = = Forecast day 1 Info = = = = = = = = = = = = = = = = = = = 
            var day1Date = response.list[2].dt_txt;
            day1Div.append(day1Date);

            var icon1Div = $("<img>");
            var code1 = response.list[2].weather[0].icon;
            var icon1url = "http://openweathermap.org/img/w/" + code1 + ".png";
            icon1Div.attr('src', icon1url);
            icon1Div.attr('alt', 'Weather Icon');
            day1Div.append(icon1Div);

            var day1tempF = (response.list[2].main.temp - 273.15) * 1.80 + 32;
            var tempDiv1 = $("<div>").text("Temp: " + day1tempF.toFixed(2) + " ℉");
            day1Div.append(tempDiv1);


            var day1humid = response.list[2].main.humidity;
            var humidDiv1 = $("<div>").text("Humidity: " + day1humid + "%");
            day1Div.append(humidDiv1);

        // = = = = = Forecast day 2 Info = = = = = = = = = = = = = = = = = = = 
            var day2Date = response.list[10].dt_txt;
            day2Div.append(day2Date);

            var icon2Div = $("<img>");
            var code2 = response.list[10].weather[0].icon;
            var icon2url = "http://openweathermap.org/img/w/" + code2 + ".png";
            icon2Div.attr('src', icon2url);
            icon2Div.attr('alt', 'Weather Icon');
            day2Div.append(icon2Div);

            var day2tempF = (response.list[10].main.temp - 273.15) * 1.80 + 32;
            var tempDiv2 = $("<div>").text("Temp: " + day2tempF.toFixed(2) + " ℉");
            day2Div.append(tempDiv2);


            var day2humid = response.list[10].main.humidity;
            var humidDiv2 = $("<div>").text("Humidity: " + day2humid + "%");
            day2Div.append(humidDiv2);

        // = = = = = Forecast day 3 Info = = = = = = = = = = = = = = = = = = = 
            var day3Date = response.list[18].dt_txt;
            day3Div.append(day3Date);

            var icon3Div = $("<img>");
            var code3 = response.list[18].weather[0].icon;
            var icon3url = "http://openweathermap.org/img/w/" + code3 + ".png";
            icon3Div.attr('src', icon3url);
            icon3Div.attr('alt', 'Weather Icon');
            day3Div.append(icon3Div);

            var day3tempF = (response.list[18].main.temp - 273.15) * 1.80 + 32;
            var tempDiv3 = $("<div>").text("Temp: " + day3tempF.toFixed(2) + " ℉");
            day3Div.append(tempDiv3);

            var day3humid = response.list[18].main.humidity;
            var humidDiv3 = $("<div>").text("Humidity: " + day3humid + "%");
            day3Div.append(humidDiv3);

        // = = = = = Forecast day 4 Info = = = = = = = = = = = = = = = = = = = 
            var day4Date = response.list[26].dt_txt;
            day4Div.append(day4Date);

            var icon4Div = $("<img>");
            var code4 = response.list[26].weather[0].icon;
            var icon4url = "http://openweathermap.org/img/w/" + code4 + ".png";
            icon4Div.attr('src', icon4url);
            icon4Div.attr('alt', 'Weather Icon');
            day4Div.append(icon4Div);

            var day4tempF = (response.list[26].main.temp - 273.15) * 1.80 + 32;
            var tempDiv4 = $("<div>").text("Temp: " + day4tempF.toFixed(2) + " ℉");
            day4Div.append(tempDiv4);

            var day4humid = response.list[26].main.humidity;
            var humidDiv4 = $("<div>").text("Humidity: " + day4humid + "%");
            day4Div.append(humidDiv4);

        // = = = = = Forecast day 5 Info = = = = = = = = = = = = = = = = = = = 
            var day5Date = response.list[34].dt_txt;
            day5Div.append(day5Date);

            var icon5Div = $("<img>");
            var code5 = response.list[34].weather[0].icon;
            var icon5url = "http://openweathermap.org/img/w/" + code5 + ".png";
            icon5Div.attr('src', icon5url);
            icon5Div.attr('alt', 'Weather Icon');
            day5Div.append(icon5Div);

            var day5tempF = (response.list[34].main.temp - 273.15) * 1.80 + 32;
            var tempDiv5 = $("<div>").text("Temp: " + day5tempF.toFixed(2) + " ℉");
            day5Div.append(tempDiv5);

            var day5humid = response.list[34].main.humidity;
            var humidDiv5 = $("<div>").text("Humidity: " + day5humid + "%");
            day5Div.append(humidDiv5);
    
            
        });
    }

    // = = = = Generates new buttons for previously searched cities = = = = 
    function addCityButton() {
        var city = $(".searchText").val();
        var newBtn = $("<button>");
            newBtn.attr("font-size", "30px");
        newBtn.addClass("history");
        newBtn.text(city);
        $("#cityHistory").append(newBtn);

    }


    // Same code as displayInfo but displays previously searched city info
    // function historyInfo() {
    $(".history").on("click", function() {
        var city = $(this).text();
        console.log(city);

        // Calls current day weather info ============
        $.ajax({
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=927111b528d2a9c2df44804564767062",
          method: "GET"
        }).then(function(response) {
            // console.log(response);
            var nameDiv = $("#currentName");
            var tempDiv = $("#currentTemp");
            var humidDiv = $("#currentHumid");
            var windDiv = $("#currentWind");

            // Displays current city Name, Date and Weather Icon
            var name = response.name;
            var currentDate = moment().format("l");
            $("#currentName").text(name + " (" + currentDate + ")");
            var todayIconDiv = $("<img>");
            var todayCode = response.weather[0].icon;
            var todayurl = "http://openweathermap.org/img/w/" + todayCode + ".png";
            todayIconDiv.attr('src', todayurl);
            todayIconDiv.attr('alt', 'Weather Icon');
            nameDiv.append(todayIconDiv);

            // Displays current temperature converted from K
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $("#currentTemp").text("Temperature: " + tempF.toFixed(1) + " ℉");

            // Displays current humidity
            var humid = response.main.humidity;
            $("#currentHumid").text("Humidity: " + humid + "%");

            // Displays current wind speed
            var wind = response.wind.speed;
            $("#currentWind").text("Wind Speed: " + wind + " MPH");
            
            // Displays UV Index
            var lat = response.coord.lat;
            var lon = response.coord.lon;

            $.ajax({
              url: "https://api.openweathermap.org/data/2.5/uvi?appid=927111b528d2a9c2df44804564767062&lat=" + lat + "&lon=" + lon,
              method: "GET"
            }).then(function(response) {
                var uvDiv = $("#uv");
                var uv = response.value;
                $("#uv").text("UV Index: " + uv);

                if (uv < 3) {
                    uvDiv.attr("style", "background-color: green");
                } else if (uv >= 3 && uv < 8) {
                    uvDiv.attr("style", "background-color: orange");
                } else {
                    uvDiv.attr("style", "background-color: red");
                }
            });
        });

            
        // ============ Calls future forecast info ============
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=927111b528d2a9c2df44804564767062",         
            method: "GET"
        }).then(function(response) {
            var title = $("#forecastTitle");
            var day1Div = $("#day1");
            var day2Div = $("#day2");
            var day3Div = $("#day3");
            var day4Div = $("#day4");
            var day5Div = $("#day5");
            day1Div.empty();
            day2Div.empty();
            day3Div.empty();
            day4Div.empty();
            day5Div.empty();

            // console.log(response);
            title.text("5-Day Forecast:");


        // = = = = = Forecast day 1 Info = = = = = = = = = = = = = = = = = = = 
            var day1Date = response.list[2].dt_txt;
            day1Div.append(day1Date);

            var icon1Div = $("<img>");
            var code1 = response.list[2].weather[0].icon;
            var icon1url = "http://openweathermap.org/img/w/" + code1 + ".png";
            icon1Div.attr('src', icon1url);
            icon1Div.attr('alt', 'Weather Icon');
            day1Div.append(icon1Div);

            var day1tempF = (response.list[2].main.temp - 273.15) * 1.80 + 32;
            var tempDiv1 = $("<div>").text("Temp: " + day1tempF.toFixed(2) + " ℉");
            day1Div.append(tempDiv1);


            var day1humid = response.list[2].main.humidity;
            var humidDiv1 = $("<div>").text("Humidity: " + day1humid + "%");
            day1Div.append(humidDiv1);

        // = = = = = Forecast day 2 Info = = = = = = = = = = = = = = = = = = = 
            var day2Date = response.list[10].dt_txt;
            day2Div.append(day2Date);

            var icon2Div = $("<img>");
            var code2 = response.list[10].weather[0].icon;
            var icon2url = "http://openweathermap.org/img/w/" + code2 + ".png";
            icon2Div.attr('src', icon2url);
            icon2Div.attr('alt', 'Weather Icon');
            day2Div.append(icon2Div);

            var day2tempF = (response.list[10].main.temp - 273.15) * 1.80 + 32;
            var tempDiv2 = $("<div>").text("Temp: " + day2tempF.toFixed(2) + " ℉");
            day2Div.append(tempDiv2);


            var day2humid = response.list[10].main.humidity;
            var humidDiv2 = $("<div>").text("Humidity: " + day2humid + "%");
            day2Div.append(humidDiv2);

        // = = = = = Forecast day 3 Info = = = = = = = = = = = = = = = = = = = 
            var day3Date = response.list[18].dt_txt;
            day3Div.append(day3Date);

            var icon3Div = $("<img>");
            var code3 = response.list[18].weather[0].icon;
            var icon3url = "http://openweathermap.org/img/w/" + code3 + ".png";
            icon3Div.attr('src', icon3url);
            icon3Div.attr('alt', 'Weather Icon');
            day3Div.append(icon3Div);

            var day3tempF = (response.list[18].main.temp - 273.15) * 1.80 + 32;
            var tempDiv3 = $("<div>").text("Temp: " + day3tempF.toFixed(2) + " ℉");
            day3Div.append(tempDiv3);

            var day3humid = response.list[18].main.humidity;
            var humidDiv3 = $("<div>").text("Humidity: " + day3humid + "%");
            day3Div.append(humidDiv3);

        // = = = = = Forecast day 4 Info = = = = = = = = = = = = = = = = = = = 
            var day4Date = response.list[26].dt_txt;
            day4Div.append(day4Date);

            var icon4Div = $("<img>");
            var code4 = response.list[26].weather[0].icon;
            var icon4url = "http://openweathermap.org/img/w/" + code4 + ".png";
            icon4Div.attr('src', icon4url);
            icon4Div.attr('alt', 'Weather Icon');
            day4Div.append(icon4Div);

            var day4tempF = (response.list[26].main.temp - 273.15) * 1.80 + 32;
            var tempDiv4 = $("<div>").text("Temp: " + day4tempF.toFixed(2) + " ℉");
            day4Div.append(tempDiv4);

            var day4humid = response.list[26].main.humidity;
            var humidDiv4 = $("<div>").text("Humidity: " + day4humid + "%");
            day4Div.append(humidDiv4);

        // = = = = = Forecast day 5 Info = = = = = = = = = = = = = = = = = = = 
            var day5Date = response.list[34].dt_txt;
            day5Div.append(day5Date);

            var icon5Div = $("<img>");
            var code5 = response.list[34].weather[0].icon;
            var icon5url = "http://openweathermap.org/img/w/" + code5 + ".png";
            icon5Div.attr('src', icon5url);
            icon5Div.attr('alt', 'Weather Icon');
            day5Div.append(icon5Div);

            var day5tempF = (response.list[34].main.temp - 273.15) * 1.80 + 32;
            var tempDiv5 = $("<div>").text("Temp: " + day5tempF.toFixed(2) + " ℉");
            day5Div.append(tempDiv5);

            var day5humid = response.list[34].main.humidity;
            var humidDiv5 = $("<div>").text("Humidity: " + day5humid + "%");
            day5Div.append(humidDiv5);
    
            
        });
    })

    $(document).on("click", ".searchBtn", searchInfo);
    $(document).on("click", ".searchBtn", addCityButton);
    // $(document).on("click", ".historyBtn", historyInfo);


});
