import React from 'react'
import styles from './InvoiceList.module.css'
import iconArrowRight from '../assets/icon-arrow-right-v2.svg'
import NoInvoices from './NoInvoices'
import setThemeClassNames from '../functions/setThemeClassNames'
import {formatAsCurrency} from '../functions/utilities'
import StatusBox from './StatusBox'
import getFilteredInvoices from '../functions/getFilteredInvoices'

const InvoiceList = (props) => {

  const lightClassNames = {liColors: styles.liColorsLight,
    poundSign: styles.poundSignLight,
    id: styles.idLight,
    dueDate: styles.dueDateLight,
    clientName: styles.clientNameLight,
    invoiceTotal: styles.invoiceTotalLight,
    statusBoxDraft: styles.statusBoxDraftLight,
    statusTextDraft: styles.statusTextDraftLight
  }

  const darkClassNames = {liColors: styles.liColorsDark,
    poundSign: styles.poundSignDark,
    id: styles.idDark,
    dueDate: styles.dueDateDark,
    clientName: styles.clientNameDark,
    invoiceTotal: styles.invoiceTotalDark,
    statusBoxDraft: styles.statusBoxDraftDark,
    statusTextDraft: styles.statusTextDraftDark
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const handleClickViewInvoice = (e) => {

    const newInvoice = {...props.invoices.find((invoice) => invoice.id === e.target.id)}
    props.setInvoice(newInvoice)
    props.setScene('ViewInvoice')
  }

  const filteredInvoices = getFilteredInvoices(props.filter, props.invoices)

  const listItems = filteredInvoices.map(item =>

    <li className={`${classNames.liColors} ${styles.li}`}  key={item.id}>
      <button className={styles.viewInvoiceButton} aria-label='ViewInvoice' id={item.id} onClick={handleClickViewInvoice}></button>
      <p className={`${classNames.id} ${styles.h3} ${styles.id}`}><span className={classNames.poundSign}>#</span>{item.id}</p>
      <p className={`${styles.bodyTextVariant} ${classNames.dueDate} ${styles.dueDate}`}>Due {item.dueDate}</p>
      <p className={`${styles.bodyTextVariant} ${classNames.clientName} ${styles.clientName}`}>{item.clientName}</p>
      <p className={`${classNames.invoiceTotal} ${styles.h3} ${styles.invoiceTotal}`}>{formatAsCurrency(item.total)}</p>
      <div className={styles.statusBox}>
        <StatusBox theme={props.theme} status={item.status}/>
      </div>
      <div className={styles.arrowContainer}>
        <img className={styles.iconArrowRight} width="10" height="7" src={iconArrowRight} alt='arrow-right' />
      </div>
    </li>
  )

  const setInvoiceListDisplay = () => {
    let display
    if(props.invoices.length === 0){
      display = <NoInvoices theme={props.theme}/>
    }
    else{
      display =
        <ul className={styles.parentContainer}>
          {listItems}
        </ul>   
    }

    return display
  }

  return (
      setInvoiceListDisplay()
  )
}

export default InvoiceList

