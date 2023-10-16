const API_KEY = '481b307882ce8a4efb0cf18ecb73f6dd';
const UpdateTime = 60000;
let isLock = false;

function change(cityValue) {
    city = cityValue;
    WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    updateWeather();
}
var city = 'Seoul';
var WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
const date = new Date();


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
    let korWeatherInfo;
    let weatherEng = ['Clouds' , 'Clear' , 'Rain' , 'Snow' , 'Fog'];
    let weatherKor = ['흐림' , '맑음' , '비' , '눈' , '안개'];

    if(weatherEng.includes(EngWeatherInfo)){
        for(i=0; i<weatherEng.length; i++){
            if(weatherEng[i]==EngWeatherInfo){
                korWeatherInfo = weatherKor[i];
                return korWeatherInfo;
            }
        }
    }else{
        korWeatherInfo = "지원하지않는 날씨";
        return korWeatherInfo;
    }

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

function weatherJPG(weatherinfo){
    let weatherKind = ['clouds' , 'clear' , 'rain' , 'snow'];
    const weatherBox = document.querySelector(".weatherbox");
    weatherBox.classList.remove('clouds', 'clear', 'rain', 'snow');
    let lowerWeatherinfo = weatherinfo.toLowerCase();

    if(weatherKind.includes(lowerWeatherinfo)){
        weatherBox.classList.add(lowerWeatherinfo);
    }else{
        weatherBox.classList.add('default');
    }
}

function updateWeather(){
    fetch(WeatherAPI).then(
        (response)=>{ 
            return response.json(); 
    })
    .then(json =>{
        weatherJPG(json.weather[0].main);
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
setInterval(updateWeather, UpdateTime);


// API를 통해 json 형식의 데이터를 받고 res 라는 매개변수에 저장하는데 res.json() 이 코드에서 json()이 함수를 통해 res 를 json
// 형식으로 변환해서 res 매개변수에 API 를 통해 받은 json형식의 파일을 저장한다.
// 그리고 나서 json1 이라는 변수는 res.json() 함수로 인해 반환된 json 형식의 데이터를 담고 있는것


