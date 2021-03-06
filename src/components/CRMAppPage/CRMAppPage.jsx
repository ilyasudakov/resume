import React, { useEffect } from 'react'
import './CRMAppPage.scss'
import '../AppPage/AppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
// import screenshot1 from '../../assets/crm/crm1.png'
import screenshot2 from '../../assets/crm/crm2.png'

import { Link } from 'react-router-dom'

const CRMAppPage = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app-page app-page--ocean">
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
            CRM/ERP-система
          </h2>
          <div className="app-page__links">
            <a
              href="https://github.com/ilyasudakov/CRM_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <h3>
            Фронтенд/Разработка UI для системы управления малым предприятием
            <br />
            <br />
            При разработке использовались: React, SCSS, pdfMake, excelJS
          </h3>
          <h2>Интерфейс</h2>
          <div className="app-page__images">
            <div className="app-page__images-wrapper">
              {/* <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot1}
                  alt=""
                />
                <div>Страница авторизации</div>
              </div> */}
              <div className="app-page__image-block">
                <img
                  className="app-page__img app-page__img--screenshot"
                  src={screenshot2}
                  alt=""
                />
                <div>Главная страница</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CRMAppPage
