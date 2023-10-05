import React from 'react'
import { useState } from 'react'
import styles from './ViewInvoiceMenu.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'
import StatusBox from './StatusBox'
import createInvoiceId from '../functions/createInvoiceId'
import getDueDate from '../functions/getDueDate' 
import { formatDate } from '../functions/utilities'
import iconCheck from '../assets/icon-check.svg'

const ViewInvoiceMenu = (props) => {

  const [saveDraftIcon, setSaveDraftIcon] = useState(null)
  const [clickCount, setClickCount] = useState(1)

  const lightClassNames = {parentContainer: styles.parentContainerLight,
    status: styles.statusLight,
    editButton: styles.editButtonLight,
    copyDraftButton: styles.copyDraftButtonLight
  }

  const darkClassNames = {parentContainer: styles.parentContainerDark,
    status: styles.statusDark,
    editButton: styles.editButtonDark,
    copyDraftButton: styles.copyDraftButtonDark
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const handleClickMarkPaid = () => {

    const newInvoice = {...props.invoice}
    newInvoice.status = 'Paid'
    props.setInvoice(newInvoice)

    const newInvoices = props.invoices.map((invoice,index) => {
      if(invoice.id === props.invoice.id){
        invoice.status = 'Paid'
        return invoice
      }
      else{
        return invoice
      }
    })

    props.setInvoices(newInvoices)

  
  }

  const handleClickMarkPending = () => {

    const newInvoice = {...props.invoice}
    newInvoice.status = 'Pending'
    props.setInvoice(newInvoice)

    const newInvoices = props.invoices.map((invoice,index) => {
      if(invoice.id === props.invoice.id){
        invoice.status = 'Pending'
        return invoice
      }
      else{
        return invoice
      }
    })

    props.setInvoices(newInvoices)

  
  }

  const handleClickDelete = () => {
    console.log('Delete Clicked')
    props.setScene('ConfirmDelete')
  }

  const handleClickEdit = () => {
    props.setFormMode('Edit Invoice')
    props.setScene('EditInvoice')
  }

  const handleClickSaveDraft = () => {
    const newInvoice = {...props.invoice}
    newInvoice.id = createInvoiceId()
    newInvoice.invoiceDate = formatDate(new Date)
    newInvoice.dueDate = getDueDate(newInvoice.invoiceDate, newInvoice.paymentTerms)
    newInvoice.status = 'Draft'

    const newInvoices = props.invoices.concat(newInvoice)
    props.setInvoices(newInvoices)

    if(clickCount < 9){
      setClickCount(clickCount+1)
    } else{
      setClickCount('9+')
    }
    

    let circleInnerJsx
    if(clickCount === 1){
      circleInnerJsx = <img src={iconCheck} className={styles.iconCheck} alt='icon-check'/>
    } else{
      circleInnerJsx = <p className={styles.clickCount}>{clickCount}</p>

    }
  
    const iconCheckCircle =       
      <div className={styles.iconCheckCircle}>
        {circleInnerJsx}
      </div>
    
    setSaveDraftIcon(iconCheckCircle)
  }

  const copyDraftButton = 
  <div className={styles.copyDraftButtonContainer}>
      {saveDraftIcon}
      <button onClick={handleClickSaveDraft} className={`${classNames.copyDraftButton} ${styles.copyDraftButton} ${styles.h3Variant}`}>Copy as Draft</button>
  </div>


  const editButton = 
    <button onClick={handleClickEdit} className={`${classNames.editButton} ${styles.editButton} ${styles.h3Variant}`}>Edit</button>

  const deleteButton = 
    <button onClick={handleClickDelete} className={`${styles.deleteButton} ${styles.h3Variant}`}>Delete</button>

  const markAsPaidButton = 
    <button onClick={handleClickMarkPaid} className={`${styles.markAsPaidButton} ${styles.h3Variant}`}>Mark as Paid</button>

  const markAsPendingButton = 
    <button onClick={handleClickMarkPending} className={`${styles.markAsPendingButton} ${styles.h3Variant}`}>Mark as Pending</button>


  const getButtons = () => {
    let buttons
    if(props.invoice.status === 'Draft'){
      buttons = 
        <div className={styles.buttonBox}>
          {editButton}
          {deleteButton}
        </div>
    } else if(props.invoice.status === 'Pending'){
       buttons = 
       <div className={styles.buttonBox}>
        {copyDraftButton}
        {deleteButton}
        {markAsPaidButton}
       </div>
    } else{
      buttons = 
      <div className={styles.buttonBox}>
       {copyDraftButton}
       {deleteButton}
       {markAsPendingButton}
      </div>
    }

    return buttons
  }

  return (
    <div className={`${classNames.parentContainer} ${styles.parentContainer}`}>
        <div className={styles.statusInformation}>
            <p className={`${classNames.status} ${styles.status} ${styles.bodyText}`}>Status</p>
            <StatusBox theme={props.theme} status={props.invoice.status} />
        </div>
        {getButtons()}
    </div>
  )
}

export default ViewInvoiceMenu

