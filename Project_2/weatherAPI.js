const API_KEY = '481b307882ce8a4efb0cf18ecb73f6dd';
let city = '';
let AnyWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

let SeoulWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`;
fetch(SeoulWeatherAPI).then(
    (res)=>{ 
        return res.json(); 
})
.then(json1 =>{
    let temper = json1.main.temp;
    document.getElementById("temp").innerHTML = Math.floor(temper) + "°";
    // console.log(json.main.temp);
})




function getWeatherTemp(){
    fetch(WeatherAPI)
        .then(function(res){
            return res.json();
        })
        .then(json =>{
            document.getElementById("temp").innerHTML = json.main.temp;
            // console.log(json.main.temp);
        })
}
