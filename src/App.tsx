import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './containers/Home';
import Layout from './shared/layouts/layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      </Provider>
    </Layout>
  );
}

export default App;
