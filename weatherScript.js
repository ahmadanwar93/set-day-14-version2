var currentDate = document.getElementById("date");
var currentTime = document.getElementById("time");
var maxTemp = document.getElementById('temperatureMax');
var minTemp = document.getElementById('temperatureMin');
var futureDaysContainer = document.getElementById("futureDaysContainer");

var apiKey = "304338ed9e6c5a2ee6a0aeb3ccb5773f"
;

var positionLocationLongLatObj = {"Kuala Lumpur":[3.0623, 101.7113],"Penang":[5.3768, 100.2585],"Sarawak":[2.5,113.5],"Sabah":[5.5,117],"Johor":[2,103.5]};


// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
// }else{
//     alert('Your browser not supported geolocation');
// }

// function showPosition(position){
//     console.log("my position is ", position);
//     callWeatherApi(position);
// }

// (`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}`)

function callWeatherApi(pos){

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos[0]}&lon=${pos[1]}&appid=${apiKey}`).then(res => res
    .json())
    .then(data => {
        console.log(data);

        // for day one
        var minTempFutureDayOne = document.getElementById("minTempFutureDayOne");
        var maxTempFutureDayOne = document.getElementById("maxTempFutureDayOne");
        var weatherIconFutureDayOne = document.getElementById("weatherIconFutureDayOne");
        var windSpeedTextFutureDayOne = document.getElementById("windSpeedTextFutureDayOne");
        var weatherFutureDescriptionDayOne = document.getElementById("weatherFutureDescriptionDayOne");



    
        // asssign value to elements created
        minTempFutureDayOne.innerHTML = (data.daily[1].temp.min- 273.15).toFixed(1)  + '&deg;C';
        maxTempFutureDayOne.innerHTML = (data.daily[1].temp.max- 273.15).toFixed(1)  + '&deg;C';
        weatherIconFutureDayOne.src = `http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}.png`;
        weatherFutureDescriptionDayOne.innerHTML = data.daily[1].weather[0].description;
        windSpeedTextFutureDayOne.innerHTML = data.daily[1].wind_speed + "m/s";

        // for day two
        var minTempFutureDayTwo = document.getElementById("minTempFutureDayTwo");
        var maxTempFutureDayTwo = document.getElementById("maxTempFutureDayTwo");
        var weatherIconFutureDayTwo = document.getElementById("weatherIconFutureDayTwo");
        var windSpeedTextFutureDayTwo = document.getElementById("windSpeedTextFutureDayTwo");
        var weatherFutureDescriptionDayTwo = document.getElementById("weatherFutureDescriptionDayTwo");

           
        // asssign value to elements created
        minTempFutureDayTwo.innerHTML = (data.daily[2].temp.min - 273.15).toFixed(1)  + '&deg;C';
        maxTempFutureDayTwo.innerHTML = (data.daily[2].temp.max- 273.15).toFixed(1)  + '&deg;C';
        weatherIconFutureDayTwo.src = `http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}.png`;
        weatherFutureDescriptionDayTwo.innerHTML = data.daily[2].weather[0].description;
        windSpeedTextFutureDayTwo.innerHTML = data.daily[2].wind_speed + "m/s";

        // for day three
        var minTempFutureDayThree = document.getElementById("minTempFutureDayThree");
        var maxTempFutureDayThree = document.getElementById("maxTempFutureDayThree");
        var weatherIconFutureDayThree = document.getElementById("weatherIconFutureDayThree");
        var windSpeedTextFutureDayThree = document.getElementById("windSpeedTextFutureDayThree");
        var weatherFutureDescriptionDayThree = document.getElementById("weatherFutureDescriptionDayThree");

           
        // asssign value to elements created
        minTempFutureDayThree.innerHTML = (data.daily[3].temp.min- 273.15).toFixed(1)  + '&deg;C';
        maxTempFutureDayThree.innerHTML = (data.daily[3].temp.max- 273.15).toFixed(1)  + '&deg;C';
        weatherIconFutureDayThree.src = `http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}.png`;
        weatherFutureDescriptionDayThree.innerHTML = data.daily[3].weather[0].description;
        windSpeedTextFutureDayThree.innerHTML = data.daily[3].wind_speed + "m/s";

        // for day four
        var minTempFutureDayFour = document.getElementById("minTempFutureDayFour");
        var maxTempFutureDayFour = document.getElementById("maxTempFutureDayFour");
        var weatherIconFutureDayFour = document.getElementById("weatherIconFutureDayFour");
        var windSpeedTextFutureDayFour = document.getElementById("windSpeedTextFutureDayFour");
        var weatherFutureDescriptionDayFour = document.getElementById("weatherFutureDescriptionDayFour");

           
        // asssign value to elements created
        minTempFutureDayFour.innerHTML = (data.daily[4].temp.min- 273.15).toFixed(1)  + '&deg;C';
        maxTempFutureDayFour.innerHTML = (data.daily[4].temp.max- 273.15).toFixed(1)  + '&deg;C';
        weatherIconFutureDayFour.src = `http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}.png`;
        weatherFutureDescriptionDayFour.innerHTML = data.daily[4].weather[0].description;
        windSpeedTextFutureDayFour.innerHTML = data.daily[4].wind_speed + "m/s";

        // for day five
        var minTempFutureDayFive = document.getElementById("minTempFutureDayFive");
        var maxTempFutureDayFive = document.getElementById("maxTempFutureDayFive");
        var weatherIconFutureDayFive = document.getElementById("weatherIconFutureDayFive");
        var windSpeedTextFutureDayFive = document.getElementById("windSpeedTextFutureDayFive");
        var weatherFutureDescriptionDayFive = document.getElementById("weatherFutureDescriptionDayFive");

           
        // asssign value to elements created
        minTempFutureDayFive.innerHTML = (data.daily[5].temp.min- 273.15).toFixed(1)  + '&deg;C';
        maxTempFutureDayFive.innerHTML = (data.daily[5].temp.max- 273.15).toFixed(1)  + '&deg;C';
        weatherIconFutureDayFive.src = `http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}.png`;
        weatherFutureDescriptionDayFive.innerHTML = data.daily[5].weather[0].description;
        windSpeedTextFutureDayFive.innerHTML = data.daily[5].wind_speed + "m/s";


        
        });
}

function currentApi(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data =>{
        console.log('current city',data);

        var timeZone = data.timezone;
        var humidity = data.main.humidity;
        var temperature = data.main.temp - 273.15;
        var windSpeed = data.wind.speed;
        var maxTempVal = data.main.temp_max - 273.15;
        var minTempVal = data.main.temp_min - 273.15;
        var windSpeedVal = data.wind.speed;
        var iconLink = data.weather[0].icon;

        
        


        var temperatureText = document.getElementById("temperatureOne");
        var country = document.getElementById("country1");
        var cityText = document.getElementById("city1");
        var humidityText = document.getElementById("humidityText");
        var windSpeedText = document.getElementById("windSpeedText");
        var weatherIcon = document.getElementById("weatherIcon");
        

        var dateTime = moment().utc(data.dt).format('MMMM Do YYYY, h:mm:ss a');
        // console.log(temperature.toFixed(0));

        temperatureText.innerHTML = temperature.toFixed(1);
        // country.innerHTML = timeZone;
        minTemp.innerHTML = minTempVal.toFixed(1);
        maxTemp.innerHTML = maxTempVal.toFixed(1);
        cityText.innerHTML = data.name;

        // console.log(data.name);
        windSpeedText.innerHTML = "Wind Speed: "+ windSpeedVal + ' m/s';
        humidityText.innerHTML = "Humidity: "+humidity + "%";
        weatherIcon.src = `http://openweathermap.org/img/wn/${iconLink}.png`;


        // trigger onecall API
        
        for (var position in positionLocationLongLatObj) {
            if (position == data.name){
                console.log(data.name);
                console.log(positionLocationLongLatObj[data.name]);
                callWeatherApi(positionLocationLongLatObj[data.name]);
            }
}


        
    })
}

currentApi("Kuala Lumpur");



var day = document.getElementById("day");
var date = document.getElementById("date");
var time = document.getElementById("time");

function getDateTime(){
    day.innerHTML = moment().format('dddd');
    date.innerHTML = moment().format("MMM Do YYYY");
    time.innerHTML = moment().format('h:mm a');

    
}

setInterval(updateTime, 6000);

function updateTime(){
    time.innerHTML = moment().format('h:mm a');
}



