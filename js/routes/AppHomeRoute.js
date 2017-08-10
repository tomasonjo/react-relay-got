import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    house: () => Relay.QL`
      query {
        House(name:$name)
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
