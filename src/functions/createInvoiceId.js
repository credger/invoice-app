const createInvoiceId = (array1) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const index1 = getRandomIntInclusive(0,25)
    const index2 = getRandomIntInclusive(0,25)

    const idPart1 = letters[index1]+letters[index2]
    const idPart2 = String(toInt(Math.random()*10**4))
    const id = idPart1 + idPart2

    if(array1.includes(id)){
        createId(array1)
    }

    return id
}

export default createInvoiceId