import createInvoiceId from '../functions/createInvoiceId'
import Item from './Item'
import {formatDate} from '../functions/utilities'

class Invoice {
    constructor(){
        this.id = createInvoiceId()
        this.vendorName = ''
        this.vendorStreetAddress = ''
        this.vendorCity = ''
        this.vendorState = ''
        this.vendorZipCode = ''
        this.clientName = ''
        this.clientEmail = ''
        this.clientStreetAddress = ''
        this.clientCity = ''
        this.clientState = ''
        this.clientZipCode = ''
        this.invoiceDate = formatDate(new Date)
        this.paymentTerms = 'Net 30 Days'
        this.dueDate = ''
        this.projectDescription = ''
        this.items = [new Item]
        this.total = ''
        this.status = ''
    }
}

export default Invoice