import React, { Component } from "react";
import { CButton, CCard, CCardBody, CCardHeader } from "@coreui/react";
import web3 from "../../web3.js";
import profileAbi from "../../profile";

export class FriendRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.confirmFriendRequest = this.confirmFriendRequest.bind(this);
  }

  async confirmFriendRequest(event) {
    event.preventDefault();

    // Getting accounts list
    const accounts = await web3.eth.getAccounts();

    //getting friends address
    const friendsAddress =
      this.props.playerOne === this.props.source
        ? this.props.destination
        : this.props.source;

    // Getting a reference to a friendsProfile - NOTE: it will work only if the user provided us friendsProfile address
    const friendsProfile = new web3.eth.Contract(profileAbi, friendsAddress);

    //Finding friend's exchange index:
    const friendExchanges = await friendsProfile.methods
      .getAllExchanges()
      .call();

    let friendRequestIndex = -1;
    const length = friendExchanges.length;
    // console.log(friendExchanges);
    // console.log(length);
    for (let index = 0; index < length; index++) {
      const friendExchange = await friendsProfile.methods
        .getAllExchangesByIndex(index)
        .call();
      //"0" represents addFriendRequest Enum
      if (
        // if it is a friendRequest and the source is my friend
        friendExchange.exchangePurpose === "0" &&
        friendExchange.exchangeDetails.source === friendsAddress
      ) {
        friendRequestIndex = index;
      }
    }

    makeBatchRequest([
      // add both of the exchanges in a batch request.

      // In our frontend the user will choose the correct request, here I test it with 0 as there is only one request
      this.props.profile.methods.confirmFriendRequest(
        this.props.index,
        this.props.sourceName
      ).send,
      friendsProfile.methods.confirmFriendRequestNotRestricted(
        friendRequestIndex
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
                onClick={this.confirmFriendRequest}
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
