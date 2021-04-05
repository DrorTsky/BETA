import React, { Component } from "react";
import Exchanges from "../dashboard/Exchanges";

export class RotationRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Exchanges
          type="3"
          profile={this.props.profile}
          {...this.props.location.requestProps}
        />
      </div>
    );
  }
}

export default RotationRequests;
