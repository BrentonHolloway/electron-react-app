// import { Component } from 'react'
import logo from '../../assets/logo.svg';
import './App.css';
import { channels } from '../../shared/constants';
const { ipcRenderer } = window;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appname: '',
//       appVersion: '',
//     };

//     ipcRenderer.send(channels.APP_INFO);
//     ipcRenderer.on(channels.APP_INFO, (event, arg) => {
//       ipcRenderer.removeAllListeners(channels.APP_INFO);
//       const { appName, appVersion } = arg;
//       this.setState({ appName, appVersion });
//     })
//   }

//   render(){
//     const { appName, appVersion } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} alt="logo" className="App-logo"/>
//           <p>{appName} version {appVersion}</p>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
