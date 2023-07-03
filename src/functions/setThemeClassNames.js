const setThemeClassNames = (theme, lightClassNames, darkClassNames) => {

    let classNames
    switch(theme){
        case 'light':
          classNames = lightClassNames
          break
        case 'dark':
          classNames = darkClassNames
    }

    return classNames
}

export default setThemeClassNames