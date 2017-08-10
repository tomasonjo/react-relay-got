import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {

  render() {

    console.log(this.props)
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    house: () => Relay.QL`
      fragment on House {
            name
            words
            founder {
              name
            }
            seats {
              name
            }
            region {
              name
            }
            follows {
              name
            }
            followers(first:10) {
              name
              seats { name }
            }
      }
    `,
  },
});
