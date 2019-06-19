import React, { Component } from "react";

import { CharacterListView } from "./views";
import "./styles/App.css";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return <CharacterListView />;
  }
}


function mapStateToProps(state){
  return {}
}

export default connect(mapStateToProps)(App)
