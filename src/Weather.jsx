import { useState } from "react"
import axios from "axios";

function Weather()
 {
    const [city,setcity]=useState ("")

    const [weather,setweather] =useState("")
    const [temp,settemp]=useState("")
    const [des,setdes]=useState("")

    function handleCity(evt)
    {
        setcity(evt.target.value)

    }
    function getWeather()
    {
        var Weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2138b2476c4a72d06a65f74c8b8cdc1`)

        Weatherdata.then(function(success){
            console.log(success)
            setweather(success.data.weather[0].main)
            setdes(success.data.weather[0].description)
            settemp(success.data.main.temp)


        })
    }
    return (
        <div className="bg-slate-400 p-20 ">
            <div className="bg-blue-500 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I Can give you a Weather report about your city !</p>
                <input onChange={handleCity} type='text' className='mt-2 border border-black rounded-md' /><br />
                <button onClick={getWeather} className='bg-blue-500 text-black p-2 rounded-md m-2'>Get Report</button>

                <div className="mt-2 text-1xl font-medium">
                    <h1>weather: {weather}</h1>
                    <p>Temperature:{temp}</p>
                    <p>Description:{des}</p>

                </div>
            </div>
        </div>

    )
}
export default Weather