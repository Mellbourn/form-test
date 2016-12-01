import React from 'react'

let key = 0;
const List = ({ onClick, text, list }) => {
    return (
        <div>
            <button onClick={() => onClick(text)}>Add</button>
            <ul>
                {list.map(item =>
                    <li key={key++}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default List