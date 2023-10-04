import './App.css'
import { useState } from 'react'
import InvoiceForm from './components/InvoiceForm'
import Navbar from './components/Navbar'
import setThemeClassNames from './functions/setThemeClassNames'
import Invoice from './classes/Invoice'
import InvoiceList from './components/InvoiceList'
import ViewInvoiceMenu from './components/ViewInvoiceMenu'
import ConfirmDeletion from './components/ConfirmDeletion'
import GoBackButton from './components/GoBackButton'
import ViewInvoice from './components/ViewInvoice'
import InvoiceListMenu from './components/InvoiceListMenu'
import getInvoiceExample from './functions/getInvoiceExample'


function App() {

  const invoiceExample = getInvoiceExample()

  const [theme, setTheme] = useState('light')
  const [invoice, setInvoice] = useState(new Invoice)
  const [invoices, setInvoices] = useState([invoiceExample])
  const [scene, setScene] = useState('InvoiceList')
  const [formMode, setFormMode] = useState('New Invoice')
  const [filter, setFilter] = useState({draft:true, pending:true, paid:true})

  const lightClassNames = {parentContainer: 'parentContainerLight'}
  const darkClassNames = {parentContainer: 'parentContainerDark'}
  const classNames = setThemeClassNames(theme, lightClassNames, darkClassNames)

  const NavbarComponent = <Navbar theme={theme} setTheme={setTheme}/>

  const InvoiceListMenuComponent = <InvoiceListMenu theme={theme} setScene={setScene} setFormMode={setFormMode} invoice={invoice}
    setInvoice={setInvoice} filter={filter} setFilter={setFilter} invoices={invoices}/>

  const InvoiceListComponent = <InvoiceList theme={theme} setScene={setScene} invoice={invoice} invoices={invoices} 
    setInvoice={setInvoice} filter={filter} />

  const InvoiceFormComponent = <InvoiceForm invoice={invoice} setInvoice={setInvoice} formMode={formMode} theme={theme}
    invoices={invoices} setInvoices={setInvoices} setScene={setScene}/>

  const GoBackButtonComponent = <GoBackButton setInvoice={setInvoice} invoices={invoices} theme={theme} setScene={setScene}
    name='InvoiceList' />

  const ViewInvoiceMenuComponent = <ViewInvoiceMenu theme={theme} setInvoice={setInvoice} setFormMode={setFormMode}
    setScene={setScene} invoices={invoices} setInvoices={setInvoices} invoice={invoice}/>

  const ViewInvoiceComponent = <ViewInvoice theme={theme} invoices={invoices} invoice={invoice}/> 

  const ConfirmDeletionComponent = <ConfirmDeletion theme={theme} invoices={invoices} invoice={invoice} setScene={setScene}
    setInvoice={setInvoice} setInvoices={setInvoices}/>

  const updateDisplay = () => {
    let display
    let overflow
    switch(scene){

      case 'InvoiceList':
        overflow = 'overflowAuto'
        display = 
        <div className={`${classNames.parentContainer} ${overflow} parentContainer`}>
          {NavbarComponent}
          <div className='mainContent'>
            {InvoiceListMenuComponent}
            {InvoiceListComponent}
          </div>
        </div>
      break

      case 'NewInvoice':
        overflow = 'overflowHidden'
        display = 
        <div className={`${classNames.parentContainer} ${overflow} parentContainer`}>
          {NavbarComponent}
          {InvoiceListMenuComponent}
          {InvoiceFormComponent}    
        </div>
      break

      case 'ViewInvoice':
        overflow = 'overflowAuto'
        display = 
        <div className={`${classNames.parentContainer} ${overflow}  parentContainer`}>
            {NavbarComponent}
          <div className='mainContent width100'>
            <div className='goBackContainer'>
              {GoBackButtonComponent}
            </div>
            {ViewInvoiceMenuComponent}
            {ViewInvoiceComponent}
          </div>

        </div>
      break

      case 'EditInvoice':
        overflow = 'overflowHidden'
        display = 
        <div className={`${classNames.parentContainer} ${overflow} parentContainer`}>
          {NavbarComponent}
          {ViewInvoiceMenuComponent}
          {ViewInvoiceComponent}
          {InvoiceFormComponent}
        </div>
      break

      case 'ConfirmDelete':
        overflow = 'overflowHidden'
        display = 
        <div className={`${classNames.parentContainer} ${overflow} parentContainer`}>
          {GoBackButtonComponent}
          {NavbarComponent}
          {ViewInvoiceMenuComponent}
          {ViewInvoiceComponent}
          {ConfirmDeletionComponent}
        </div>
    }

    return display
  }

  return(
    updateDisplay()
  )
}

export default App



