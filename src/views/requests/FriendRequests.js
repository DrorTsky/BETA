import React, { Component } from "react";
import Exchanges from "../dashboard/Exchanges";

export class FriendRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Exchanges
          type="2"
          profile={this.props.profile}
          {...this.props.location.requestProps}
        />
      </div>
    );
  }
}

export default FriendRequests;
