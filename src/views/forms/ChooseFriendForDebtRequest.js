import React, { Component } from "react";

import Friend from "./Friend";

import {
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
} from "@coreui/react";

export class ChooseFriendForDebtRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsList: [],
    };

    this.onCheckMyFriends = this.onCheckMyFriends.bind(this);
  }

  async componentDidMount() {
    // console.log(this.state.friendsList);
    let ethereum = window.ethereum;
    if (typeof ethereum !== "undefined") {
      await ethereum.enable();
    }
    this.onCheckMyFriends();
  }

  onCheckMyFriends = async () => {
    // console.log("your friends are:");
    // console.log(await profile.methods.getFriends().call());
    this.setState({
      friendsList: await this.props.profile.methods.getFriends().call(),
    });
    // console.log(this.state.friendsList);
  };

  render() {
    const friends = [];
    for (const [index, value] of Object.entries(this.state.friendsList)) {
      friends.push(
        <Friend
          key={index}
          {...value}
          playerOne={this.props.playerOne}
          playerTwo={this.props.playerTwo}
          profile={this.props.profile}
        />
      );
    }

    const isFriendsListEmpty = this.state.friendsList.length;

    return (
      <div>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader className="align_center">Choose a friend</CCardHeader>
            <CCardBody className="wrapper">
              {isFriendsListEmpty === 0 ? (
                <h1>no friends yet</h1>
              ) : (
                <CButtonGroup vertical>{friends}</CButtonGroup>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </div>
    );
  }
}

export default ChooseFriendForDebtRequest;
