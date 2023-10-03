export const addDaystoDate = (date, days) => {
    
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)

    return newDate
}


export const formatAsCurrency = (value) => {
    const currencyObject = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    const formattedValue = currencyObject.format(value)

    return formattedValue
}

export const formatDate = (date) => {
    const month = String(date.getMonth()+1)
    const day = String(date.getDate())
    const year = String(date.getFullYear())

    let mm
    if(month.length === 1){
        mm = '0' + month
    } else{
        mm = month
    }

    let dd
    if(day.length === 1){
        dd = '0' + day
    } else{
        dd = day
    }

    const yyyy = year

    
    const formattedDate = mm + '/' + dd + '/' + yyyy

    return(formattedDate)
}


export const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const randomInt = Math.floor(Math.random() * (max - min + 1) + min)
    return randomInt 
}


export const isEmpty = (value) => {
    
    if(value.replace(/\s+/g, '') === ''){
     return true
    } else{
     return false
    }
}


export const isValidDate = (date) => {

    const mm = date.slice(0,2)
    const dd = date.slice(3,5)
    const yyyy = date.slice(6)
    const char3 = date.slice(2,3)
    const char6 = date.slice(5,6)

    const conditions1 = [typeof date === 'string',
                          date.length === 10,
                          char3 === '/',
                          char6 === '/',
                          !isNaN(mm),
                          !isNaN(dd),
                          !isNaN(yyyy)
    ]

    if(conditions1.includes(false)){
      return false
    }

    const month = parseInt(mm)
    const day = parseInt(dd)
    const year = parseInt(yyyy)
    const months30Days = [4,6,9,11]
    
    let isValid31Days
    if(months30Days.includes(month) && day > 30){
      isValid31Days = false
    }else{
      isValid31Days = true
    }

    let isValid30Days
    if(month === 2 && day > 29){
      isValid30Days = false
    } else{
      isValid30Days = true
    }

    let isValidLeapDay1
    if(month === 2 && year % 4 != 0 && day > 28){
      isValidLeapDay1= false
    } else{
      isValidLeapDay1 = true
    }

    let isValidLeapDay2
    if(month === 2 && year % 100 === 0 && year % 400 != 0 && day > 28){
      isValidLeapDay2 = false
    } else{
      isValidLeapDay2 = true
    }


    const conditions2 = [1 <= month && month <= 12,
                          1 <= day && day <= 31,
                          1000 <= year && year <= 9999,
                          isValid31Days,
                          isValid30Days,
                          isValidLeapDay1,
                          isValidLeapDay2
                      ]

                    
    if(conditions2.includes(false)){
      return false
    } else{
        return true
    }

}


export const isValidEmail = (email) => {

    if(!email.includes('@')){
        return false
    }

    if(email[0] === '@'){
        return false
    }


    const atSignFilter = [...email].filter(char => char === '@')
    if(atSignFilter.length > 1){
        return false
    }

    const atSignIndex = [...email].findIndex(char => char === '@')
    const local = email.slice(0, atSignIndex)
    const domain = email.slice(atSignIndex+1)
 
    const localWhiteList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.'
    const domainWhiteList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-.'

    for(let i=0; i<local.length; i++){
        if(!localWhiteList.includes(local[i]))
            return false
    }

    for(let i=0; i<domain.length; i++){
        if(!domainWhiteList.includes(domain[i]))
            return false
    }

    if(email.includes('..')){
        return false
    }

    if(local.length > 64){
        return false
    }

    return true
    
}


export const isValidState = (state) => {
    const stateAbbreviations = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
        'DC', 'PR', 'VI'
    ]


    if(stateAbbreviations.includes(state)){
        return true
    } else{
        return false
    }

}


export const isValidZip = (zip) => {

    if(zip.length !== 5){
        return false
    }

    for(let i=0; i<5; i++){
        if(isNaN(zip[i])){
            return false
        }
    }

    return true
}



