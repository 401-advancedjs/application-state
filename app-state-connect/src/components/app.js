import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../store/actions.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foo:'bar'
  //   }
  // }

  // handleChange = () => {
  //   this.setState({foo:Math.random()});
  // }

  render() {
    return (
      <div onClick = { this.props.handleChange }>
        {this.props.someStuff.foo}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  someStuff: state.someStuff
});

const mapDispatchtoProps = (dispatch, getState) => ({
  handleChange: () => dispatch(actions.changer('foo'))
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);