import React from 'react';
import Page from './components/page';
import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Page}/>
      <Route path="/:userId" component={Page}/>
    </Switch>
  );
}

export default App;
