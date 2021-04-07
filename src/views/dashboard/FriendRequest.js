import React, { Component } from "react";
import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";

export class FriendRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this);
    let bodyMessage = "";
    let topMessage = "";
    if (this.props.playerOne === this.props.source) {
      topMessage = "pending...";
      bodyMessage = "waiting for " + this.props.destinationName + " to accept";
    } else {
      topMessage = "from: " + this.props.sourceName;
      bodyMessage = this.props.sourceName + " sent you a friend request";
    }
    return (
      <div>
        <CCard color="info" className="text-white text-center">
          <CCardHeader>{topMessage}</CCardHeader>
          <CCardBody>
            <blockquote className="card-bodyquote">
              <h3>{bodyMessage}</h3>
              {this.props.creationDate}
            </blockquote>

            <footer className="footer_contract_list_element">
              <CButton
                size="sm"
                color="secondary"
                className="buttons_inside_contract_list"
                //   onClick={this.handleOpenAddDebt}
              >
                accept
              </CButton>
              <CButton
                size="sm"
                color="dark"
                className="buttons_inside_contract_list"
                //   onClick={this.handleOpenAddDebt}
              >
                refuse
              </CButton>
            </footer>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default FriendRequest;
