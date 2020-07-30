import React, { useEffect } from 'react'
import './TorrentAppPage.scss'
import '../AppPage/AppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
import screenshot1 from '../../assets/torrent_app/torrent_app1.png'

import { Link } from 'react-router-dom'

const TorrentAppPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app-page app-page--torrent">
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
            Torrent App
          </h2>
          <div className="app-page__links">
            <a
              href="https://github.com/ilyasudakov/torrent_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href="https://dazzling-stonebraker-1126ef.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
          <h3>
            Приложение, позволяющее скачивать торрент-файлы, просматривать
            скачиваемые медиа файлы.
            <br />
            <br />
            При разработке использовались: React, WebTorrent.
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
                {/* <div>Страница входа</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TorrentAppPage
