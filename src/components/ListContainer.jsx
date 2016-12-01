import { connect } from 'react-redux'
import List from './List'
import {addToList} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (item) => {
            dispatch(addToList(item))
        }
    }
}

/*const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        mergeProp: mergePropVal
    }
}*/

export default connect(mapStateToProps, mapDispatchToProps)(List)