import React from 'react'
import styles from './InvoiceFormErrorMessage.module.css'
import getFormErrors from '../functions/getFormErrors'


const InvoiceFormErrorMessage = (props) => {

    const errors = getFormErrors(props.invoice)

    const setErrorMessage = (text) => {
        return <p className={styles.errorMessage}>-{text}</p>
    }

    let emptyField
    if(errors.emptyField && props.showFormErrors){
        emptyField = <p className={styles.errorMessage}>-Missing Required Field</p>
    }

    let invalidState = null
    if((errors.invalidVendorState && document.activeElement.id !== 'vendorState') ||
        (errors.invalidClientState && document.activeElement.id !== 'clientState')){
        invalidState = setErrorMessage('Invalid State Abbreviation')
    } 

    let invalidZip = null
    if((errors.invalidVendorZip && document.activeElement.id !== 'vendorZipCode') ||
        (errors.invalidClientZip && document.activeElement.id !== 'clientZipCode')){
        invalidZip= setErrorMessage('Invalid Zip Code')
    } 

    let invalidEmail = null
    if(errors.invalidEmail && document.activeElement.id !== 'clientEmail'){
        invalidEmail= setErrorMessage('Invalid Email Address')
    } 

    let invalidDate = null
    if(errors.invalidDate && document.activeElement.id !== 'invoiceDate'){
        invalidDate = setErrorMessage('Invalid Date - Enter Date As MM/DD/YYYY')
    } 

    let noItems = null
    if(errors.noItems){
        noItems= setErrorMessage('Minimum 1 Item Required')
    }

    if(props.showFormErrors){
        if(errors.invalidVendorState || errors.invalidClientState){
        invalidState= setErrorMessage('Invalid State Abbreviation')
        }

        if(errors.invalidVendorZip || errors.invalidClientZip){
        invalidZip= setErrorMessage('Invalid Zip Code')
        }

        if(errors.invalidEmail){
        invalidEmail= setErrorMessage('Invalid Email Address')
        }

        if(errors.invalidDate){
        invalidDate = setErrorMessage('Invalid Date - Enter Date As MM/DD/YYYY')
        }
    }
    
  return (
    <div className={styles.errorMessageContainer}>
        {emptyField}
        {invalidState}
        {invalidZip}
        {invalidEmail}
        {invalidDate}
        {noItems}  
    </div>
  )
}

export default InvoiceFormErrorMessage
