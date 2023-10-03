const getFilteredInvoices = (filterObject, invoices) => {
    const filterArray = []
    const objectArray = Object.entries(filterObject)

    objectArray.forEach(([key, value]) => {
      if(value === true) {
        filterArray.push(key)
      }
    })

    const filteredInvoices = invoices.filter((invoice) => 
     filterArray.includes(invoice.status.toLowerCase())
    ) 
    
    return filteredInvoices

  }

  export default getFilteredInvoices