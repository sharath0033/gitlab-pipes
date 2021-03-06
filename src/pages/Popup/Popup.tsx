import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../../components/Dashboard';
import Pipeline from '../../components/Pipeline';
import Projects from '../../components/Projects';
import Login from '../../components/Login';
import Footer from '../../components/Footer';

const Popup: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/pipeline' component={Pipeline} />
          <Route exact path='/projects' component={Projects} />
          <Route path='/' component={Login} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default Popup;

