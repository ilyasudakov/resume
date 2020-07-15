import React, { useEffect } from 'react'
import './SpotifyAppPage.scss'
import '../AppPage/AppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
import screenshot1 from '../../assets/spotify_app/spotify_app2.png'
import screenshot2 from '../../assets/spotify_app/spotify_app3.png'
import screenshot3 from '../../assets/spotify_app/spotify_app4.png'

import { Link } from 'react-router-dom'

const SpotifyAppPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app-page app-page--spotify">
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
            Spotify Statistics App
          </h2>
          <div className="app-page__links">
            <a href="/">GitHub</a>, <a href="/">Live</a>
          </div>
          <h3>
            Приложение для просмотра топ-списков песен, исполнителей и списка
            рекомендаций пользователя Spotify. Используется localStorage для
            сохранения токенов, необходимых для отправки запросов к Spotify.
            <br />
            <br />
            При разработке использовались: React, SCSS, Spotify API.
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
                <div>Страница входа</div>
              </div>
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot2}
                  alt=""
                />
                <div>Список топ-песен</div>
              </div>
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot3}
                  alt=""
                />
                <div>Список топ-исполнителей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotifyAppPage
