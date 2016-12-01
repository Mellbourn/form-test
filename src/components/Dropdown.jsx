import React from 'react'
import { connect } from 'react-redux'

let Dropdown = ({list}) => {
    return(
        <div>
            {list}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.list
    }
}

Dropdown = connect(mapStateToProps)(Dropdown)

export default Dropdown