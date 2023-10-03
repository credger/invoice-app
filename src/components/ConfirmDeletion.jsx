import React from 'react'
import styles from './ConfirmDeletion.module.css'
import Invoice from '../classes/Invoice'
import setThemeClassNames from '../functions/setThemeClassNames'

const ConfirmDeletion = (props) => {

  const lightClassNames = {popUpContainer: styles.popUpContainerLight,
    heading: styles.headingLight,
    text: styles.textLight,
    cancelButton: styles.cancelButtonLight,
    formContainer: styles.formContainerLight
  }

  const darkClassNames = {popUpContainer: styles.popUpContainerDark,
    heading: styles.headingDark,
    text: styles.textDark,
    cancelButton: styles.cancelButtonDark,
    formContainer: styles.formContainerDark
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const handleClickDelete = () => {
    props.setScene('InvoiceList')

    props.setInvoices(
      props.invoices.filter(invoice => invoice.id !== props.invoice.id)
    )

    props.setInvoice(new Invoice)
  }
 
  const handleClickCancel = () => {
    props.setScene('ViewInvoice')
  }

  return (
    <div className={styles.parentContainer}>
      <div className={`${classNames.popUpContainer} ${styles.popUpContainer}`}>
          <div className={styles.contentContainer}>
            <h2 className={classNames.heading}>Confirm Deletion</h2>
            <p className={`${classNames.text} ${styles.text} ${styles.bodyText}`}>Are you sure you want to delete invoice #{props.invoice.id}?  This action cannot be undone.</p>
            <div className={styles.buttonContainer}>
                <button onClick={handleClickCancel}className={`${classNames.cancelButton} ${styles.cancelButton} ${styles.h3Variant}`}>Cancel</button>
                <button onClick={handleClickDelete} className={`${styles.deleteButton} ${styles.h3Variant}`}>Delete</button>
            </div>  
          </div>

      </div>
    </div>
  )
}

export default ConfirmDeletion
