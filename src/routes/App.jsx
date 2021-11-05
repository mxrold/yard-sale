import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Login from '../containers/Login'
import Layout from '../components/Layout'
import RecoveryPassword from '../components/RecoveryPassword'
import '../assets/styles/global.scss'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Layout>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/login" element={ <Login /> } />
            <Route exact path="/recovery-password" element={ <RecoveryPassword /> } />
            <Route path="*" element={ <NotFound /> } />
          </Layout>
        </Routes>
    </BrowserRouter>
  )
}

export default App