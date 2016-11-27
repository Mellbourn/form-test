import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions';

let NewInput = ({ onClick }) => {
    let input;

    return <div>
        <input
            type="text"
            placeholder="writeme"
            ref={node => { input = node; } }
            />
        <button onClick={() => {
            onClick(input.value);
            input.value = '';
        } }>
            save
        </button>
    </div>
}

const mapDispatchProps = (
    dispatch
) => {
    return {
        onClick: (text) => {
            dispatch(changeText(text))
        }
    }
}

export default connect(() => { return {}; }, mapDispatchProps)(NewInput);