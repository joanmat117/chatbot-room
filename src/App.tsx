import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Componente de carga (puedes personalizarlo)
const Loading = () => <div className="w-screen h-screen"></div>;

// Carga perezosa de las páginas
const HomePage = lazy(() => import('./pages/HomePage'));
const ChatbotsPage = lazy(() => import('./pages/ChatbotsPage'));
const PromptGuidePage = lazy(() => import('./pages/PromptGuidePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter basename='/'>
      <ScrollToTop/>
      <Header/>
      
      {/* Suspense maneja la carga de los componentes lazy */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/chatbots' element={<ChatbotsPage/>} />
          <Route path='/prompt_guide' element={<PromptGuidePage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
      
      <Footer/>
    </BrowserRouter>
  )
}

export default App;