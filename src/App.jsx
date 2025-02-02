
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Next from './pages/event'



function App() {
  return <div>
    
 
   <Routes>
    <Route path='/' element={<Nav />}/>
    <Route path='events' element={<Next/>}/>
   </Routes>
   
  </div>

 
}

export default App
