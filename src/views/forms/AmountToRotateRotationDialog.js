import React, { Component } from "react";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CFormText,
  CRow,
} from "@coreui/react";

export class AmountToRotateRotationDialog extends Component {
  constructor(props) {
    super(props);

    this.state = { amountToRotate: "" };
    this.onChangeFormInput = this.onChangeFormInput.bind(this);
    this.submitRotation = this.submitRotation.bind(this);
  }

  submitRotation = (event) => {
    event.preventDefault();
    console.log(this);
    this.props.handleClose();
  };

  // *****************************************************
  //                  FORM CHANGE HANDLERS
  // *****************************************************
  onChangeFormInput(event) {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this);
    const maxAmountToRotate =
      parseInt(this.props.selectedCreditor.debt) >
      parseInt(this.props.selectedDebtor.debt)
        ? this.props.selectedDebtor.debt
        : this.props.selectedCreditor.debt;
    return (
      <div>
        <CCard>
          <CCardHeader style={{ textAlign: "center" }}>
            How Much to Rotate?
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" onSubmit={this.submitRotation}>
              <CFormGroup>
                <CRow>
                  <CInput
                    id="amountDebt"
                    name="amountToRotate"
                    placeholder="Amount"
                    onChange={this.onChangeFormInput}
                    style={{ textAlign: "center", maxWidth: "70%" }}
                  />
                  <CFormText style={{ paddingLeft: "5%", fontSize: "130%" }}>
                    / {maxAmountToRotate}
                  </CFormText>
                </CRow>
              </CFormGroup>
              <CFormGroup style={{ textAlign: "center" }}>
                <CButton
                  type="submit"
                  size="sm"
                  color="secondary"
                  className="confirm_button"
                >
                  Confirm
                </CButton>
              </CFormGroup>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    );
  }
}

export default AmountToRotateRotationDialog;
