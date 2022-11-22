import React from 'react';
import './HourlyCard.css';
import { useTranslation } from 'react-i18next';
import { ForecastHourDetails } from '../../../../../Interfaces/WeatherDataDTO/WeatherDataDTO';

interface Props {
    hourlyForecast: object;
    degreeUnit: string;
}
export const HourlyCard: React.FC<Props> = ({ hourlyForecast, degreeUnit }) => {
    const { t } = useTranslation();
    return (
        <div className='hourly_container'>
            {Object.values(hourlyForecast).map((hour: ForecastHourDetails, index: number) => {
                return (
                    <div key={index}>
                        <p className="hour">{index < 10 ? `0${index}:00` : `${index}:00`}</p>
                        <p>{hour.condition.text}</p>
                        <img src={hour.condition.icon} />
                        <p className="temp"><span>{degreeUnit && degreeUnit == 'F' ? hour.temp_f : hour.temp_c}&deg; {degreeUnit}</span></p>

                        <div className="additional_data">
                            <p>
                                <span className="title">{t('WeatherData.humidity')}</span>
                                <span className="value">{hour.humidity}%</span>
                            </p>
                            <p>
                                <span className="title">{t('WeatherData.wind-speed')}</span>
                                <span className="value">{hour.wind_kph} km/h</span>
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
