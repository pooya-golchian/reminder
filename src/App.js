import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="title">Rminder</div>
            <div className="">
                <div className="">
                   <input className=""
                   placeholder="I have to ..."
                   />
                   <button className="" type="button">Add Rminder</button>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
