import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { changeText } from '../actions';

let NewInput = ({ title, onClick }) => {
    let input;

    return <div>
        <input
            type="text"
            placeholder="writeme"
            title={title}
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

const mapStateToProps = (state, { params }) => ({
       title: params.text
})

export default withRouter(connect(mapStateToProps, { onClick: changeText })(NewInput));