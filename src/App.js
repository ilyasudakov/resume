import React from 'react'
import MainPage from './components/MainPage/MainPage'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import './components/MainPage/MainPage.scss'

import WeatherAppPage from './components/WeatherAppPage/WeatherAppPage'
import SpotifyAppPage from './components/SpotifyAppPage/SpotifyAppPage'
import OceanAppPage from './components/OceanAppPage/OceanAppPage'
import CRMAppPage from './components/CRMAppPage/CRMAppPage'
import TorrentAppPage from './components/TorrentAppPage/TorrentAppPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact
          path="/weather-app"
          render={(props) => <WeatherAppPage />}
        />
        <Route
          exact
          path="/spotify-app"
          render={(props) => <SpotifyAppPage />}
        />
        <Route exact path="/ocean-app" render={(props) => <OceanAppPage />} />
        <Route
          exact
          path="/torrent-app"
          render={(props) => <TorrentAppPage />}
        />
        <Route exact path="/crm" render={(props) => <CRMAppPage />} />
        <Route exact path="/" render={(props) => <MainPage />} />
      </BrowserRouter>
    </div>
  )
}

export default App
