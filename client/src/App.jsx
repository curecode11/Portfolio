import {Routes,Route,BrowserRouter} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/project' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
