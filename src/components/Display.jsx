import React from 'react';
import { connect } from 'react-redux';

const DisplayPresentation = ({
    text
}) => {
    return <div>{text}</div>
}

const mapStateProps = (
    state
) => {
    return { text: state.text }
}

export default connect(mapStateProps)(DisplayPresentation);