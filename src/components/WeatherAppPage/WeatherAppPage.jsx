import React from 'react'
import './WeatherAppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
import screenshot1 from '../../assets/weather_app2.png'
import screenshot2 from '../../assets/weather_app3.png'
import screenshot3 from '../../assets/weather_app4.png'
import screenshot4 from '../../assets/weather_app5.png'

import { Link } from 'react-router-dom'

const WeatherAppPage = (props) => {
  return (
    <div className="weather-app-page">
      <div className="main-page">
        <div className="main-page__content">
          <h2>
            <Link to="/">
              <img
                className="weather-app-page__img weather-app-page__img--back"
                src={backIcon}
                alt=""
              />
            </Link>
            Weather App
          </h2>
          <div className="weather-app-page__links">
            <a href="/">GitHub</a>, <a href="/">Live</a>
          </div>
          <h3>
            Приложение для просмотра прогноза погоды на неделю с определением
            местоположения пользователя, с возможностью просмотра подробного
            прогноза на ближайшие 48 часов. С помощью fetch-запросов, данные
            запрашиваются у сервера OpenWeather с использованием их API.
            <br />
            <br />
            При разработке использовались: React, SCSS, Recharts(для построения
            графика температуры на 48 часов), OpenWeather API
          </h3>
          <h2>Интерфейс</h2>
          <div className="weather-app-page__images">
            <div className="weather-app-page__images-wrapper">
              <div className="weather-app-page__image-block">
                <img
                  className="weather-app-page__img weather-app-page__img--screenshot"
                  src={screenshot1}
                  alt=""
                />
                <div>{`Главный экран (при < 768px)`}</div>
              </div>
              <div className="weather-app-page__image-block">
                <img
                  className="weather-app-page__img weather-app-page__img--screenshot"
                  src={screenshot2}
                  alt=""
                />
                <div>
                  {'Страница подробного прогноза'} <br /> {`(при < 768px)`}
                </div>
              </div>
              <div className="weather-app-page__image-block">
                <img
                  className="weather-app-page__img weather-app-page__img--screenshot"
                  src={screenshot3}
                  alt=""
                />
                <div>
                  {'Главный экран'} <br /> {`(при > 1220px)`}
                </div>
              </div>
              <div className="weather-app-page__image-block">
                <img
                  className="weather-app-page__img weather-app-page__img--screenshot"
                  src={screenshot4}
                  alt=""
                />
                <div>
                  {'Страница подробного прогноза'} <br /> {`(при > 1220px)`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherAppPage