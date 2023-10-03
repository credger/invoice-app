import React from 'react'
import styles from './Navbar.module.css'
import navbarLogo from '../assets/navbar-logo.svg'
import imageAvatar from '../assets/image-avatar.jpg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'


const Navbar = (props) => {

  const handleClick = () => {
      const newTheme = changeTheme()
      props.setTheme(newTheme)
  }

  const moon = 
      <div className={styles.iconContainer}>
        <button onClick={handleClick} aria-label='theme' className={styles.themeButton}></button>
        <img src={iconMoon} width="20" height="20" alt='moon' className={`${styles.icon} ${styles.iconMoon}`}/>
      </div>

  const sun = 
      <div className={styles.iconContainer}>
        <button onClick={handleClick} aria-label='theme' className={styles.themeButton}></button>
        <img src={iconSun} width="20" height="20" alt='moon' className={`${styles.icon} ${styles.iconSun}`}/>
      </div>


  const updateIcon = () => {
    let display
    switch(props.theme){
      case 'light':
        display = moon
      break

      case 'dark':
        display = sun
    }

    return display
  }


  const changeTheme = () => {

    let newTheme
    switch(props.theme){
        case 'light':
            newTheme = 'dark'
            break
        case 'dark':
            newTheme = 'light'
    }

    return newTheme
  }

  const navbar = 
    <div className={styles.navbarContainer}>
      <img src={navbarLogo} width="103" height="103" alt='logo' className={styles.navbarLogo}/>
      <div className={styles.themeAvatarContainer}>
          {updateIcon()}
        <div className={styles.dividerLine}></div>
        <img src={imageAvatar} width="40" height="40" alt='logo' className={styles.imageAvatar}/>
      </div>
    </div>

  return (
    navbar
  )
}

export default Navbar

