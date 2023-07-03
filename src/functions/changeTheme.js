const changeTheme = (currentTheme) => {

    let newTheme
    switch(currentTheme){
        case 'light':
            newTheme = 'dark'
            break
        case 'dark':
            newTheme = 'light'
    }

    return newTheme
}

export default changeTheme