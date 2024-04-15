import React from 'react';
import Routes from './routes/routes';
import './styles/global.css';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
