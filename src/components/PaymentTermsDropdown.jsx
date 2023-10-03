import React from 'react'
import styles from './PaymentTermsDropdown.module.css'
import iconArrowLeft from '../assets/icon-arrow-left.svg'
import { useState } from 'react'
import setThemeClassNames from '../functions/setThemeClassNames'

const PaymentTermsDropdown = (props) => {


    const lightClassNames = {inputContainerOne: styles.inputContainerOneLight,
        inputContainerTwo: styles.inputContainerTwoLight,
        borderBottom: styles.borderBottomLight,
        dropdownText: styles.dropdownTextLight,
        inputText: styles.inputTextLight,
        dropdownContainer: styles.dropdownContainerLight
   
    }
    
    const darkClassNames = {inputContainerOne: styles.inputContainerOneDark,
        inputContainerTwo: styles.inputContainerTwoDark,
        borderBottom: styles.borderBottomDark,
        dropdownText: styles.dropdownTextDark,
        inputText: styles.inputTextDark,
        dropdownContainer: styles.dropdownContainerDark
    }
    
    const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

    const [dropdown, setDropdown] = useState(false)

    const handleClickInput = () => {
        updateDropdown()
    }

    const updateInput = (event) => {

        const newInvoice = {...props.invoice}
        switch(event.target.id){
            case 'net1day':
                newInvoice.paymentTerms = 'Net 1 Day'
            break

            case 'net7days':
                newInvoice.paymentTerms = 'Net 7 Days'
            break

            case 'net14days':
                newInvoice.paymentTerms = 'Net 14 Days'
            break

            case 'net30days':
                newInvoice.paymentTerms = 'Net 30 Days'
        }

        props.setInvoice(newInvoice)

        updateDropdown()
    }

    const updateDropdown = () => {
        switch(dropdown){
            case false:
                setDropdown(true)
                break
            case true:
                setDropdown(false)
        }
    }

    const updateArrow = () => {
        let arrowClass
        switch(dropdown){
            case false:
                arrowClass = styles.arrowDown
                break
            case true:
                arrowClass = styles.arrowUp
        }

        return arrowClass
    }

    const updateDisplay = () => {
        let display
        switch(dropdown){
            case false:
                display = dropdownFalse
            break

            case true:
                display = dropdownTrue
        }

        return display
    }

    
    const inputField = 
        <div className={classNames.inputContainerOne}>
            <input id='paymentDropdown' className={`${styles.input} ${styles.h3Variant} ${classNames.inputText}`} onClick={handleClickInput}  value={props.invoice.paymentTerms} readOnly></input>
            <img src={iconArrowLeft} alt='arrow-left' className={updateArrow()} />
        </div>
        

    const dropDownMenu = 
        <div className={classNames.dropdownContainer}>
            <div className={`${styles.h3Variant} ${classNames.inputContainerTwo} ${classNames.borderBottom}`}>
                <div onClick={updateInput} className={styles.clickContainer} id='net1day'></div>
                <p className={classNames.dropdownText}>Net 1 Day</p>
            </div>
            <div onClick={updateInput} className={`${styles.h3Variant} ${classNames.inputContainerTwo} ${classNames.borderBottom}` }>
                <div onClick={updateInput} className={styles.clickContainer} id='net7days'></div>
                <p className={classNames.dropdownText}>Net 7 Days</p>
            </div>
            <div onClick={updateInput} className={`${styles.h3Variant} ${classNames.inputContainerTwo} ${classNames.borderBottom}` }>
                <div onClick={updateInput} className={styles.clickContainer} id='net14days'></div>
                <p className={classNames.dropdownText}>Net 14 Days</p>
            </div>
            <div onClick={updateInput} className={`${styles.h3Variant} ${classNames.inputContainerTwo}` }>
                <div onClick={updateInput} className={styles.clickContainer} id='net30days'></div>
                <p className={classNames.dropdownText}>Net 30 Days</p>
            </div>
        </div>

    
    const dropdownTrue = 
        <div className={styles.parentContainer}>
            {inputField}
            {dropDownMenu}
        </div>

    const dropdownFalse = 
        <div className={styles.parentContainer}>
            {inputField}
        </div>

  return (
    updateDisplay()
  )
}

export default PaymentTermsDropdown