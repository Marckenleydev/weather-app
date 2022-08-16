
import './App.css';

import TopButton from './components/TopButton';
import Input from './components/Input';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import Forecast from './components/Forecast';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {getWeatherData, formatCurrentWeather,getFormatWeatherData } from "./services/weatherService"
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({ q: "istanbul" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);



useEffect(()=>{

  const message = query.q ? query.q : "current location.";
  toast.info("Fetching weather for " + message);

  const fetchWeather = async()=>{
    const data = await getFormatWeatherData({...query, units}).then((data)=>{
      setWeather(data);
    })
    console.log(data)
  }

  fetchWeather ()

  

},[query, units])

const formatBackground = ()=>{
  if (!weather) return "from-cyan-700 to-blue-700";
  const threshold = units === "metric" ? 50 : 60;
  if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

  return "from-yellow-700 to-orange-700";

  

}
  


  return (
    <div className='App'>
    <div className={`Appcontainer mx-auto  max-w-screen-md pt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`} >
    
      <TopButton setQuery={setQuery}/>
      <Input setQuery={setQuery} units  setUnits={setUnits}/>
      { weather && ( <>
        <TimeAndLocation weather={weather}/>
      <Details weather={weather} />
      <Forecast title="Hourly forcast" items={weather.hourly}  />
      <Forecast title="Daily forcast" items={weather.daily} />

      </>) }
      
    </div>
      <ToastContainer autoClose={500} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
