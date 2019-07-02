import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/numbers-action.js';

class Number extends React.Component{
  render(){
    return(
      <div onClick = { this.props.handleReset }>
        { this.props.number.currentNumber }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.number
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleReset: () => dispatch(actions.resetAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Number)