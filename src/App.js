import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 导入UI组件
import AppleDetails from './Component/AppleDetail'
import AppleList from './Component/AppleList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppleDetails />
          <AppleList />
      </div>
    );
  }
}

export default App;
