const API_KEY = '';
var city = 'Seoul';
var WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
function change(cityValue) {
    city = cityValue;
    WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    updateWeather();
}

const date = new Date();

let isLock = false;

function lock() {
    const weathersidebox = document.querySelector(".weathersidebox");
    const changelocationbutton = document.querySelector(".changelocationbutton");

    if (!isLock) {
        weathersidebox.style.transition = "transform 1s";
        weathersidebox.style.transform = "translateX(260px)";
        changelocationbutton.innerHTML = "고정 해제";
        isLock = true;
    } else {
        weathersidebox.style.transition = "transform 1s";
        weathersidebox.style.transform = "translateX(26px)";
        changelocationbutton.innerHTML = "고정";
        isLock = false;
    }
}


function dayOfTheWeek(){
    Day = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
    let getDayOfTheWeek = date.getDay();
    for(i=0; i<7; i++){
        if(i==getDayOfTheWeek){
            getDayOfTheWeek = Day[i];
            break;
        }
    }
    return getDayOfTheWeek;
}

function cityKorea(getCity){
    korean = ["서울","부산","제주","인천","오사카","런던","러시아"];
    eng = ["Seoul" , "Busan" , "Jeju City" , "Incheon" , "Osaka" , "London" , "Russia"];
    for(i=0; i<7; i++){
        if(getCity==eng[i]){
            getCity = korean[i];
        }
    }
    return getCity;


}

function weatherInfo(EngWeatherInfo){
    if(EngWeatherInfo=="Clouds"){
        EngWeatherInfo = "흐림";
    }else if(EngWeatherInfo=="Clear"){
        EngWeatherInfo = "맑음";
    }

    return EngWeatherInfo;
}

function sunriseUnixTime(SunriseUnix){
    const sunriseDate = new Date(SunriseUnix * 1000);
    const sunriseHours = sunriseDate.getHours().toString().padStart(2, '0');
    const sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
    const sunrise = `${sunriseHours}:${sunriseMinutes}`;

    return sunrise;
}

function getDate(){
    var todayDate = `${ date.getFullYear() }년 ${ date.getMonth() + 1 }월 ${ date.getDate() }일`
    return todayDate;
}

function getTime() {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    // const seconds = date.getSeconds().toString().padStart(2, '0'); 초(Second)를 구하는 코드

    let Nowtime = `${hours} : ${minutes}`;
    return Nowtime;
}
function weatherJPG() {
    fetch(WeatherAPI)
        .then((response) => response.json())
        .then((json) => {
            // const weatherMain = "Clear";
            const weatherMain = json.weather[0].main;
            const weatherBox = document.querySelector(".weatherbox");

            weatherBox.classList.remove('clouds', 'clear', 'rain', 'snow');

            if (weatherMain === "Clouds") {
                weatherBox.classList.add('clouds');
            } else if (weatherMain === "Clear") {
                weatherBox.classList.add('clear');
            } else if (weatherMain === "Rain") {
                weatherBox.classList.add('rain');
            } else if (weatherMain === "Snow") {
                weatherBox.classList.add('snow');
            }
        });
}

function updateWeather(){
    fetch(WeatherAPI).then(
        (response)=>{ 
            return response.json(); 
    })
    .then(json =>{
        weatherJPG();
        document.querySelector(".location").innerHTML = cityKorea(json.name);
        document.getElementById('time').innerText = getTime();
        document.querySelector(".yearmonthday").innerHTML = getDate();
        document.querySelector(".dayoftheweek").innerHTML = dayOfTheWeek();
        document.getElementById("temperature").innerHTML = Math.floor(json.main.temp);
        document.querySelector(".weatherinfo").innerHTML = weatherInfo(json.weather[0].main);
        document.querySelector(".feeltempresult").innerHTML = json.main.feels_like.toFixed(1) + "℃";
        document.querySelector(".sunriseresult").innerHTML = sunriseUnixTime(json.sys.sunrise);
       
    })
}

updateWeather();
setInterval(updateWeather, 1000);


// API를 통해 json 형식의 데이터를 받고 res 라는 매개변수에 저장하는데 res.json() 이 코드에서 json()이 함수를 통해 res 를 json
// 형식으로 변환해서 res 매개변수에 API 를 통해 받은 json형식의 파일을 저장한다.
// 그리고 나서 json1 이라는 변수는 res.json() 함수로 인해 반환된 json 형식의 데이터를 담고 있는것


