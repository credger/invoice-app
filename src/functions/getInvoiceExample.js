import Invoice from "../classes/Invoice";
import Item from "../classes/Item";

const getInvoiceExample = () => {
    const inv1 = new Invoice

    const item1 = new Item
    item1.name = 'Photography - Hourly Rate'
    item1.quantity = '8'
    item1.price = '250'
    item1.total = '2000.00'

    const item2 = new Item
    item2.name = 'Drone Package'
    item2.quantity = '1'
    item2.price = '500'
    item2.total = '500.00'

    const item3 = new Item
    item3.name = 'Photo Book'
    item3.quantity = '1'
    item3.price = '125'
    item3.total = '125.00'

    inv1.id = 'NL3824'
    inv1.vendorName = 'Lauren Clark Photography'
    inv1.vendorStreetAddress = '202 Classen Blvd'
    inv1.vendorCity = 'Denver'
    inv1.vendorState= 'CO'
    inv1.vendorZipCode = '80206'
    inv1.clientName = 'Jamie Smith'
    inv1.clientEmail = 'jsmith@ymail.com'
    inv1.clientStreetAddress = '415 Morgan St'
    inv1.clientState = 'CO'
    inv1.clientCity = 'Colorado Springs'
    inv1.clientZipCode = '80829'
    inv1.invoiceDate = '08/24/2021'
    inv1.paymentTerms = 'Net 30 Days'
    inv1.dueDate = '09/24/2021'
    inv1.projectDescription = 'Wedding Photography'
    inv1.total = '2625.00'
    inv1.items = [item1, item2, item3]
    inv1.status = 'Pending'


    return inv1

}

export default getInvoiceExample