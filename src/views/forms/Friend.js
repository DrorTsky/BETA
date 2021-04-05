import React, { Component } from "react";
//CORE-UI
import { CButton } from "@coreui/react";
//MATERIAL-UI
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import AddDebt from "./AddDebt";

export class Friend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendAddress: this.props.friendAddress,
      friendName: this.props.friendName,
      openAddDebt: false,
    };
    this.handleOpenAddDebt = this.handleOpenAddDebt.bind(this);
    this.handleCloseAddDebt = this.handleCloseAddDebt.bind(this);
  }

  // Add debt state related
  handleOpenAddDebt = () => {
    this.setState({ openAddDebt: true });
  };
  handleCloseAddDebt = () => {
    this.setState({ openAddDebt: false });
  };
  render() {
    return (
      <div>
        <CButton
          block
          color="light"
          className="friend_button"
          onClick={this.handleOpenAddDebt}
        >
          {this.state.friendName}
        </CButton>
        <Dialog
          open={this.state.openAddDebt}
          onClose={this.handleCloseAddDebt}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" className="align_center">
            Add Debt
          </DialogTitle>
          <DialogContent>
            <AddDebt
              {...this.props}
              handleCloseAddDebt={this.handleCloseAddDebt}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Friend;
