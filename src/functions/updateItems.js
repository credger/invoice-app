const updateItems = (items, itemAttributes, event) => {

    const newItems = items.map(item => {

    const newItem = item

    itemAttributes.map((attribute) => {
        const attributeId = item.id + '-' + attribute
        if(attributeId === event.target.id){
        newItem[attribute] = event.target.value
        }

        newItem.total = (newItem.quantity*newItem.price).toFixed(2)
        
    })

    return newItem;

    })

    return newItems
}

export default updateItems