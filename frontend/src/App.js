import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from "./components/Box/Box";
import ScoreSidebar from "./components/ScoreSidebar/ScoreSidebar";
import EmailTabContainer from "./components/EmailTabContainer/EmailTabContainer";

function App() {
  return (
    <div className="App">
      <ScoreSidebar/>
        <EmailTabContainer/>
    </div>
  );
}

export default App;
