import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addReminder } from './actions';



class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  addReminder() {
    // console.log('this.state', this.state);
    // console.log('this', this);
    this.props.addReminder(this.state.text);
  }



  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
          <div className="title">Rminder</div>
            <div className="">
                <div className="">
                   <input className=""
                   placeholder="I have to ..."
                   onChange={ event => this.setState({ text: event.target.value }) }
                   />
                   <button
                   className="" type="button"
                   onClick={()=>this.addReminder()}
                   >Add Rminder</button>
                </div>
            </div>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({addReminder}, dispatch);
//   }


function mapStateToprops(state) {
  // console.log('state',state);
  return {
    reminders: state
  }
}




export default connect(null, {addReminder})(App);
