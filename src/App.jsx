import './App.css'
import { useState } from 'react'
import InvoiceForm from './components/InvoiceForm'



function App() {
  
  const [theme, setTheme] = useState('dark')



  


  return(
      <div>
        <InvoiceForm theme={theme} />
      </div>
  )
}

export default App
