import React from 'react'
import styles from './NoInvoices.module.css'
import illustrationEmpty from '../assets/illustration-empty.svg'
import setThemeClassNames from '../functions/setThemeClassNames'

const NoInvoices = (props) => {

const lightClassNames = {heading: styles.headingLight,
    text: styles.textLight,
    label: styles.labelLight,
    save: styles.saveDraftLight,
    formContainer: styles.formContainerLight
}

const darkClassNames = {heading: styles.headingDark,
   text: styles.textDark,
   label: styles.labelDark,
   save: styles.saveDraftLight,
   formContainer: styles.formContainerDark
}

const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  return (
    <div className={styles.parentContainer}>
        <img src={illustrationEmpty} alt='illustrationEmpty' className={styles.illustrationEmpty}/>
        <h2 className={classNames.heading}>There is nothing here</h2>
        <p className={`${classNames.text} ${styles.bodyTextVariant}`}>Create an invoice by clicking the <span className={styles.boldText}>New Invoice</span> button and get started</p>
    </div>
  )
}

export default NoInvoices
