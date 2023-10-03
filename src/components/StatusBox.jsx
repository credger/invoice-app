import React from 'react'
import styles from './StatusBox.module.css'
import setThemeClassNames from '../functions/setThemeClassNames'

const StatusBox = (props) => {

  const lightClassNames = {statusDraft: styles.statusDraftLight}
  const darkClassNames = {statusDraft: styles.statusDraftDark}
 
  const getStatusClassName = () => {
    
    const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

    let className
    switch(props.status){
      case 'Draft':
        className = classNames.statusDraft
        break
      case 'Pending':
        className = styles.statusPending
        break
      case 'Paid':
        className = styles.statusPaid
    }

    return(className)
  } 

  return (
    <div className={styles.parentContainer}>
        <div className={`${styles.statusBox} ${getStatusClassName()}`}>
            <p className={styles.h3Variant}>&#x2022; {props.status}</p>
        </div>
    </div>
  )
}

export default StatusBox
