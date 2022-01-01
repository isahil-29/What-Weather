const API_key = '166440dc114c68a2a00a7f0c8a71a29b'

window.onload = function() {
    var startPos;
    
    var geoSuccess = function(position){
        startPos = position;
        console.log(startPos)

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=${API_key}`)



            .then((data) => data.json())

             .then((jsonData) => {
                    console.log(jsonData)
                    // console.log(jsonData.main.temp)
                    // console.log(jsonData.main.feels_like)
                    // console.log(jsonData.weather[0].description)


    
                    document.getElementById("text_location").innerHTML = jsonData.name
                    document.getElementById("text_location_country").innerHTML = jsonData.sys.country
                    document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp)
                    document.getElementById("text_feelslike").innerHTML = Math.round(jsonData.main.feels_like)
                    document.getElementById("text_desc").innerHTML = jsonData.weather[0].description
                })

    };

    navigator.geolocation.getCurrentPosition(geoSuccess);
        
}