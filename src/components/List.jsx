import React from 'react'

const List = ({ onClick, text }) => {
    return(
        <button onClick={() => onClick(text)}>Add
         </button>
    )
}

export default List