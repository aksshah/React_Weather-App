import React, { useState } from 'react'
import { HourlyCard } from './HourlyCard';
import './DayCard.css'
import { useTranslation } from 'react-i18next';

interface Props {
  date: string;
  temp: string;
  condition: string;
  icon: string;
  sunrise?: string;
  sunset?: string;
  maxTemperature?: number;
  minTemperature?: number;
  humidity?: number;
  degreeUnit: string;
  weatherDataHourly: object;
}

export const DayCard: React.FC<Props> = ({
  temp,
  date,
  condition,
  icon,
  sunrise,
  sunset,
  humidity,
  maxTemperature,
  minTemperature,
  degreeUnit,
  weatherDataHourly
}) => {

  const [showHourlyData, setShowHourlyData] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleHourlyData = () => {
    setShowHourlyData(!showHourlyData);
  }

  return (
    <div className='card' onClick={toggleHourlyData}>
      <h4 className="date_time">{t('WeatherData.date')}:  {date}</h4>
      <div className="compact_view">
        <div className="essential_data_container">
          <div>
            <p className="condition">{condition}</p>
            <img className="image" src={icon} alt={condition} />
          </div>
          <h3 className="temp">{t('WeatherData.average-temperature')}<br /><span>{temp}&deg; {degreeUnit}</span></h3>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">{t('WeatherData.min-temp')}</span>
            <span className="value">{minTemperature}&deg; {degreeUnit}</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.max-temp')}</span>
            <span className="value">{maxTemperature}&deg; {degreeUnit}</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.sunrise')}</span>
            <span className="value">{sunrise}</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.sunset')}</span>
            <span className="value">{sunset}</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.humidity')}</span>
            <span className="value">{humidity} %</span>
          </p>
        </div>
      </div>
      <button type="button" onClick={toggleHourlyData}>{!showHourlyData ? t('WeatherData.show-hourly-details') : t('WeatherData.hide-hourly-details')}</button>
      {showHourlyData &&
        <div className="detailed_view">
          <HourlyCard hourlyForecast={weatherDataHourly} degreeUnit={degreeUnit} />
        </div>
      }
    </div>
  )
}