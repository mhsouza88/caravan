import Router from './route/Router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {

  return (
    <BrowserRouter>
    <Header />
    <Router />
    <Footer />
    </BrowserRouter>
  )
}

export default App
