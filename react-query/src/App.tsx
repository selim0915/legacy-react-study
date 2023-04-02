import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/:id" component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
