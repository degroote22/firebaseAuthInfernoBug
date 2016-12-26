import Inferno from 'inferno';
import Component from 'inferno-component';
import { ThemeProvider } from 'styled-components'

const theme = {}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        foo
      </ThemeProvider>
    );
  }
}

export default App;
