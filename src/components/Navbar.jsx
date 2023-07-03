import React from 'react'
import styles from './Navbar.module.css'
import navbarLogo from '../assets/navbar-logo.svg'
import imageAvatar from '../assets/image-avatar.jpg'
import iconSun from '../assets/icon-sun.svg'
import iconMoon from '../assets/icon-moon.svg'
import setThemeClassNames from '../functions/setThemeClassNames'
import changeTheme from '../functions/changeTheme'

const lightClassNames = {'iconMoon': styles.iconMoonLight, 'iconSun': styles.iconSunLight}
const darkClassNames = {'iconMoon': styles.iconMoonDark, 'iconSun': styles.iconSunDark}

const Navbar = (props) => {

    const handleClick = () => {
        console.log('click')
        const newTheme = changeTheme(props.theme)
        props.setTheme(newTheme)
    }

const classNames = setThemeClassNames(props.theme, lightClassNames, darkClassNames)

  return (
    <div className={styles.navbarContainer}>
        <img src={navbarLogo} alt='logo' className={styles.navbarLogo}/>
        <div className={styles.dividerLine}></div>
        <img onClick={handleClick} src={iconMoon} alt='moon' className={`${classNames.iconMoon} ${styles.icon}`}/>
        <img onClick={handleClick} src={iconSun} alt='moon' className={`${classNames.iconSun} ${styles.icon}`}/>
        <img src={imageAvatar} alt='logo' className={styles.imageAvatar}/>
      
    </div>
  )
}

export default Navbar
