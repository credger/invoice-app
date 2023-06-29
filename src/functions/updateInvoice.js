const updateInvoice = (invoice, invoiceAttributes, event) => {

    const newInvoice = invoice

    invoiceAttributes.map((attribute) => {
    if(attribute === event.target.id){
        newInvoice[attribute] = event.target.value
    }
    })

    return newInvoice
}

export default updateInvoice




