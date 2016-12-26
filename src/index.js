import Inferno from 'inferno';
import Component from 'inferno-component';
import firebase from 'firebase'

class App extends Component {
  
  componentDidMount() {
    const facebookPermissions = [
      'email',
      'public_profile',
    ];
    firebase.initializeApp({
      //private
    });
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope(facebookPermissions.join(','))
    firebase.auth().signInWithRedirect(provider)
          .then(console.log).catch(console.error)
  }

  render() {
    return (
      <div>
        foo
      </div>
    );
  }
}

Inferno.render(
  <App />,
  document.getElementById('app')
);
