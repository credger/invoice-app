import React from 'react'
import styles from './InvoiceFormButtons.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'
import getFormErrors from '../functions/getFormErrors'
import {formatDate} from '../functions/utilities'
import Invoice from '../classes/Invoice'
import getDueDate from '../functions/getDueDate'

const InvoiceFormButtons = (props) => {

  const lightClassNames = {saveDraft: styles.saveDraftLight}
  const darkClassNames = {saveDraft: styles.saveDraftDark}
  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const handleClickDiscard = () => {
      props.setScene('InvoiceList')
      props.setInvoice(new Invoice)
  }
    
  const handleClickSaveDraft = () => {
      const newInvoice = {...props.invoice}
      newInvoice.status = 'Draft'
      newInvoice.invoiceDate = formatDate(new Date)
      newInvoice.dueDate = getDueDate(newInvoice.invoiceDate, newInvoice.paymentTerms)
      newInvoice.total = getInvoiceTotal()

      const newInvoices = props.invoices.concat(newInvoice)
      props.setInvoices(newInvoices)
      
      props.setScene('InvoiceList')
      props.setInvoice(new Invoice)      
  }
  
  const handleClickSaveSend = () => {
  
      if(!isValidForm()){
        props.setShowFormErrors(true)
        return false
      } 
  
      const newInvoice = {...props.invoice}
      newInvoice.status = 'Pending'
      newInvoice.dueDate = getDueDate(newInvoice.invoiceDate, newInvoice.paymentTerms)
      newInvoice.total = getInvoiceTotal()
      props.setInvoice(newInvoice)
      
      const newInvoices = props.invoices.concat(newInvoice)
      props.setInvoices(newInvoices)
    
      props.setScene('InvoiceList')
    
  }

  const handleClickCancel = () => {
      const newInvoice = {...props.invoices.find((invoice) => invoice.id === props.invoice.id)}
      props.setInvoice(newInvoice)
      props.setScene('ViewInvoice')  
  }

  const handleClickEditSaveSend = () => {

      if(!isValidForm()){
        props.setShowFormErrors(true)
        return false
      } 
  
      const newInvoices = props.invoices.map((invoice,index) => {
        if(invoice.id === props.invoice.id){
  
          const newInvoice = {...props.invoice}
          newInvoice.dueDate=getDueDate(newInvoice.invoiceDate, newInvoice.paymentTerms)
          newInvoice.total = getInvoiceTotal()
          newInvoice.status = 'Pending'
          props.setInvoice(newInvoice)
  
          return newInvoice
        }
        else{
          return invoice
        }
      })
  
      props.setInvoices(newInvoices)
  
      props.setScene('ViewInvoice')
  
  }

  const handleClickEditSaveDraft = () => {
      const newInvoices = props.invoices.map((invoice,index) => {
          if(invoice.id === props.invoice.id){
    
            const newInvoice = {...props.invoice}
            newInvoice.dueDate=getDueDate(newInvoice.invoiceDate, newInvoice.paymentTerms)
            newInvoice.total = getInvoiceTotal()
            props.setInvoice(newInvoice)
    
            return newInvoice
          }
          else{
            return invoice
          }
        })
    
        props.setInvoices(newInvoices)
    
        props.setScene('ViewInvoice')
  }

  const getInvoiceTotal = () => {
    let invoiceTotal = 0
    props.invoice.items.forEach((item) => {
        invoiceTotal += parseFloat(item.total)
    })

    return invoiceTotal.toString()
  }
    
  const isValidForm = () => {
    const errors = getFormErrors(props.invoice)
    const errorValues = Object.values(errors)
    if(errorValues.includes(true)){
      return false
    }else{
      return true
    } 
  }

  const newInvoiceButtons = 
  <div className={styles.formRow}>
    <button type='button' onClick={handleClickDiscard} className={`${styles.formButton} ${styles.discard}`}>Discard</button>
    <div className={styles.rightButtons}>
      <button type='button' onClick={handleClickSaveDraft} className={`${styles.formButton} ${classNames.saveDraft} ${styles.saveDraft}`}>Save as Draft</button>
      <button type='button' onClick={handleClickSaveSend} className={`${styles.formButton} ${styles.saveSend}`}>Save & Send</button>  
    </div>
  </div>

  const editInvoiceButtons=
  <div className={styles.formRow}>
    <button type='button' onClick={handleClickCancel} className={`${styles.formButton} ${styles.discard}`}>Cancel</button>
    <div className={styles.rightButtons}>
      <button type='button' onClick={handleClickEditSaveDraft} className={`${styles.formButton} ${classNames.saveDraft} ${styles.saveDraft}`}>Save Changes</button>
      <button type='button' onClick={handleClickEditSaveSend} className={`${styles.formButton} ${styles.saveSend}`}>Save & Send</button>
    </div>
  </div>

  const getButtons = () =>{
      if(props.formMode === 'New Invoice'){
          return newInvoiceButtons
      }else{
          return editInvoiceButtons
      }
  }

  return (
    getButtons()
  )
}

export default InvoiceFormButtons
