import React from 'react'
import { Link } from 'react-router-dom'

// import './MainPage.scss'
import { numberToString } from '../../functions.js'
// import crmLogo from '../../assets/crm_logo.png'
import weatherAppPic from '../../assets/weather_app/weather_app1.png'
import spotifyAppPic from '../../assets/spotify_app/spotify_app1.png'
import oceanAppPic from '../../assets/ocean_app/ocean_app1.png'

const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="main-page__content">
        <div className="main-page__title">
          <h1>Судаков Илья, Фронтенд-разработчик</h1>
          <h2>
            React-разработчик из Санкт-Петербурга,{' '}
            {`${
              new Date().getFullYear() -
              new Date(897609600 * 1000).getFullYear()
            } ${numberToString(
              new Date().getFullYear() -
                new Date(897609600 * 1000).getFullYear(),
              ['год', 'года', 'лет'],
            )}`}
            . В данный момент ищу работу по вакансии junior-разработчик!
          </h2>
        </div>
        {/* <h2>Контакты и Опыт работы</h2> */}
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
          <div className="main-page__card main-page__card--history">
            <div className="main-page__job-history">
              <h2>Опыт работы</h2>
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
            <div className="main-page__job-history">
              <h2>Образование</h2>
              <ul>
                <li>
                  {/* <div className="main-page__date">Ноябрь 2019 - Тек. время</div> */}
                  <div className="main-page__date">4.53 GPA</div>
                  <div className="main-page__company-name">
                    Бакалавр - "Программная Инженерия" в СПБГУТ
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
        <h2>Небольшие проекты</h2>
        <div className="main-page__list main-page__list--projects">
          <Link className="main-page__card" to="/weather-app">
            <img className="main-page__img" src={weatherAppPic} alt="" />
            <h2>Weather App</h2>
            <h3>
              Приложение для просмотра прогноза погоды на неделю с определением
              местоположения пользователя
            </h3>
            <div className="main-page__skills">
              <div className="main-page__text-item">React</div>
              <div className="main-page__text-item">Recharts</div>
              <div className="main-page__text-item">OpenWeather API</div>
            </div>
          </Link>
          <Link className="main-page__card" to="/spotify-app">
            <img className="main-page__img" src={spotifyAppPic} alt="" />
            <h2>Spotify Statistics App</h2>
            <h3>
              Приложение для просмотра топ-списков песен, исполнителей и списка
              рекомендаций пользователя Spotify
            </h3>
            <div className="main-page__skills">
              <div className="main-page__text-item">React</div>
              <div className="main-page__text-item">Spotify API</div>
            </div>
          </Link>
          <Link className="main-page__card" to="/ocean-app">
            <img className="main-page__img" src={oceanAppPic} alt="" />
            <h2>Ocean</h2>
            <h3>
              Приложение, имитирующее волны океана с использованием библиотеки
              React Three Fiber и Perlin 3D noise
            </h3>
            <div className="main-page__skills">
              <div className="main-page__text-item">React</div>
              <div className="main-page__text-item">React Three Fiber</div>
            </div>
          </Link>
        </div>
        <h2>Большие проекты</h2>
        <div className="main-page__list main-page__list--projects">
          <Link className="main-page__card" to="/crm">
            <h2>CRM/ERP-система</h2>
            <h3>
              Фронтенд/Разработка UI для системы управления малым предприятием
            </h3>
            {/* <img className="main-pa ge__img" src={crmLogo} alt="" /> */}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainPage
