import React, { Component } from "react";
import Exchanges from "../dashboard/Exchanges";

export class DebtRequests extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this);
    return (
      <div>
        <Exchanges type="1" profile={this.props.profile} {...this.props} />
      </div>
    );
  }
}

export default DebtRequests;
