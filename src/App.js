import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import { ThemeProvider } from 'styled-components'

const theme = {}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="App-header">
            <Logo width="80" height="80"/>
            <h2>Welcome to Inferno</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
