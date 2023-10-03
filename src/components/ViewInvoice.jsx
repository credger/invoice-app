import React from 'react'
import styles from './ViewInvoice.module.css'
import {formatAsCurrency} from '../functions/utilities'
import setThemeClassNames from '../functions/setThemeClassNames'
import StatusBox from './StatusBox'



const ViewInvoice = (props) => {

    const lightClassNames = {parentContainer: styles.parentContainerLight,
        text: styles.textLight,
        h3Color: styles.h3ColorLight,
        itemListContainer: styles.itemListContainerLight,
        amountDueContainer: styles.amountDueContainerLight,
        itemListColorOne: styles.itemListColorOneLight,
        itemListColorTwo: styles.itemListColorTwoLight,
        mobileQuantity: styles.mobileQuantityLight
    }

    const darkClassNames = {parentContainer: styles.parentContainerDark,
        text: styles.textDark,
        h3Color: styles.h3ColorDark,
        itemListContainer: styles.itemListContainerDark,
        amountDueContainer: styles.amountDueContainerDark,
        itemListColorOne: styles.itemListColorOneDark,
        itemListColorTwo: styles.itemListColorTwoDark,
        mobileQuantity: styles.mobileQuantityDark
    }

    const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

    const listItems = props.invoice.items.map(item => 

        <li className={`${styles.itemRow} ${styles.h3Variant}`} key={item.id}>
            <div className={`${styles.itemName} ${classNames.itemListColorOne}`}>
                <p>{item.name}</p>
                <p className={`${styles.mobileQuantity} ${classNames.mobileQuantity}`}>{item.quantity} x {formatAsCurrency(item.price)}</p>
            </div>
            <p className={`${styles.itemQuantity} ${classNames.itemListColorTwo}`}>{item.quantity}</p>
            <p className={`${styles.itemPrice} ${classNames.itemListColorTwo}`}>{formatAsCurrency(item.price)}</p>
            <p className={`${styles.itemTotal} ${classNames.itemListColorOne}`}>{formatAsCurrency(item.total)}</p>
        </li>
    )

    return (
    <div className={`${classNames.parentContainer} ${styles.parentContainer}`}>
        <div className={styles.statusBox}>
            <StatusBox theme={props.theme} status={props.invoice.status}/>
        </div>
        <div className={styles.invoiceHeader}>
            <div className={styles.invoiceID}>
                <h3 className={`${styles.h3} ${classNames.h3Color}`}><span className={styles.poundSign}>#</span>{props.invoice.id}</h3>
                <p className={`${styles.bodyText} ${classNames.text}`}>{props.invoice.projectDescription}</p>
            </div>
            <div className={`${styles.addressContainerOne} ${styles.bodyText} ${classNames.text}`}>
                <h3 className={`${styles.h3} ${classNames.h3Color}`}>{props.invoice.vendorName}</h3>
                <p>{props.invoice.vendorStreetAddress}</p>
                <p>{props.invoice.vendorCity}, {props.invoice.vendorState} {props.invoice.vendorZipCode}</p>
            </div>
        </div>
        <div className={styles.invoiceDetails}>
            <div className={styles.invoiceDates}>
                <div className={styles.containerHeight36px}>
                    <p className={`${styles.bodyText} ${classNames.text}`} >Invoice Date</p>
                    <h3 className={`${styles.h3} ${classNames.h3Color}`}>{props.invoice.invoiceDate}</h3>
                </div>
                <div className={`${styles.containerHeight36px}`}>
                    <p className={`${styles.bodyText} ${classNames.text}`} >Payment Due</p>
                    <h3 className={`${styles.h3} ${classNames.h3Color}`}>{props.invoice.dueDate}</h3>
                </div>
            </div>
            <div className={styles.clientAddress}>
                <div className={`${styles.containerHeight36px}`}>
                    <p className={`${styles.bodyText} ${classNames.text}`} >Bill To</p>
                    <h3 className={`${styles.h3} ${classNames.h3Color}`}>{props.invoice.clientName}</h3>
                </div>
                <div className={`${styles.addressContainerTwo} ${styles.bodyText} ${classNames.text}`}>
                    <p>{props.invoice.clientStreetAddress}</p>
                    <p>{props.invoice.clientCity}, {props.invoice.clientState} {props.invoice.clientZipCode}</p>
                </div>
            </div>
            <div className={styles.customerEmail}>
                <div className={`${styles.containerHeight36px}`}>
                    <p className={`${styles.bodyText} ${classNames.text}`} >Sent to</p>
                    <h3 className={`${styles.h3} ${classNames.h3Color}`}>{props.invoice.clientEmail}</h3>
                </div>
            </div>
        </div>
        <div className={`${classNames.itemListContainer} ${styles.itemListContainer}`}>
            <div className={`${styles.marginTop32px} ${styles.itemRow} ${styles.bodyText} ${classNames.text}`}>
                <p className={styles.itemName}>Item Name</p>
                <p className={styles.itemQuantity}>QTY.</p>
                <p className={styles.itemPrice}>Price</p>
                <p className={styles.itemTotal}>Total</p>
            </div>
            {listItems}
        </div>
        <div className={`${classNames.amountDueContainer} ${styles.amountDueContainer}`}>
            <div className={styles.amountDueRow}>
                <p className={styles.amountDueText}>Amount Due</p>
                <p className={styles.invoiceTotalText}>{formatAsCurrency(props.invoice.total)}</p>
            </div>
        </div>
    </div>
  )
}

export default ViewInvoice
