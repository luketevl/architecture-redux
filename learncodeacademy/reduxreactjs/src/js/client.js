import React from 'react';
import ReactDom from 'react-dom';

// Important with redux work
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import store from './store';

const app = document.getElementById('app');

ReactDom.render(
  // Important, all components have the STORE
  <Provider store={store}>
    <Layout />
  </Provider> , app);
