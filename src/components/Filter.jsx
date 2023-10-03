import React from 'react'
import styles from './Filter.module.css'
import iconCheck from '../assets/icon-check.svg'
import setThemeClassNames from '../functions/setThemeClassNames'

const Filter = (props) => {

  const lightClassNames = {parentContainer: styles.parentContainerLight,
    checkboxFalse: styles.checkboxFalseLight,
  }
  
  const darkClassNames = {parentContainer: styles.parentContainerDark,
    checkboxFalse: styles.checkboxFalseDark,
  }

  const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  const checkboxTrue =
    <div className={styles.checkboxTrue}>
      <img src={iconCheck} className={styles.iconCheck} alt='icon-check'/>
    </div>

  const checkboxFalse = 
    <div className={classNames.checkboxFalse}></div>

    
  const handleClick = (event) => {
    updateFilter(event)
  }

  const updateFilter = (event) => {
   
    const newFilter = {...props.filter}

    switch(event.currentTarget.id){
        case 'draft':
            switch(props.filter.draft){
                case true:
                    newFilter.draft = false
                    break
                case false:
                    newFilter.draft = true
            }
            break

        case 'pending':
            switch(props.filter.pending){
                case true:
                    newFilter.pending = false
                    break
                case false:
                    newFilter.pending = true
            }
            break

        case 'paid':
            switch(props.filter.paid){
                case true:
                    newFilter.paid = false
                    break
                case false:
                    newFilter.paid = true
            }        
    }

    props.setFilter(newFilter)
  } 

  const updateCheckbox = (status) => {
    let x
    switch(props.filter[status]){
      case true:
        x = checkboxTrue
      break
      
      case false:
        x = checkboxFalse
    }

    return x
  }

  return (
    
    <div className = {`${classNames.parentContainer} ${styles.parentContainer}`}>
      <div className={`${styles.filterRow} ${styles.marginTop24px} ${styles.marginBottom16px}`}>
        <div className={styles.clickContainer} onClick={handleClick} id='draft'></div>
        {updateCheckbox('draft')}
        <p className={styles.text}>Draft</p>
      </div>
      <div className={`${styles.filterRow} ${styles.marginBottom16px}`}>
      <div className={styles.clickContainer} onClick={handleClick} id='pending'></div>
      {updateCheckbox('pending')}
        <p className={styles.text}>Pending</p>
      </div>
      <div className={`${styles.filterRow} ${styles.marginBottom24px}`}>
      <div className={styles.clickContainer} onClick={handleClick} id='paid'></div>
      {updateCheckbox('paid')}
        <p className={styles.text}>Paid</p>
      </div>
    </div>
  )
}

export default Filter
