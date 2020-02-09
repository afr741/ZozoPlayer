import React from 'react';
import WbnPlayer from './WbnPlayer';
import GlobalStyle from '../styles/GlobalStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={WbnPlayer} />

      <Route exact path='/:activeVideo' component={WbnPlayer} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
