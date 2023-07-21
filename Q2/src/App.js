import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrainsPage from './Pages/AllTrainsPage';
import SingleTrainPage from './Pages/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrainsPage} />
        <Route exact path="/trains/:trainNumber" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
};

export default App;
