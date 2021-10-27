import './search-box.scss';
import search_icon from'../../assets/icons/search-icon.svg';
import React, {useState} from 'react';

const api = {
    key: 'cf3dbc18f444bebd966f1d182bc9bdbc',
    base: 'https://api.openweathermap.org/data/2.5/weather',
}

const SearchBox = (props) => {
    const [query, setQuery] = useState('');

    const dateBuilder = (timezone) => {
   
        const nowInLocalTime = Date.now()  + 1000 * (timezone / 3600);
        const millitime = new Date(nowInLocalTime);
        let hours = millitime.toLocaleString("en-US", {hour: "numeric"}); 
        let minutes = millitime.toLocaleString("en-US", {minute: "numeric"});
    
        return `${hours}:${minutes}`;
    }

    const search = e => {
      if(e.key === "Enter" || e.type === 'click'){
        fetch(`${api.base}?q=${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(result => {
            setQuery('');
            let sunrise_time = new Date(result.sys.sunrise * 1000);
            sunrise_time = sunrise_time.getHours() + ':' + sunrise_time.getMinutes();
            let sunset_time = new Date(result.sys.sunset * 1000);
            sunset_time = sunset_time.getHours() + ':' + sunset_time.getMinutes();
            let weatherData = {
                name: result.name,
                country: result.sys.country,
                temp: Math.round(result.main.temp),
                temp_max: Math.round(result.main.temp_max),
                temp_min: Math.round(result.main.temp_min),
                main: result.weather[0].main,
                feelslike: Math.round(result.main.feels_like),
                humidity: result.main.humidity,
                pressure: result.main.pressure + ' hPa',
                wind: Math.round(result.wind.speed * 3.6) + ' km/hr',
                sunrise: sunrise_time,
                sunset: sunset_time,
                visibility: result.visibility / 1000 + ' km',
                timezone: result.timezone
            }
            props.onSearch(weatherData);
        }).catch(function() {
            props.onSearch(`Hmm 🤔. Weather data for "${query}" is currently not available.`);
        });
      }
    }

    return(
        <div className="search-box">
            <input
            autoFocus
            type="text"
            className="search-bar"
            placeholder="City name"
            onChange={e=>setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            ></input>
            <button id="start-search" onClick={search}>
                <img className="search-icon" src={search_icon} alt="search"></img>
            </button>
        </div>
    );
}

export default SearchBox;