import React from 'react'
import { connect } from 'react-redux'

let key = 0;
let Dropdown = ({ list }) => {
    return (
        <select>
            {list.map(item => 
                <option value={item} key={key++}>{item}</option>
            )}
        </select>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

Dropdown = connect(mapStateToProps)(Dropdown)

export default Dropdown