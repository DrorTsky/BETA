import React, { Component } from "react";
import ChooseFriendsForRotationRequest from "./ChooseFriendsForRotationRequest";

export class Rotation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ChooseFriendsForRotationRequest
          {...this.props}
        ></ChooseFriendsForRotationRequest>
      </div>
    );
  }
}

export default Rotation;
