import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import React, { Component } from "react";
import web3 from "../../web3.js";

// since in order to have contract you need you have the other participant
// as a friend first, plus you cannot rotate "0" debt, I'm creating the list from
// the active contracts

export class ChooseFriendsForRotationRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contractsList: [],
      allContracts: [],
      listInformation: {},
    };
    // this.onCheckMyContracts = this.onCheckMyContracts.bind(this);
  }

  //////////////////////////////////////////////////////////////////////////////////////

  // Getting my contracts
  onCheckMyContracts = async () => {
    this.setState({
      contractsList: await this.props.profile.methods.getContracts().call(),
    });
    const length = this.state.contractsList.length;

    if (length > 0) {
      for (var index = 0; index < length; index++) {
        this.setState({
          allContracts: [
            ...this.state.allContracts,
            await this.props.profile.methods.getContractsByIndex(index).call(),
          ],
        });
      }
    }
    var x = 0;
    for (x in this.state.contractsList) {
      let tempC = await new web3.eth.Contract(
        JSON.parse(this.props.compiledBinaryContract.interface),
        this.state.contractsList[x]
      );

      // get necessary information from the Contract
      let creditorAddress = await tempC.methods
        .getCurrentCreditorAddress()
        .call();
      let debtorAddress = await tempC.methods.getCurrentDebtorAddress().call();
      let debtAmount = await tempC.methods.getCurrentDebtAmount().call();

      // asses who owes who for future filtering
      let friendsAddress;
      let friendsName;
      let isInDebt;
      if (creditorAddress === this.props.playerOne) {
        friendsAddress = creditorAddress;
        isInDebt = "success";
        //TODO get friends name from server
      } else {
        friendsAddress = debtorAddress;
        isInDebt = "danger";
        //TODO get friends name from server
      }

      // create list of contract information
      let binaryContractInstance = {
        friendsAddress: friendsAddress,
        debt: debtAmount,
        isInDebt: isInDebt,
      };
      let newListInformation = {
        ...this.state.listInformation,
        [x]: binaryContractInstance,
      };
      this.setState({
        listInformation: newListInformation,
      });
    }
  };
  //////////////////////////////////////////////////////////////////////////////////////

  async componentDidMount() {
    // console.log(this.state.friendsList);
    let ethereum = window.ethereum;
    if (typeof ethereum !== "undefined") {
      await ethereum.enable();
    }
    this.onCheckMyContracts();
  }

  render() {
    console.log(this);
    return (
      <div>
        <CRow>
          <CCol xs="6" xl="6" className="card_width">
            <CCard>
              <CCardHeader className="green_text card_width">
                List group
                <small> accent with color</small>
              </CCardHeader>
              <CCardBody className="card_body_items_width">
                <CListGroup accent>
                  <CListGroupItem accent="primary" color="primary">
                    This is a primary list group item
                  </CListGroupItem>
                  <CListGroupItem accent="secondary" color="secondary">
                    This is a secondary list group item
                  </CListGroupItem>
                  <CListGroupItem accent="success" color="success">
                    This is a success list group item
                  </CListGroupItem>
                  <CListGroupItem accent="danger" color="danger">
                    This is a danger list group item
                  </CListGroupItem>
                  <CListGroupItem accent="warning" color="warning">
                    This is a warning list group item
                  </CListGroupItem>
                  <CListGroupItem accent="info" color="info">
                    This is a info list group item
                  </CListGroupItem>
                  <CListGroupItem accent="light" color="light">
                    This is a light list group item
                  </CListGroupItem>
                  <CListGroupItem accent="dark" color="dark">
                    This is a dark list group item
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="6" xl="6" className="card_width">
            <CCard>
              <CCardHeader className="red_text card_width">
                List group
                <small> accent with color</small>
              </CCardHeader>
              <CCardBody className="card_body_items_width">
                <CListGroup accent>
                  <CListGroupItem accent="primary" color="primary">
                    This is a primary list group item
                  </CListGroupItem>
                  <CListGroupItem accent="secondary" color="secondary">
                    This is a secondary list group item
                  </CListGroupItem>
                  <CListGroupItem accent="success" color="success">
                    This is a success list group item
                  </CListGroupItem>
                  <CListGroupItem accent="danger" color="danger">
                    This is a danger list group item
                  </CListGroupItem>
                  <CListGroupItem accent="warning" color="warning">
                    This is a warning list group item
                  </CListGroupItem>
                  <CListGroupItem accent="info" color="info">
                    This is a info list group item
                  </CListGroupItem>
                  <CListGroupItem accent="light" color="light">
                    This is a light list group item
                  </CListGroupItem>
                  <CListGroupItem accent="dark" color="dark">
                    This is a dark list group item
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ChooseFriendsForRotationRequest;
