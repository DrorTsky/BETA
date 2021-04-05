import React, { Component } from "react";
import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";

export class DebtRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <CCard color="info" className="text-white text-center">
          <CCardHeader>from: {this.props.sourceName}</CCardHeader>
          <CCardBody>
            <blockquote className="card-bodyquote">
              <h3>
                {this.props.sourceName} payed you: {this.props.amount} <br />
              </h3>
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

export default DebtRequest;
