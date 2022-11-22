import { useState } from 'react';
import './App.css';
import {
  Logo,
  SearchBox,
  ThemeChanger,
  UnitChanger,
  LanguageChanger,
  Navigation
} from './components/Header'
import {
  Current,
  Forecast
} from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [weatherData, setWeatherData] = useState<any>({});
  const [degreeUnit, setDegreeUnit] = useState<string>('');
  const [themeMode, setThemeMode] = useState<string>('');

  const updateWeatherData = (data: any) => {
    setWeatherData(data);
  }

  const updateDegreeUnit = (unit: string) => {
    setDegreeUnit(unit);
  }

  const updateThemeMode = (mode: string) => {
    setThemeMode(mode);
  }

  return (
    <Router>
      <div className="app">
        <header>
          <Logo />
          <SearchBox onSearch={updateWeatherData} />
          <ThemeChanger onModeChange={updateThemeMode} />
          <UnitChanger onUnitChange={updateDegreeUnit} />
          <LanguageChanger />
          <Navigation mode={themeMode} />
        </header>
        <main>
     
          <Routes>
            <Route path="/" element={<Current weatherData={weatherData} degreeUnit={degreeUnit} />} />
            <Route path="/forecast" element={<Forecast weatherData={weatherData} degreeUnit={degreeUnit} />} />
          </Routes>
        </main>
        <footer>
          Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
