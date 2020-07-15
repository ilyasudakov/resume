import React, { useEffect } from 'react'
import './OceanAppPage.scss'
import '../AppPage/AppPage.scss'

import backIcon from '../../assets/arrow-back.svg'
import screenshot1 from '../../assets/ocean_app/ocean_app2.png'

import { Link } from 'react-router-dom'

const OceanAppPage = (props) => {
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
            Ocean App
          </h2>
          <div className="app-page__links">
            <a
              href="https://github.com/ilyasudakov/ThreeJS_test"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            ,{' '}
            <a
              href="https://ocean-ilyasudakov.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </div>
          <h3>
            Приложение, имитирующее волны океана с использованием библиотеки
            React Three Fiber, и функции Perlin 3D noise, которая позволяет
            изменять форму плоскости и менять ее с течением времени.
            <br />
            <br />
            При разработке использовались: React, React Three Fiber, функция
            Perlin 3D noise.
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

export default OceanAppPage
