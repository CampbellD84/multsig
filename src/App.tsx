import React from 'react';
import { Message, Button } from 'semantic-ui-react'
import './App.css';

function App() {
  const account = "0x123456"
  return (
    <div className="App">
      <div className="App-header">
        <h1>Multi Signature Wallet</h1>
        <div>Account: {account}</div>
        <Message warning>Metamask is not connected</Message>
        <Button color="green">
          Connect to Metamask
    </Button>
      </div>
    </div>
  );
}

export default App;
