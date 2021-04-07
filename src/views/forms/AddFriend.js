import React, { Component } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CInputGroupAppend,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// SOL RELATED
import web3 from "../../web3.js";
import profileAbi from "../../profile";

const name = "test_name";

export class AddFriend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: this.props.playerOne,
      address: this.props.playerOne,
      friendsAddress: this.props.playerTwo,
      profile: this.props.profile,
    };
    this.addFriendFormSubmit = this.addFriendFormSubmit.bind(this);
    this.onChangeFormInput = this.onChangeFormInput.bind(this);
  }
  // static profile = new web3.eth.Contract(profileAbi, this.props.playerOne);

  addFriendFormSubmit = async (event) => {
    event.preventDefault();

    // Getting accounts list
    const accounts = await web3.eth.getAccounts();
    // Getting a reference to a friendsProfile - NOTE: it will work only if the user provided us friendsProfile address
    const friendsProfile = new web3.eth.Contract(
      profileAbi,
      this.state.friendsAddress
    );

    // NOTE: that's how I convert between a batch request and 2 seperate "send" requests:

    makeBatchRequest([
      // add both of the exchanges in a batch request.
      this.state.profile.methods.addFriendRequest(
        this.state.friendsAddress,
        name
      ).send,
      friendsProfile.methods.addFriendRequestNotRestricted(
        this.state.address,
        name
      ).send,
    ]);
    function makeBatchRequest(calls) {
      let batch = new web3.BatchRequest();
      calls.map((call) => {
        return new Promise((res, rej) => {
          let req = call.request(
            { from: accounts[0], gas: "1000000" },
            (err, data) => {
              if (err) rej(err);
              else res(data);
            }
          );
          batch.add(req);
        });
      });
      batch.execute();
    }
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
    return (
      <div>
        <CCard>
          <CForm
            action=""
            method="post"
            className="form-horizontal"
            onSubmit={this.addFriendFormSubmit}
          >
            <CCardHeader>Add Friend</CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="12">
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="input1-group1"
                      name="friendsAddress"
                      placeholder="Username"
                      value={this.state.friendsAddress}
                      onChange={this.onChangeFormInput}
                    />
                  </CInputGroup>
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter className="footer_contract_list_element align_center">
              <CButton
                type="submit"
                size="sm"
                color="success"
                className="buttons_inside_contract_list"
              >
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton
                type="reset"
                size="sm"
                color="danger"
                className="buttons_inside_contract_list"
              >
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CForm>
        </CCard>
      </div>
    );
  }
}

export default AddFriend;
