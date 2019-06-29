import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {asyncOperation} from '../actions/index'
import Loader from "react-loader-spinner";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.asyncOperation()
  }

  render() {
    if (this.props.fetching) {
      return (
        <div className = "hidden" >
        <Loader type="Bars" color="red" height={80} width={80} />
        </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
        <p>{this.props.error}</p>
      </div>
    );
  }
}
const mapStateToProps = ({charsReducer}) => {
  const {characters, fetching, error} = charsReducer
  return {
    characters,
    fetching,
    error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {asyncOperation}
)(CharacterListView);
