import React from 'react'
import styles from './InvoiceForm.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'
import ItemList from './ItemList'
import Invoice from '../classes/Invoice'
import { useState } from 'react'
import updateInvoice from '../functions/updateInvoice'


const lightClassNames = {'input': styles.inputLight,
                         'form': styles.formLight,
                         'label': styles.labelLight,
                         'save': styles.saveDraftLight}

const darkClassNames = {'input': styles.inputDark,
                        'form': styles.formDark,
                        'label': styles.labelDark,
                        'save': styles.saveDraftLight}

const invoiceAttributes = ['vendorStreetAddress', 'vendorCity', 'vendorPostCode', 'vendorCountry',
                           'clientName', 'clientEmail', 'clientStreetAddress', 'clientCity',
                           'clientPostCode', 'clientCountry', 'invoiceDate', 'paymentTerms',
                           'projectDescription']

const InvoiceForm = (props) => {

const [invoice, setInvoice] = useState(new Invoice)

const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)


const handleChange = (event) => {
  const newInvoice = updateInvoice(invoice, invoiceAttributes, event)
  setInvoice(newInvoice)

  console.log(invoice)
}


  return (
    <div>
      <form className={`${classNames.form} ${styles.form}`}>
        <section>
          <h3 className={`'h3Variant' ${styles.h3}`}>Bill From</h3>
          <div className={styles.inputOnePerRow}>
            <label className={`${classNames.label} ${styles.label} bodyTextVariant`}>Street Address</label>
            <input id='vendorStreetAddress' onChange={handleChange} className={`${classNames.input} ${styles.input}`}type='text'></input>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >City</label>
              <input id='vendorCity' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Post Code</label>
              <input id='vendorPostCode' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Country</label>
              <input id='vendorCountry' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className={`'h3Variant' ${styles.h3}`}>Bill To</h3>
          <div className={styles.inputOnePerRow}>
            <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Client's Name</label>
            <input id='clientName' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
          </div>
          <div className={styles.inputOnePerRow}>
            <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Client's Email</label>
            <input id='clientEmail' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
          </div>
          <div className={styles.inputOnePerRow}>
            <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Street Address</label>
            <input id='clientStreetAddress' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >City</label>
              <input id='clientCity' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Post Code</label>
              <input id='clientPostCode' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
            <div className={styles.inputThreePerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Country</label>
              <input id='clientCountry' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.formRow}>
            <div className={styles.inputTwoPerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Invoice Date</label>
              <input id='invoiceDate' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
            <div className={styles.inputTwoPerRow}>
              <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Payment Terms</label>
              <input id='paymentTerms' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
            </div>
          </div>
          <div className={styles.inputOnePerRow}>
            <label className={`${classNames.label} ${styles.label} bodyTextVariant`} >Project Description</label>
            <input id='projectDescription' onChange={handleChange} className={`${classNames.input} ${styles.input}`} type='text'></input>
          </div>
        </section>

        <section>
          <ItemList theme={props.theme} invoice={invoice} setInvoice={setInvoice}/>
        </section>

        <section>
          <div className={styles.formRow}>
            <button type='button' className={`${styles.formButton} ${styles.discard}`}>Discard</button>
            <button type='button' className={`${styles.formButton} ${classNames.save} ${styles.saveDraft}`}>Save as Draft</button>
            <button type='button' className={`${styles.formButton} ${styles.saveSend}`}>Save & Send</button>
          </div>
        </section>
        
      </form>
      
    </div>
  )
}

export default InvoiceForm

