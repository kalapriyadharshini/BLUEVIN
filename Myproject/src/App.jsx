import { useState } from 'react'
import './index.css'
import CustomNavbar from './Navbar1'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';




function App() {
  const [count, setCount] = useState(0)

  return (  
   <div>
   
        <CustomNavbar cartCount={0} />
         <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </div>
  )
}

export default App

