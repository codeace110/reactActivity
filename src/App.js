import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import hero from './hero';
import login from './login';
import register from './register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" Component={login} />
        <Route exact path="/register" Component={register} />
        <Route exact path="/hero" Component={hero} />
      </BrowserRouter>
    );
  }
}

export default App;
