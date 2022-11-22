import './Current.css'
import { WeatherDataDTO } from '../../../Interfaces/WeatherDataDTO/WeatherDataDTO';
import { useTranslation } from 'react-i18next';

interface Props {
  degreeUnit: string;
  weatherData: {
    data: WeatherDataDTO
    city: string;
  };
}


export const Current: React.FC<Props> = ({ weatherData, degreeUnit }) => {
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
    <>
      <div className='location_details_container'>
        <h2>{weatherData.data.location ? `${weatherData.data.location.name}, ${weatherData.data.location.country}` : ''}</h2>
        <div className='location_details_extra'>
          <p className="region"><span className="title">{t('WeatherData.region')}:</span> {weatherData.data.location.region} </p>
          <p className="timezone"><span className="title">{t('WeatherData.timezone')}:</span> {weatherData.data.location.tz_id}</p>
        </div>
      </div>

      <section>
        <p><b>{t('WeatherData.date-time')}:</b> <br />{weatherData.data.location.localtime}</p>
        <div className="essential_data">
          <div className="image_wrapper">
            <p>{weatherData.data.current.condition.text}</p>
            <img width='110' src={weatherData.data.current.condition.icon} alt={weatherData.data.current.condition.text} />
          </div>
          <h4 className='current_weather_temperature'>
            {degreeUnit && degreeUnit == 'F' ? weatherData.data.current.temp_f : weatherData.data.current.temp_c}&deg; <span>{!degreeUnit ? 'C' : degreeUnit}</span></h4>
        </div>
        <div className="additional_data">
          <p>
            <span className="title">{t('WeatherData.feels-like')}</span>
            <span className="value">{degreeUnit && degreeUnit == 'F' ? weatherData.data.current.feelslike_f : weatherData.data.current.feelslike_c}&deg; {!degreeUnit ? 'C' : degreeUnit}</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.humidity')}</span>
            <span className="value">{weatherData.data.current.humidity}%</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.visibility')}</span>
            <span className="value">{weatherData.data.current.vis_km} km</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.wind-speed')}</span>
            <span className="value">{weatherData.data.current.wind_kph} km/h</span>
          </p>
          <p>
            <span className="title">{t('WeatherData.wind-direction')}</span>
            <span className="value">{weatherData.data.current.wind_dir}</span>
          </p>
        </div>
      </section>
    </>
  );
}