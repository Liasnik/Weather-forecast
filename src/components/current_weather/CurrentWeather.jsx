import s from './current_weather.module.css'

const CurrentWeather = ({ data }) => {
  return (
    <div className={s.weather}>
      <div className={s.top}>
        <div>
          <p className={s.city}>{data?.city}</p>
          <p className={s.weather_description}>{data.weather[0].description}</p>
        </div>
        <img
          className={s.weather_icon}
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
        />
      </div>
      <div className={s.bottom}>
        <p className={s.temperature}>{Math.round(data.main.temp)}°C</p>
        <div className={s.details}>
          <div className={s.parameter_label_top}>Details</div>
          <div className={s.parameter_row}>
            <span className={s.parameter_label}>Feels like</span>
            <span className={s.parameter_value}>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className={s.parameter_row}>
            <span className={s.parameter_label}>Wind</span>
            <span className={s.parameter_value}>{data.wind.speed} m/s</span>
          </div>
          <div className={s.parameter_row}>
            <span className={s.parameter_label}>Humidity</span>
            <span className={s.parameter_value}>{data.main.humidity}%</span>
          </div>
          <div className={s.parameter_row}>
            <span className={s.parameter_label}>Press</span>
            <span className={s.parameter_value}>{data.main.pressure} hPa</span>
          </div>
          <div className={s.parameter_row}>
            <span className={s.parameter_label}>Min/Max</span>
            <span className={s.parameter_value}>
              {Math.round(data.main.temp_min)}°C /{' '}
              {Math.round(data.main.temp_max)}
              °C
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div className={s.weather}>
    //   <div className={s.top}>
    //     <div>
    //       <p className={s.city}>{data.city}</p>
    //       <p className={s.weather_description}>{data.weather[0].description}</p>
    //     </div>
    //     <img
    //       alt="weather"
    //       className={s.weather_icon}
    //       src={`icons/${data.weather[0].icon}.png`}
    //     />
    //   </div>
    //   <div className={s.bottom}>
    //     <p className={s.temperature}>{Math.round(data.main.temp)}°C</p>
    //     <div className={s.details}>
    //       <div className={s.parameter_row}>
    //         <span className={s.parameter_label}>Details</span>
    //       </div>
    //       <div className={s.parameter_row}>
    //         <span className={s.parameter_label}>Feels like</span>
    //         <span className={s.parameter_value}>
    //           {Math.round(data.main.feels_like)}°C
    //         </span>
    //       </div>
    //       <div className={s.parameter_row}>
    //         <span className={s.parameter_label}>Wind</span>
    //         <span className={s.parameter_value}>{data.wind.speed} m/s</span>
    //       </div>
    //       <div className={s.parameter_row}>
    //         <span className={s.parameter_label}>Humidity</span>
    //         <span className={s.parameter_value}>{data.main.humidity}%</span>
    //       </div>
    //       <div className={s.parameter_row}>
    //         <span className={s.parameter_label}>Pressure</span>
    //         <span className={s.parameter_value}>{data.main.pressure} hPa</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CurrentWeather
