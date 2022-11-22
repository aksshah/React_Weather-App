import { Fragment } from 'react';
import { WeatherDataDTO } from '../../../Interfaces/WeatherDataDTO/WeatherDataDTO';
import { DayCard } from './DayCard'
import './Forecast.css'
import { useTranslation } from 'react-i18next';

interface Props {
  degreeUnit: string;
  weatherData: {
    data: WeatherDataDTO;
    city: string;
  };
}


export const Forecast: React.FC<Props> = ({ weatherData, degreeUnit }) => {
  const { t } = useTranslation();

   if (!weatherData.data) {
    return (
      <p className="error">{t('WeatherData.dataNotAvailable')}</p>
    );
  }

  if (weatherData.data.error) {
    return (<p className="error">{t('WeatherData.cityNotFound')}</p>)
  }

  return (
    <Fragment>
      <div className='location_details_container'>
        <h2>{weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}</h2>
        <div className='location_details_extra'>
        <p className="region"><span className="title">{t('WeatherData.region')}:</span> {weatherData.data.location.region} </p>
          <p className="timezone"><span className="title">{t('WeatherData.timezone')}:</span> {weatherData.data.location.tz_id}</p>
        </div>
      </div>

      <section>
        <h3 className="section_headline">{t('WeatherData.3-day-forecast')}</h3>
        <div className="cards_container">
          {weatherData.data.forecast && weatherData.data.location &&
            Object.values(weatherData.data.forecast.forecastday).map((day: any) => {
              return (<DayCard
                key={day.date}
                date={day.date}
                temp={degreeUnit && degreeUnit == 'F' ? day.day.avgtemp_f : day.day.avgtemp_c}
                condition={day.day.condition.text}
                icon={day.day.condition.icon}
                maxTemperature={degreeUnit && degreeUnit == 'F' ? day.day.maxtemp_f : day.day.maxtemp_c}
                minTemperature={degreeUnit && degreeUnit == 'F' ? day.day.mintemp_f : day.day.mintemp_c}
                humidity={day.day.avghumidity}
                sunrise={day.astro.sunrise}
                sunset={day.astro.sunset}
                degreeUnit={!degreeUnit ? 'C' : degreeUnit}
                weatherDataHourly={day.hour}
              />);
            })}
        </div>
      </section>

    </Fragment>
  );
}