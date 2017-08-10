import 'babel-polyfill';

import App from './components/App';
import AppHomeRoute from './routes/AppHomeRoute';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:7474/graphql/', {
    headers: {
      Authorization: 'Basic bmVvNGo6YnVyZWsxMjM=',
    },
  })
);


ReactDOM.render(
  <Relay.Renderer
    environment={Relay.Store}
    Container={App}
    queryConfig={new AppHomeRoute({name:'House Stark of Winterfell'})}
  />,
  document.getElementById('root')
);

