import React from 'react'
import styles from './InvoiceListMenu.module.css'
import iconArrowLeft from '../assets/icon-arrow-left.svg'
import iconPlus from '../assets/icon-plus-v2.svg'
import Invoice from '../classes/Invoice'
import { useState } from 'react'
import Filter from './Filter'
import setThemeClassNames from '../functions/setThemeClassNames'
import getFilteredInvoices from '../functions/getFilteredInvoices'

const InvoiceListMenu = (props) => {

    const lightClassNames = {heading: styles.headingLight,
        textColor: styles.textColorLight,
        filterLabel: styles.filterLabelLight,
        save: styles.saveDraftLight,
        formContainer: styles.formContainerLight
    }
    
    const darkClassNames = {heading: styles.headingDark,
       textColor: styles.textColorDark,
       filterLabel: styles.filterLabelDark,
       save: styles.saveDraftLight,
       formContainer: styles.formContainerDark
    }
    
    const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

    const [filterDisplay, setFilterDisplay] = useState(false)
  
    const handleClickNewInvoice = () => {
        props.setInvoice(new Invoice)
        props.setFormMode('New Invoice')
        props.setScene('NewInvoice')
    }

    const handleClickFilterLabel = () => {
        updateFilterDisplay()
    }

    const updateArrow = () => {
        let arrowClass
        switch(filterDisplay){
            case false:
                arrowClass = styles.arrowDown
                break
            case true:
                arrowClass = styles.arrowUp
        }

        return arrowClass
    }

    const updateFilterDisplay = () => {
        switch(filterDisplay){
            case false:
                setFilterDisplay(true)
            break

            case true:
                setFilterDisplay(false)
        }
    }

    const getInvoicesText = () => {
        let text
        if(props.invoices.length === 0){
            text = 'No invoices' 
        } 
        else{
            const filteredInvoices = getFilteredInvoices(props.filter, props.invoices)
            const count = filteredInvoices.length

            if(count === 0){
                text = 'There are 0 invoices'
            }
            else if(count === 1){
                text = 'There is 1 invoice'
            }
            else{
                text =  'There are ' + count + ' invoices'
            }
        }

        return text
    }

    const menuJsx = 
    <div className={styles.menuContainer}>
        <div className={styles.headingContainer}>
            <h1 className={`${styles.heading} ${classNames.heading}`}>Invoices</h1>
            <p className={`${styles.bodyText} ${classNames.textColor}`}>{getInvoicesText()}</p>
        </div>
        <div className={styles.rightContainer}>
            <div onClick={handleClickFilterLabel} className={`${classNames.filterLabel} ${styles.filterLabel}`}>
                <p className={styles.bodyText}>Filter <span className={styles.mobileHidden}>By Status</span></p>
                <img src={iconArrowLeft} width="11" height="7" alt='arrow-left' className={updateArrow()} />
            </div>
            <button onClick={handleClickNewInvoice} className={styles.addInvoiceButton}>
                <img src={iconPlus} width="32" height="32" alt='icon-plus' className={styles.iconPlus}/>
                <p className={styles.addInvoiceButtonText}>New <span className={styles.mobileHidden}>Invoice</span></p>
            </button>
        </div>
    </div>
    
    let display
    switch(filterDisplay){

        case false:
            display = 
                <div className={styles.parentContainer}>
                    {menuJsx}
                </div>
        break

        case true:
            display = 
                <div className={styles.parentContainer}>
                    {menuJsx}
                    <Filter theme={props.theme} filter={props.filter} setFilter={props.setFilter}/>
                </div>         
    }

  return (
    display
  )

}

export default InvoiceListMenu
