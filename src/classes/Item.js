import { nanoid } from "nanoid"

class Item {
    constructor() {
        this.id = nanoid()
        this.name = ''
        this.quantity = ''
        this.price = ''
        this.total = '0.00'
    }
}

export default Item