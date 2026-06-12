async function getWeather(){

const city =
document.getElementById("city").value;

const apiKey =
"00576cf364846716d1c7e5126b073d3e";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response =
await fetch(url);

const data =
await response.json();

document
.getElementById("weather")
.innerHTML=

`
<h2>${data.name}</h2>

<p>
🌡 Temperature:
${data.main.temp}°C
</p>

<p>
☁ Weather:
${data.weather[0].main}
</p>

<p>
💧 Humidity:
${data.main.humidity}%
</p>
`;

}

catch(error){

document
.getElementById("weather")
.innerHTML=
"City not found";

}

}