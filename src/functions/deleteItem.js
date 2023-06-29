const deleteItem = (array1, event) => {
    const array2 = array1.filter(element =>
        element.id !== event.target.parentNode.id)
    
    return array2
}

export default deleteItem