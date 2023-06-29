import React from 'react'
import { useState } from 'react'
import styles from './ItemList.module.css'
import setTheme from '../functions/setTheme'
import addItem from '../functions/addItem'
import deleteItem from '../functions/deleteItem'
import iconDelete from '../assets/icon-delete.svg'
import Item from '../classes/Item'
import updateItems from '../functions/updateItems'

const lightClassNames = {'input': styles.inputLight, 
                         'label': styles.labelLight, 
                         'inputVariant': styles.inputVariantLight, 
                         'itemTotal': styles.itemTotalLight,
                         'button': styles.buttonLight
                        }
                        
const darkClassNames = {'input': styles.inputDark, 
                        'label': styles.labelDark,
                        'inputVariant': styles.inputVariantDark, 
                        'itemTotal': styles.itemTotalDark,
                        'button': styles.buttonDark
                        }

                        
const itemAttributes = ['name', 'quantity', 'price']

const ItemList = (props) => {

  const firstItem = new Item
  const [items, setItems] = useState([firstItem])  

  const classNames = setTheme(props.theme, lightClassNames, darkClassNames)

  const handleClickAddItem=()=>{
    const newItems = addItem(items)
    setItems(newItems)
  }

  const handleClickDelete = (event) =>{
    const newItems = deleteItem(items,event)
    setItems(newItems)
  }

  const handleChange = (event) => {
    const newItems = updateItems(items, itemAttributes, event)
    setItems(newItems)
  }

  const newInvoice = props.invoice
  newInvoice.items = items
  props.setInvoice(newInvoice)

  const listItems = items.map(item => 
    <li className={styles.li} id={item.id} key={item.id}>
        <input id={`${item.id}-name`} onChange={handleChange} className={`${classNames.input} ${styles.columnOne} ${styles.input}`} type='text'></input>
        <input id={`${item.id}-quantity`}onChange={handleChange} className={`${classNames.input} ${styles.columnTwo} ${styles.input}`} type='number'></input>
        <input id={`${item.id}-price`} onChange={handleChange} className={`${classNames.input} ${styles.columnThree} ${styles.input}`}type='number'></input>
        <input readOnly className={`${classNames.itemTotal} ${styles.itemTotal} ${styles.columnFour}`}type='number' value={item.total}></input>
        <img src={iconDelete} alt='icon-delete' onClick={handleClickDelete} className={styles.iconDelete}/>
    </li>)


  return (
    <div>
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

