import s from './forecast.module.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  )
  // console.log(data)
  return (
    <>
      <label className={s.title}></label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={s.daily_item}>
                  <label className={s.day}>{forecastDays[index]}</label>

                  <img
                    className={s.icon_small}
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className={s.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={s.temp}>
                    <img src="icons/thermometer 1.svg" alt="img" />
                    {Math.round(item.main.temp)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={s.daily_details_grid}>
                <div className={s.daily_details_grid_item}>
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className={s.daily_details_grid_item}>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className={s.daily_details_grid_item}>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={s.daily_details_grid_item}>
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={s.daily_details_grid_item}>
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className={s.daily_details_grid_item}>
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
