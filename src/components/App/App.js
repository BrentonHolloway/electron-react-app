import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg';
import './App.css';
import { channels } from '../../shared/constants';
const { ipcRenderer } = window;

function App() {
  const [appName, setAppName] = useState(null);
  const [appVersion, setAppVersion] = useState(null);

  useEffect(() => {
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      setAppName(arg.appName);
      setAppVersion(arg.appVersion);
    })

    return () => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>AppName: {appName} <br/> Version: {appVersion}</p>
      </header>
    </div>
  );
}

export default App;