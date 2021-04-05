import React, { Component } from "react";

//CORE-UI
import { CButton, CCard, CCardBody, CCardHeader, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";

//MATERIAL-UI
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import TransactionLog from "./TransactionLog";
import AddDebt from "../forms/AddDebt";

export class Contract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allTransactions: props.allTransactions,
      myName: props.myName,
      typeOfCard: props.typeOfCard,
      creditor: props.creditor,
      debtor: props.debtor,
      debt: props.debt,
      openTransactionLog: false,
      openAddDebt: false,
    };

    this.handleOpenTransactionLog = this.handleOpenTransactionLog.bind(this);
    this.handleCloseTransactionLog = this.handleCloseTransactionLog.bind(this);
    this.handleOpenAddDebt = this.handleOpenAddDebt.bind(this);
    this.handleCloseAddDebt = this.handleCloseAddDebt.bind(this);
  }

  handleOpenTransactionLog = () => {
    this.setState({
      openTransactionLog: true,
    });
  };
  handleCloseTransactionLog = () => {
    this.setState({
      openTransactionLog: false,
    });
  };

  handleOpenAddDebt = () => {
    this.setState({
      openAddDebt: true,
    });
  };
  handleCloseAddDebt = () => {
    this.setState({
      openAddDebt: false,
    });
  };

  render() {
    // console.log(this.state);
    let headerName =
      this.state.myName === this.state.creditor
        ? this.state.debtor
        : this.state.creditor;

    let message =
      this.state.typeOfCard === "danger" ? (
        <CCardHeader>
          <b>you owe</b> {headerName}
        </CCardHeader>
      ) : (
        <CCardHeader>
          {headerName}
          <br /> <b>owes you</b>
        </CCardHeader>
      );

    return (
      <div>
        <CCard color={this.state.typeOfCard} className="text-white text-center">
          {message}
          <CCardBody>
            <blockquote className="card-bodyquote">
              <h1>{this.state.debt}</h1>
            </blockquote>
            <footer className="footer_contract_list_element">
              <CButton
                size="sm"
                color="secondary"
                className="buttons_inside_contract_list"
                onClick={this.handleOpenTransactionLog}
              >
                <CIcon name="cil-scrubber" /> Transactions
              </CButton>
              <Dialog
                open={this.state.openTransactionLog}
                onClose={this.handleCloseTransactionLog}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title" className="align_center">
                  All transactions
                  <div className="card-header-actions">
                    <CLink
                      className="card-header-action"
                      onClick={this.handleCloseTransactionLog}
                    >
                      <CIcon name="cil-x-circle" />
                    </CLink>
                  </div>
                </DialogTitle>
                <DialogContent>
                  <TransactionLog
                    myAddress={this.state.myName}
                    allTransactions={this.state.allTransactions}
                  />
                </DialogContent>
              </Dialog>

              <CButton
                size="sm"
                color="dark"
                className="buttons_inside_contract_list"
                onClick={this.handleOpenAddDebt}
              >
                <CIcon name="cil-ban" /> Add Debt
              </CButton>
              <Dialog
                open={this.state.openAddDebt}
                onClose={this.handleCloseAddDebt}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  All transactions
                </DialogTitle>
                <DialogContent>
                  <AddDebt />
                </DialogContent>
              </Dialog>
            </footer>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default Contract;
