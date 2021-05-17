import React from 'react'
import Header from './components/Header'
import Routes from './pages/Routes'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
    </div>
  )
}

export default App
