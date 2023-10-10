const API_KEY = '481b307882ce8a4efb0cf18ecb73f6dd';
let city = '';

let AnyWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
let SeoulWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`;
const tenHours = 10 * 60 * 60 * 1000;
const oneHours = 1 * 60 * 60 * 1000;

const now = new Date();

function updateWeather(){
    fetch(SeoulWeatherAPI).then(
        (response)=>{ 
            return response.json(); 
    })
    .then(json =>{
        Dayday = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]
        
        let cityKorea = json.name;
        let feeltemp = json.main.feels_like;
        let temperatureValue = json.main.temp;
        let weatherinfo = json.weather[0].main;
        let dayOfWeek = now.getDay();
        let sunriseUnixTime = json.sys.sunrise;
        for(i=0; i<7; i++){
            if(i==dayOfWeek){
                dayOfWeek = Dayday[i];
                break;
            }
        }

        if(cityKorea=="Seoul"){
            cityKorea = "서울";
        }

        if(weatherinfo=="Clouds"){
            weatherinfo = "흐림";
        }else if(weatherinfo=="Clear"){
            weatherinfo = "맑음";
        }
        document.querySelector(".dayoftheweek").innerHTML = dayOfWeek;
        document.querySelector(".location").innerHTML = cityKorea;
        document.getElementById("temperature").innerHTML = Math.floor(temperatureValue);
        document.querySelector(".weatherinfo").innerHTML = weatherinfo;
        document.querySelector(".feeltempresult").innerHTML = feeltemp.toFixed(1) + "℃";
    })
}

fetch(SeoulWeatherAPI).then(
    (response)=>{
        return response.json();
    })
    .then(json=>{
        let sunriseUnixTime = json.sys.sunrise;
        const sunriseDate = new Date(sunriseUnixTime * 1000);
        const sunriseHours = sunriseDate.getHours().toString().padStart(2, '0');
        const sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
        const sunrise = `${sunriseHours}:${sunriseMinutes}`;
        document.querySelector(".sunriseresult").innerHTML = sunrise;
    })


updateWeather();
setInterval(updateWeather, 1000);

function getDate(){
    var todayDate = 
    `${ now.getFullYear() }년 ${ now.getMonth() + 1 }월 ${ now.getDate() }일`
    document.querySelector(".yearmonthday").innerHTML = todayDate;
}

getDate();
setInterval(getDate,oneHours);


function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    // const seconds = date.getSeconds().toString().padStart(2, '0');
    // return `${hours}:${minutes}:${seconds}`;
    return `${hours} : ${minutes}`;
}

setInterval(() => {
    const currentTime = updateTime();
    document.getElementById('time').innerText = currentTime;
}, 1000);


function sunriseTime(){
    let unix_timestamp = json.sys.sunrise;
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.toString(-2) + ':' + seconds.toString(-2);
}
// API를 통해 json 형식의 데이터를 받고 res 라는 매개변수에 저장하는데 res.json() 이 코드에서 json()이 함수를 통해 res 를 json
// 형식으로 변환해서 res 매개변수에 API 를 통해 받은 json형식의 파일을 저장한다.
// 그리고 나서 json1 이라는 변수는 res.json() 함수로 인해 반환된 json 형식의 데이터를 담고 있는것


