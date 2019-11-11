import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import './App.scss'

import Navigation from "./components/Navigation/navigation";
import StreamList from './components/streams/StremeList/StremeList'
import StreamCreate from './components/streams/StreamCreate/StreamCreate'
import StreamEdit from './components/streams/StreamEdit/StreamEdit'
import StreamShow from './components/streams/StremeShow'

import '@fortawesome/fontawesome-free/css/all.css'

class App extends Component {
  render() {
    return (
      <div>
        <div className="main_header">
          <Navigation />
        </div>
        <span className="h-39" />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/show" component={StreamShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
