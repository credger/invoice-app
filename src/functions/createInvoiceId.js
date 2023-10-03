import {getRandomIntInclusive} from '../functions/utilities'

const createInvoiceId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const index1 = getRandomIntInclusive(0,25)
    const index2 = getRandomIntInclusive(0,25)

    const idPart1 = letters[index1]+letters[index2]
    const idPart2 = String(getRandomIntInclusive(1000,9999))
    const id = idPart1 + idPart2

    // if(array1.includes(id)){
    //     createInvoiceId(array1)
    // }

    return id
}

export default createInvoiceId