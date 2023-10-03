import React from 'react'
import styles from './ItemList.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'
import iconDelete from '../assets/icon-delete.svg'
import {isEmpty} from '../functions/utilities'
import Item from '../classes/Item'


const ItemList = (props) => {

  const lightClassNames = {input: styles.inputLight,
    inputError: styles.inputErrorLight, 
    label: styles.labelLight, 
    inputVariant: styles.inputVariantLight, 
    itemTotal: styles.itemTotalLight,
    button: styles.buttonLight
  }
   
  const darkClassNames = {input: styles.inputDark,
    inputError: styles.inputErrorDark, 
    label: styles.labelDark,
    inputVariant: styles.inputVariantDark, 
    itemTotal: styles.itemTotalDark,
    button: styles.buttonDark
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const itemAttributes = ['name', 'quantity', 'price']

  const handleClickAddItem=()=>{

    const newInvoice = {...props.invoice}
    const newItems = [...props.invoice.items]
    newInvoice.items = newItems.concat([new Item])
    props.setInvoice(newInvoice)

  }

  const handleClickDelete = (event) =>{
    const newInvoice = {...props.invoice}
    
    const newItems = [...props.invoice.items].filter(item =>
      item.id !== event.target.id)

    newInvoice.items = newItems
    props.setInvoice(newInvoice)
  }

  const handleChange = (event) => {
    const newInvoice = {...props.invoice}
    const newItems = updateItems(event)
    newInvoice.items = newItems
    props.setInvoice(newInvoice)
  }

  const getInputClassName = (item, property) => {
    const styles = {name: classNames.input, quantity: classNames. input, price: classNames.input}

    if(props.showFormErrors){
        if(isEmpty(item[property])){
          styles[property] = classNames.inputError
        }
    }

    return styles[property]

  }

  const updateItems = (event) => {

    const newItems = props.invoice.items.map(item => {

        const newItem = {...item}

        itemAttributes.map((attribute) => {
            const attributeId = item.id + '-' + attribute
            if(attributeId === event.target.id){
            newItem[attribute] = event.target.value
            }

            newItem.total = (newItem.quantity*newItem.price).toFixed(2)
            
        })

        return newItem;

    })

    return newItems
  }

  const listItems = props.invoice.items.map(item => 
    <li className={styles.li} id={item.id} key={item.id}>
      <div className={styles.columnOne}>
        <label htmlFor={`${item.id}-name`}className={styles.visuallyHidden}>Item Name </label>
        <p className={`${classNames.label} ${styles.bodyTextVariant} ${styles.mobileLabels}`}>Item Name</p>
        <input id={`${item.id}-name`} onChange={handleChange} className={`${getInputClassName(item, 'name')} ${styles.input}`} type='text' maxLength='60' defaultValue={item.name}></input>
      </div>
      <div className={styles.columnTwo}>
        <label htmlFor={`${item.id}-quantity`} className={styles.visuallyHidden}>Quantity</label>
        <p className={`${classNames.label} ${styles.bodyTextVariant} ${styles.mobileLabels}`}>Qty.</p>
        <input id={`${item.id}-quantity`}onChange={handleChange} className={`${getInputClassName(item, 'quantity')} ${styles.input}`} type='number' defaultValue={item.quantity}></input>
      </div>
      <div className={styles.columnThree}>
        <label htmlFor={`${item.id}-price`} className={styles.visuallyHidden}>Price</label>
        <p className={`${classNames.label} ${styles.bodyTextVariant} ${styles.mobileLabels}`}>Price</p>
        <input id={`${item.id}-price`} onChange={handleChange} className={`${getInputClassName(item, 'price')} ${styles.input}`}type='number' defaultValue={item.price}></input>
      </div>
      <div className={styles.columnFour}>
        <label htmlFor={`${item.id}-total`} className={styles.visuallyHidden}>Total</label>
        <p className={`${classNames.label} ${styles.bodyTextVariant} ${styles.mobileLabels}`}>Total</p>
        <input id={`${item.id}-total`} readOnly className={`${classNames.itemTotal} ${styles.itemTotal}`}type='number' value={item.total}></input>
      </div>
      <div className={styles.deleteIconContainer} >
        <div className = {styles.clickContainer} id={item.id} onClick={handleClickDelete}></div>
        <img src={iconDelete} alt='icon-delete' className={styles.iconDelete}/>
      </div>
    </li>
  )

  return (
    <div className='.parentContainer'>
      <h2 className={styles.h2}>Item List</h2>
      <div className={`${styles.itemListLabels} ${classNames.label} ${styles.bodyTextVariant}`}>
        <div className={styles.columnOne} >Item Name</div>
        <div className={styles.columnTwo} >Qty.</div>
        <div className={styles.columnThree} >Price</div>
        <div className={styles.columnFour} >Total</div>
        <div className={styles.columnFive}></div>
      </div>
      <ul className={styles.ul}>{listItems}</ul>
      <button type='button' onClick={handleClickAddItem} className={`${styles.button} ${classNames.button} ${styles.h3Variant}`}>+ Add New Item</button>
    </div>

  )
}

export default ItemList
