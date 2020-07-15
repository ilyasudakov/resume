import React, { useEffect } from 'react'
import './WeatherAppPage.scss'
import '../AppPage/AppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
import screenshot1 from '../../assets/weather_app/weather_app2.png'
import screenshot2 from '../../assets/weather_app/weather_app3.png'
import screenshot3 from '../../assets/weather_app/weather_app4.png'
import screenshot4 from '../../assets/weather_app/weather_app5.png'

import { Link } from 'react-router-dom'

const WeatherAppPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app-page app-page--weather">
      <div className="main-page">
        <div className="main-page__content">
          <h2>
            <Link to="/">
              <img
                className="app-page__img app-page__img--back"
                src={backIcon}
                alt=""
              />
            </Link>
            Weather App
          </h2>
          <div className="app-page__links">
            <a
              href="https://github.com/ilyasudakov/weatherApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href="https://weatherapp-ilyasudakov.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
          <h3>
            Приложение для просмотра прогноза погоды на неделю с определением
            местоположения пользователя, с возможностью просмотра подробного
            прогноза на ближайшие 48 часов. С помощью fetch-запросов, данные
            запрашиваются у сервера OpenWeather с использованием их API.
            <br />
            <br />
            При разработке использовались: React, SCSS, Recharts(для построения
            графика температуры на 48 часов), OpenWeather API.
          </h3>
          <h2>Интерфейс</h2>
          <div className="app-page__images">
            <div className="app-page__images-wrapper">
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot1}
                  alt=""
                />
                <div>{`Главный экран (при < 768px)`}</div>
              </div>
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot2}
                  alt=""
                />
                <div>
                  {'Страница подробного прогноза'} <br /> {`(при < 768px)`}
                </div>
              </div>
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot3}
                  alt=""
                />
                <div>
                  {'Главный экран'} <br /> {`(при > 1220px)`}
                </div>
              </div>
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
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
