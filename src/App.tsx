import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ScrollToTop } from './utils/ScrollToTop';
import DefaultLayout from './layouts/DefaultLayout';
import ChatPage from './pages/chat/ChatPage';
import { chatbotsData } from './data/chatbots';

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
      
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route element={<DefaultLayout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/chatbots' element={<ChatbotsPage/>}/>
            <Route path='/prompt_guide' element={<PromptGuidePage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Route>

          {
            Object.entries(chatbotsData).map(([chatbotId,chatbot])=>{
              return <Route path={`/chat/${chatbotId}`} element={<ChatPage chatbot={chatbot}/>}/>
            })
          }

          


        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;