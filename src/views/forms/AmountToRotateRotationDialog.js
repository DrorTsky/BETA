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
import { FALSE } from "node-sass";

export class AmountToRotateRotationDialog extends Component {
  constructor(props) {
    super(props);

    this.state = { amountToRotate: 0, maxAmountToRotate: 0 };
    this.onChangeFormInput = this.onChangeFormInput.bind(this);
    this.submitRotation = this.submitRotation.bind(this);
  }

  submitRotation = (event) => {
    event.preventDefault();
    console.log(this);
    this.props.handleClose();
  };

  componentDidMount() {
    const maxAmountToRotate =
      parseInt(this.props.selectedCreditor.debt) >
      parseInt(this.props.selectedDebtor.debt)
        ? parseInt(this.props.selectedDebtor.debt)
        : parseInt(this.props.selectedCreditor.debt);

    this.setState({ maxAmountToRotate: maxAmountToRotate });
  }
  // *****************************************************
  //                  FORM CHANGE HANDLERS
  // *****************************************************
  onChangeFormInput(event) {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    console.log(name);
    if (!Number(value)) {
      console.log(value);
    } else {
      parseInt(value) > this.state.maxAmountToRotate
        ? this.setState({ [name]: this.state.maxAmountToRotate })
        : this.setState({ [name]: value });
    }
    // this.setState({ [name]: value });
  }

  render() {
    // console.log(this);
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
                    autoComplete="off"
                    onChange={this.onChangeFormInput}
                    required
                    style={{
                      textAlign: "center",
                      maxWidth: "70%",
                      paddingRight: "10%",
                    }}
                  />
                  <CFormText style={{ paddingLeft: "5%", fontSize: "130%" }}>
                    / {this.state.maxAmountToRotate}
                  </CFormText>
                </CRow>
                {this.state.amountToRotate !== 0 ? (
                  <CRow>
                    <CFormText>
                      transferring: {this.state.amountToRotate}
                    </CFormText>
                  </CRow>
                ) : (
                  ""
                )}
                {/* <CRow>
                  <CFormText>
                    transferring: {this.state.amountToRotate}
                  </CFormText>
                </CRow> */}
              </CFormGroup>
              <CFormGroup style={{ textAlign: "center" }}>
                <CButton
                  type="submit"
                  size="sm"
                  color="secondary"
                  className="confirm_button"
                  disabled={this.state.amountToRotate > 0 ? false : true}
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
