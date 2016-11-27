import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions';

let NewInput = ({ dispatch }) => {
    let input;

    return <div>
        <input
            type="text"
            placeholder="writeme"
            ref={node => { input = node; } }
            />
        <button onClick={() => {
            dispatch(changeText(input.value));
            input.value = '';
        } }>
            save
        </button>
    </div>
}

export default connect()(NewInput);