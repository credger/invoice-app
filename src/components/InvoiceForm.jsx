import React from 'react'
import styles from './InvoiceForm.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'
import ItemList from './ItemList'
import { useState } from 'react'
import PaymentTermsDropdown from './PaymentTermsDropdown'
import {isEmpty} from '../functions/utilities'
import InvoiceFormButtons from './InvoiceFormButtons'
import getFormErrors from '../functions/getFormErrors'
import InvoiceFormErrorMessage from './InvoiceFormErrorMessage'


const InvoiceForm = (props) => {

  const [showFormErrors, setShowFormErrors] = useState(false)

  const lightClassNames = {
    input: styles.inputLight,
    inputError: styles.inputErrorLight,
    scroll: styles.scrollLight,
    form: styles.formLight,
    label: styles.labelLight,
    formContainer: styles.formContainerLight,
    formTitle: styles.formTitleLight 
  }

  const darkClassNames = {
    input: styles.inputDark,
    inputError: styles.inputErrorDark,
    scroll: styles.scrollDark,
    form: styles.formDark,
    label: styles.labelDark,
    formContainer: styles.formContainerDark,
    formTitle: styles.formTitleDark
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const invoiceAttributes = ['vendorName', 'vendorStreetAddress', 'vendorCity', 'vendorState', 'vendorZipCode',
        'clientName', 'clientEmail', 'clientStreetAddress', 'clientCity',
        'clientState', 'clientZipCode', 'invoiceDate', 'paymentTerms',
        'projectDescription']

  const handleInputChange = (event) => {
    const newInvoice = updateInvoice(event)
    props.setInvoice(newInvoice)
  }

  const setFormTitle = () => {
    let formTitle
    switch(props.formMode){
      case 'New Invoice':
        formTitle = 'New Invoice'
      break

      case 'Edit Invoice':
        formTitle = 'Edit #' + props.invoice.id
      break
    }

    return formTitle
  }

  const getInputClassName = (property) => {
    const styles = {
      vendorName: classNames.input,
      vendorStreetAddress: classNames.input,
      vendorCity: classNames.input,
      vendorState: classNames.input,
      vendorZipCode: classNames.input,
      clientName: classNames.input,
      clientEmail: classNames.input,
      clientStreetAddress: classNames.input,
      clientCity: classNames.input,
      clientState: classNames.input,
      clientZipCode: classNames.input,
      invoiceDate: classNames.input,
      projectDescription: classNames.input
    }


    const errors = getFormErrors(props.invoice)
  
    if(errors.invalidVendorState && document.activeElement.id !== 'vendorState'){
      styles.vendorState =classNames.inputError
    }

    if(errors.invalidClientState && document.activeElement.id !== 'clientState' ||
      errors.invalidClientState && showFormErrors){
      styles.clientState =classNames.inputError
    }

    if(errors.invalidVendorZip && document.activeElement.id !== 'vendorZipCode'){
      styles.vendorZipCode =classNames.inputError
    }

    if(errors.invalidClientZip && document.activeElement.id !== 'clientZipCode'){
      styles.clientZipCode =classNames.inputError
    }

    if(errors.invalidEmail && document.activeElement.id !== 'clientEmail'){
      styles.clientEmail =classNames.inputError
    }

    if(errors.invalidDate && document.activeElement.id !== 'invoiceDate'){
      styles.invoiceDate =classNames.inputError
    }

    if(isEmpty(props.invoice[property]) && showFormErrors){
        styles[property] = classNames.inputError
    }

    return styles[property]

  }

  const updateInvoice = (event) => {

    const newInvoice = {...props.invoice}

    invoiceAttributes.map((attribute) => {
    if(attribute === event.target.id){
        newInvoice[attribute] = event.target.value
    }
    })

    return newInvoice

  }

  return (
    <div className={styles.parentContainer}>
      <div className={`${styles.formContainer} ${classNames.formContainer}`}>
        <div className={`${classNames.scroll} ${styles.scroll} `}>
        <form className={`${classNames.form} ${styles.form}`}>
          <h2 className={`${styles.formTitle} ${classNames.formTitle}`}>{setFormTitle()}</h2>
          <section>
            <h3 className={`'h3Variant' ${styles.h3}`}>Bill From</h3>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='vendorName' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Vendor Name</label>
              <input id='vendorName' onChange={handleInputChange} className={`${getInputClassName('vendorName')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.vendorName}></input>
            </div>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='vendorStreetAddress' className={`${classNames.label} ${styles.label} bodyTextVariant`}>Street Address</label>
              <input id='vendorStreetAddress' onChange={handleInputChange} className={`${getInputClassName('vendorStreetAddress')} ${styles.input}`}type='text' maxLength='40' defaultValue={props.invoice.vendorStreetAddress}></input>
            </div>
            <div className={styles.formRow}>
              <div className={styles.inputCity}>
                <label htmlFor='vendorCity' className={`${classNames.label} ${styles.label} bodyTextVariant`} >City</label>
                <input id='vendorCity' onChange={handleInputChange} className={`${getInputClassName('vendorCity')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.vendorCity}></input>
              </div>
              <div className={styles.StateZipContainer}>
                <div className={styles.inputState}>
                  <label htmlFor='vendorState' className={`${classNames.label} ${styles.label} bodyTextVariant`} >State</label>
                  <input id='vendorState' onChange={handleInputChange} className={`${getInputClassName('vendorState')} ${styles.input}`} type='text' maxLength='2' defaultValue={props.invoice.vendorState}></input>
                </div>
                <div className={styles.inputZipCode}>
                  <label htmlFor='vendorZipCode' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Zip</label>
                  <input id='vendorZipCode' onChange={handleInputChange} className={`${getInputClassName('vendorZipCode')} ${styles.input}`} type='text' maxLength='5' defaultValue={props.invoice.vendorZipCode}></input>
                </div>
              </div>
      
            </div>
          </section>
          
          <section>
            <h3 className={`'h3Variant' ${styles.h3}`}>Bill To</h3>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='clientName' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Client Name</label>
              <input id='clientName' onChange={handleInputChange} className={`${getInputClassName('clientName')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.clientName}></input>
            </div>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='clientEmail' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Client Email</label>
              <input id='clientEmail' onChange={handleInputChange} className={`${getInputClassName('clientEmail')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.clientEmail}></input>
            </div>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='clientStreetAddress' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Street Address</label>
              <input id='clientStreetAddress' onChange={handleInputChange} className={`${getInputClassName('clientStreetAddress')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.clientStreetAddress}></input>
            </div>
            <div className={styles.formRow}>
              <div className={styles.inputCity}>
                <label htmlFor='clientCity' className={`${classNames.label} ${styles.label} bodyTextVariant`} >City</label>
                <input id='clientCity' onChange={handleInputChange} className={`${getInputClassName('clientCity')} ${styles.input}`} type='text' maxLength='40'  defaultValue={props.invoice.clientCity}></input>
              </div>
              <div className={styles.StateZipContainer}>
                <div className={styles.inputState}>
                  <label htmlFor='clientState' className={`${classNames.label} ${styles.label} bodyTextVariant`} >State</label>
                  <input id='clientState' onChange={handleInputChange} className={`${getInputClassName('clientState')} ${styles.input}`} type='text' maxLength='2' defaultValue={props.invoice.clientState}></input>
                </div>
                <div className={styles.inputZipCode}>
                  <label htmlFor='clientZipCode' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Zip Code</label>
                  <input id='clientZipCode' onChange={handleInputChange} className={`${getInputClassName('clientZipCode')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.clientZipCode}></input>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={styles.formRow}>
              <div className={styles.inputTwoPerRow}>
                <label htmlFor='invoiceDate' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Invoice Date</label>
                <input id='invoiceDate' onChange={handleInputChange} className={`${getInputClassName('invoiceDate')} ${styles.input}`} type='text' maxLength='10' defaultValue={props.invoice.invoiceDate}></input>
              </div>
              <div className={`${styles.inputTwoPerRow} ${styles.dropdownContainer}`}>
                <label htmlFor='paymentDropdown' className={`${classNames.label} ${styles.label} bodyTextVariant`} >Payment Terms</label>
                <PaymentTermsDropdown theme={props.theme} invoice={props.invoice} setInvoice={props.setInvoice} />
              </div>
            </div>
            <div className={styles.inputOnePerRow}>
              <label htmlFor='projectDescription'className={`${classNames.label} ${styles.label} bodyTextVariant`} >Project Description</label>
              <input id='projectDescription' onChange={handleInputChange} className={`${getInputClassName('projectDescription')} ${styles.input}`} type='text' maxLength='40' defaultValue={props.invoice.projectDescription}></input>
            </div>
          </section>

          <section>
            <ItemList showFormErrors={showFormErrors} setShowFormErrors={setShowFormErrors} formMode={props.formMode} invoiceSelected={props.invoiceSelected} theme={props.theme} invoice={props.invoice} setInvoice={props.setInvoice}/>
          </section>

          <section>
            <InvoiceFormErrorMessage invoice={props.invoice} showFormErrors={showFormErrors} />
          </section>

          <section>
            <InvoiceFormButtons theme={props.theme} invoice={props.invoice} setInvoice={props.setInvoice} invoices={props.invoices}
              setInvoices={props.setInvoices} setScene={props.setScene} showFormErrors={showFormErrors} setShowFormErrors={setShowFormErrors}
              formMode={props.formMode} />
          </section>
        </form>
        </div>
      </div>
    </div>
  )
}

export default InvoiceForm


