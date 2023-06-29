import { nanoid } from "nanoid"

class Item {
    constructor() {
        this.id = nanoid()
        this.name = null
        this.quantity = null
        this.price = null
        this.total = 0
    }
}

export default Item