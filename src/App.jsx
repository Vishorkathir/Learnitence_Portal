
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import Content from './components/Learn/Content'
import Chatbotanime from './component2/chatbotAnime'
// import Content1 from './components/Learntxtnew/Content1'
import MainContent from "./components/Learntxtnew/MainContent"    


function App() {


  return (
    <>
    <div className=' lg:max-w-7xl w-full  mx-auto'>
    <Routes>
      {/* <Route path='/' element={<Content/>}/> */}
      <Route path='/chatbot' element={<Chatbotanime/>}/>
      <Route path='/' element={<MainContent/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
