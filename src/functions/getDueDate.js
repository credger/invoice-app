import { addDaystoDate, formatDate } from "./utilities"

const getDueDate = (dateString, paymentTerms) => {
    const parsedDate = Date.parse(dateString)
    const newDate = new Date(parsedDate)

    let days
    switch(paymentTerms){
      case 'Net 1 Day':
        days=1
      break

      case 'Net 7 Days':
        days=7
      break

      case 'Net 14 Days':
        days=14
      break

      case 'Net 30 Days':
        days=30
    }
    
    const futureDate = addDaystoDate(newDate, days)
    const futureDateFormatted = formatDate(futureDate)
    return futureDateFormatted

}

export default getDueDate