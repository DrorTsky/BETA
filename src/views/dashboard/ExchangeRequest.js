import React, { Component } from "react";

import DebtRequest from "./DebtRequest";
import FriendRequest from "./FriendRequest";
import RotationRequest from "./RotationRequest";

export class ExchangeRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const exchanges = [];
    var { amount, ...friendProps } = this.props;
    if (this.props.exchangePurpose === "1") {
      exchanges.push(
        <DebtRequest key={this.props.creationDate} {...this.props} />
      );
    } else if (this.props.exchangePurpose === "0") {
      exchanges.push(
        <FriendRequest key={this.props.creationDate} friendProps />
      );
    } else if (this.props.exchangePurpose === "2") {
      exchanges.push(<RotationRequest key={this.props.creationDate} />);
    }

    return <div>{exchanges}</div>;
  }
}

export default ExchangeRequest;