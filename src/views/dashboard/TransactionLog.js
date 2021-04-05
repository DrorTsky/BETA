import React, { Component } from "react";
import Transaction from "./Transaction";

import { CCard, CCardBody, CListGroup } from "@coreui/react";

export class TransactionLog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTransactions: props.allTransactions,
    };
  }

  render() {
    const items = [];
    for (const [index, value] of Object.entries(this.state.allTransactions)) {
      items.push(
        <Transaction key={index} myAddress={this.props.myAddress} {...value} />
      );
    }
    // console.log(items);
    return (
      <div>
        <CCard>
          <CCardBody>
            <CListGroup accent>{items}</CListGroup>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default TransactionLog;
