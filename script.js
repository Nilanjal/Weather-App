const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'efc7206b95mshe8eee6c9188723fp132429jsn53dea3a48b98',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = (city) =>
{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct 
        temp.innerHTML = response.temp 
        feels_like.innerHTML = response.feels_like 
        humidity.innerHTML = response.humidity 
        min_temp.innerHTML = response.min_temp 
        max_temp.innerHTML = response.max_temp 
        wind_speed.innerHTML = response.wind_speed 
        // wind_degrees.innerHTML = response.wind_degrees 
        sunrise.innerHTML = response.sunrise 
        sunset.innerHTML = response.sunset 
    })
    .catch(err => console.error(err));
}
// Submit.addEventListner("click", (e)=>{
//     getweather(city.value)
// })

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("delhi");


//----------------------------------------- common cities data ---------------------------------


const get_w1 = ()=>
{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
    .then(response => response.json())
    .then((response) => {
        
        
        console.log(response)
        c_p.innerHTML = response.c_p
        f_l.innerHTML = response.f_l
        hu.innerHTML = response.hu
        ma_t.innerHTML = response.ma_t
        mi_t.innerHTML = response.mi_t
        sr.innerHTML = response.sr
        ss.innerHTML = response.ss
        te.innerHTML = response.te
        w_d.innerHTML = response.w_d
        w_s.innerHTML = response.w_s
        
    })
    .catch(err => console.error(err));
}

get_w1();