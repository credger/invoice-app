import React from 'react'
import styles from './GoBackButton.module.css'
import iconArrowLeft from '../assets/icon-arrow-left.svg'
import Invoice from '../classes/Invoice'
import setThemeClassNames from '../functions/setThemeClassNames'

function GoBackButton(props) {
  const lightClassNames = {textColor: styles.textColorLight}
  const darkClassNames = {textColor: styles.textColorDark}
  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const handleClick = () => {
      // props.setScene('InvoiceList')
      props.setScene(props.name)
      props.setInvoice(new Invoice)
  }

  return (
    <div className={styles.parentContainer}>
      <button onClick={handleClick} className={`${styles.button} ${classNames.textColor} `}>
          <img src={iconArrowLeft} alt='arrow-left' className={styles.iconArrowLeft}/>
          <p className={styles.h3Variant}>Go Back</p>
      </button>
    </div>

  )
}

export default GoBackButton
