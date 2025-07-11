import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ChatbotsPage } from './pages/ChatbotsPage'
import { PromptGuidePage } from './pages/PromptGuidePage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  
  return (
    <BrowserRouter basename='/'>
    <ScrollToTop/>
    <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/chatbots' element={<ChatbotsPage/>} />
        <Route path='/prompt_guide' element={<PromptGuidePage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      
      <Footer/>

    </BrowserRouter>
    
  )
}

export default App
