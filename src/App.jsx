import './App.css'
import { useState } from 'react'
import InvoiceForm from './components/InvoiceForm'
import Navbar from './components/Navbar'



function App() {
  
  const [theme, setTheme] = useState('dark')



  


  return(
      <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        {/* <InvoiceForm theme={theme} /> */}
      </div>
  )
}

export default App
