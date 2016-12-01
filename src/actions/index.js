export const changeText = (text) => {
    return {
        type: 'CHANGE_TEXT',
        text
    }
}

export const addToList = (item) => {
    return {
        type: 'ADD_TO_LIST',
        item
    }
}