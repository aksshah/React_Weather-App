export interface WeatherDataDTO {
  current: {
    condition: {
      icon: string;
      text: string;
    },
    temp_c: string;
    temp_f: string;
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    vis_km: number;
    wind_kph: number;
    wind_dir: string;
  }
  error: {
    message: string;
    code: number;
  }
  forecast: {
    forecastday: {
      one: ForecastDay;
      two: ForecastDay;
      three: ForecastDay;
    }
  }
  location: {
    name: string;
    country: string;
    localtime: string;
    region: string;
    tz_id: string;
  }
}

export interface ForecastDay {
  date: string;
  astro: {
    sunrise: string;
    sunset: string;
  };
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    mintemp_c: number;
    maxtemp_c: number;
    mintemp_f: number;
    maxtemp_f: number;
    avghumidity: number;
  };
  hour: {
    [hour: number]: ForecastHourDetails;
  }
}

export interface ForecastHourDetails {
  temp_c: number;
  temp_f: number;
  wind_kph: number;
  humidity: number;
  condition: {
    text: string;
    icon: string;
  };
  time: string;
}