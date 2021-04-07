import React, { Component } from "react";
import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import web3 from "../../web3.js";
import profileAbi from "../../profile";

export class DebtRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.confirmDebtRequest = this.confirmDebtRequest.bind(this);
  }
  confirmDebtRequest = async (event) => {
    event.preventDefault();

    // Getting accounts list
    const accounts = await web3.eth.getAccounts();

    // Setting this.state.{playerOne, Two, amount} from the request details:
    // let myExchanges = await this.props.profile.methods.getAllExchanges().call();
    // let chosenRequest = this.props.exchange; // TODO: I use myExchanges[0] for testing only! The user will pick the correct one

    // this.setState({ playerTwo: chosenRequest.transaction.from });
    // this.setState({ playerOne: chosenRequest.transaction.to });
    // this.setState({ providedAmount: chosenRequest.transaction.amount });

    let myContracts = await this.props.profile.methods.getContracts().call();

    let existedContractAddress; // if a contract will be deployed, we will use this variable. Otherwise, we will use deployedContractAddress
    let deployedContractAddress;
    let contractExisted = false;

    for (var i = 0; i < myContracts.length; i++) {
      // in this for loop we try to find if a contract exist, or we should create one
      let currentBinaryContract = await new web3.eth.Contract(
        JSON.parse(this.props.compiledBinaryContract.interface),
        (existedContractAddress = myContracts[i])
      );

      let currentDebtOfCurrentBinaryContract = await currentBinaryContract.methods
        .getCurrentDebt()
        .call();
      let accountsOfTransaction = [this.props.destination, this.props.source];

      if (
        accountsOfTransaction.includes(
          String(currentDebtOfCurrentBinaryContract.debtor)
        ) &&
        accountsOfTransaction.includes(
          String(currentDebtOfCurrentBinaryContract.creditor)
        )
      ) {
        // it means that the contract already exist

        await currentBinaryContract.methods
          .addTransaction(
            this.props.destination,
            this.props.amount,
            this.props.source
          )
          .send({
            from: accounts[0],
            gas: "2000000",
          });

        contractExisted = true;

        break;
      }
    } // end of for loop - now we know if the contract existed or not

    if (!contractExisted) {
      // deploy a binaryContract
      await this.state.profile.methods
        .createBinaryContract(
          this.props.destination,
          this.props.amount,
          this.props.source
        )
        .send({
          from: accounts[0],
          gas: "4000000",
        });

      console.log("Binary contract was created successfully!");

      deployedContractAddress = await this.props.profile.methods
        .getLastContract()
        .call();
    }

    let currentBinaryContractAddress = contractExisted
      ? existedContractAddress
      : deployedContractAddress;
    let currentBinaryContract = await new web3.eth.Contract(
      JSON.parse(this.props.compiledBinaryContract.interface),
      currentBinaryContractAddress
    );

    let friendsProfile = new web3.eth.Contract(profileAbi, this.props.source);

    // we assign a zeroAddress if the contract already existed. Otherwise, the deployed contract address
    let newContractAddress = contractExisted
      ? await this.props.profile.methods.getZeroAddress().call()
      : deployedContractAddress;

    makeBatchRequest([
      // remove both of the exchanges in a batch request.

      // We call this method in order to remove our exchange on the profile (solidity)
      // TODO: when implementing it with the actual frontend, we should send the actual index instead of "0"
      this.props.profile.methods.confirmDebtRequest(0).send,

      // We call this method in order to remove friend's exchange (solidity method)
      // TODO: when implementing it with the actual frontend, we should send the actual index instead of "0"
      friendsProfile.methods.confirmDebtRequestNotRestricted(
        0,
        newContractAddress
      ).send,
    ]);
    function makeBatchRequest(calls) {
      let batch = new web3.BatchRequest();

      // let promises = calls.map(call => {
      calls.map((call) => {
        return new Promise((res, rej) => {
          let req = call.request(
            { from: accounts[0], gas: "2000000" },
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

  render() {
    console.log(this);
    let bodyMessage = "";
    let topMessage = "";
    if (this.props.playerOne === this.props.source) {
      topMessage = "pending...";
      bodyMessage = "you sent " + this.props.destination;
    } else {
      topMessage = "from: " + this.props.sourceName;
      bodyMessage = this.props.sourceName + " payed you: " + this.props.amount;
    }
    return (
      <div>
        <CCard color="info" className="text-white text-center">
          <CCardHeader>{topMessage}</CCardHeader>
          <CCardBody>
            <blockquote className="card-bodyquote">
              <h3>
                {bodyMessage} <br />
              </h3>
              {this.props.creationDate}
            </blockquote>

            <footer className="footer_contract_list_element">
              <CButton
                size="sm"
                color="secondary"
                className="buttons_inside_contract_list"
                onClick={this.confirmDebtRequest}
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
