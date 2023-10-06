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

// API를 통해 json 형식의 데이터를 받고 res 라는 매개변수에 저장하는데 res.json() 이 코드에서 json()이 함수를 통해 res 를 json
// 형식으로 변환해서 res 매개변수에 API 를 통해 받은 json형식의 파일을 저장한다.
// 그리고 나서 json1 이라는 변수는 res.json() 함수로 인해 반환된 json 형식의 데이터를 담고 있는것



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
