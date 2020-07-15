import React from 'react'
import './MainPage.scss'
import crmLogo from '../../assets/crm_logo.png'
import weatherAppPic from '../../assets/weather_app1.png'
import spotifyAppPic from '../../assets/spotify_app1.png'
import { Link } from 'react-router-dom'

const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="main-page__content">
        <div className="main-page__title">
          <h1>Судаков Илья, Фронтенд-разработчик</h1>
          <h2>
            React-разработчик из Санкт-Петербурга. Worked as a technical writer
            for 3+ years, but recently made the jump into UX Writing. Currently
            looking for her next opportunity!
          </h2>
        </div>
        <h2>Небольшие проекты</h2>
        <div className="main-page__list main-page__list--projects">
          <Link className="main-page__card" to="/weather-app">
            <img className="main-page__img" src={weatherAppPic} alt="" />
            <h2>Weather App</h2>
            <h3>
              Фронтенд/Разработка UI системы для управления малым предприятием
            </h3>
          </Link>
          <Link className="main-page__card" to="/spotify-app">
            <img className="main-page__img" src={spotifyAppPic} alt="" />
            <h2>Spotify Statistics App</h2>
            <h3>
              Фронтенд/Разработка UI системы для управления малым предприятием
            </h3>
          </Link>
          <Link className="main-page__card" to="/ocean-app">
            <h2>Ocean</h2>
            <h3>
              Фронтенд/Разработка UI системы для управления малым предприятием
            </h3>
            {/* <img className="main-page__img" src={crmLogo} alt="" /> */}
          </Link>
        </div>
        <h2>Большие проекты</h2>
        <div className="main-page__list main-page__list--projects">
          <Link className="main-page__card" to="/crm">
            <h2>CRM/ERP-система</h2>
            <h3>
              Фронтенд/Разработка UI системы для управления малым предприятием
            </h3>
            {/* <img className="main-page__img" src={crmLogo} alt="" /> */}
          </Link>
        </div>
        <h2>Мой опыт</h2>
        <div className="main-page__list main-page__list--links">
          <div className="main-page__card">
            <h2>Связь со мной</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/ilyasudakov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:ilyasudakov@inbox.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Почта
                </a>
              </li>
              <li>
                <a
                  href="https://vk.com/il.sudakov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
          <div className="main-page__card main-page__card--job-history">
            <h2>Где я работал</h2>
            <ul>
              <li>
                {/* <div className="main-page__date">Ноябрь 2019 - Тек. время</div> */}
                <div className="main-page__date">Ноябрь 2019 - Июль 2020</div>
                <div className="main-page__company-name">
                  Фронтенд-разработчик
                  {/* , UI/UX-дизайн */} в Osfix
                </div>
              </li>
              {/* <li>
                <div className="main-page__date">Июнь 2019 - Тек. время</div>
                <div className="main-page__company-name">Osfix</div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage