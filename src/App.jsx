import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="ggc-app">
        <div className ="ggc-header">Header</div>
        <div className ="ggc-main">
          <div className="ggc-side-panel">Side Panel</div>
          <div className="ggc-activity-plan">Main Area For Calendar</div>
        </div>
      </div>
    );
  }
}

export default App;
