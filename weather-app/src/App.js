import './App.scss';
import React, {useState} from 'react';
import SearchBox from './components/search-box/search-box';
import WeatherBox from './components/weather-box/weather-box';
import InitialView from './components/initial-view/initial-view';



function App() {
  
  const [displayData, setDisplaydata] = useState('');
  const displayNewSearchData = (searchData) => {
    setDisplaydata(() => {
      return(searchData);
    });
  }

  if(displayData !== ''){
    return (
      <div className="app">
        <main>
          <SearchBox onSearch={displayNewSearchData}></SearchBox>
          <WeatherBox displayData={displayData}></WeatherBox>
        </main>
      </div>
    );
  }else{
    return (
      <div className="app">
        <main>
          <SearchBox onSearch={displayNewSearchData}></SearchBox>
          <InitialView></InitialView>
        </main>
      </div>
    );
  }
  

}

export default App;
