import { nanoid } from "nanoid"
import Item from "../classes/Item"

const addItem= (array0) => {
    const array1 = array0
    const array2 = new Item
    const array3 = array1.concat(array2)
    return array3
}

export default addItem

