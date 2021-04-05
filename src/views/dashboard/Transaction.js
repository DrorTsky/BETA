import React, { Component } from "react";
import { CListGroupItem } from "@coreui/react";

export class Transaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: props.from,
      to: props.to,
      amount: props.amount,
      myAddress: props.myAddress,
    };
  }

  render() {
    let typeOfCard =
      this.state.to === this.state.myAddress ? "success" : "danger";
    return (
      <div>
        <CListGroupItem accent={typeOfCard} color={typeOfCard}>
          {this.state.amount} || From: {this.state.from}, To:{this.state.to}
        </CListGroupItem>
      </div>
    );
  }
}

export default Transaction;
