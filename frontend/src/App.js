import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from "./components/Box/Box";
import ScoreSidebar from "./components/ScoreSidebar/ScoreSidebar";
import EmailViewer from "./components/EmailViewer/EmailViewer";
import EmailTab from "./components/EmailTab/EmailTab";
import EmailTabContainer from "./components/EmailTabContainer/EmailTabContainer";
import SettingsTab from "./components/SettingsTab/SettingsTab";

function App() {
  return (
    <div className="App">
        <ScoreSidebar/>
        <EmailTabContainer>
            <EmailTab/>
        </EmailTabContainer>
        <div className={"RightBox"}>
            <EmailViewer/>
            <SettingsTab/>
        </div>

    </div>
  );
}

export default App;
