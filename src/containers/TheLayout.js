import React, { Component } from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

// SOL RELATED
import web3 from "../web3.js";
import profileAbi from "../profile";

const playerOne = "0x030865da57D5cb3f97653F85E2B11C0ac56F596B";

// I make then 2 different variables as I try to make these 2 different scenarios detailed as possible.
// In our frontend these 2 variables will be the same one
const address = playerOne;

// For testing purposes only!
const playerTwo = "0xE6123F02ebc3528f29F23E79797744B88a0Cb851";

const name = "test_name";

const compiledBinaryContract = require("../solidity/build/BinaryContract.json");

const profile = new web3.eth.Contract(profileAbi, playerOne);

export class TheLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchangesBrokenData: [],
      allExchanges: [],
      totalRequests: 0,
    };
    this.setStateAndAmountOfExchanges = this.setStateAndAmountOfExchanges.bind(
      this
    );
  }

  async componentDidMount() {
    if ((await profile.methods.getAllExchanges().call())[0] !== undefined) {
      var exchange = {};
      Promise.resolve(
        (exchange = (await profile.methods.getAllExchanges().call())[0]
          .transaction)
      ).then(this.setStateAndAmountOfExchanges());
    }
  }

  setStateAndAmountOfExchanges = async () => {
    this.setState({
      exchangesBrokenData: await profile.methods.getAllExchanges().call(),
    });
    this.setState({
      totalRequests: this.state.exchangesBrokenData.length,
    });
    if (this.state.totalRequests > 0) {
      for (var index = 0; index < this.state.totalRequests; index++) {
        this.setState({
          allExchanges: [
            ...this.state.allExchanges,
            await profile.methods.getAllExchangesByIndex(index).call(),
          ],
        });
      }
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div className="c-app c-default-layout">
        <TheSidebar
          playerOne={playerOne}
          playerTwo={playerTwo}
          profile={profile}
          name={name}
          compiledBinaryContract={compiledBinaryContract}
          address={address}
        />
        <div className="c-wrapper">
          <TheHeader
            profile={profile}
            compiledBinaryContract={compiledBinaryContract}
            allExchanges={this.state.allExchanges}
            totalRequests={this.state.totalRequests}
          />
          <div className="c-body">
            <TheContent
              playerOne={playerOne}
              playerTwo={playerTwo}
              profile={profile}
              compiledBinaryContract={compiledBinaryContract}
              address={playerOne}
              name={name}
            />
          </div>
          <TheFooter />
        </div>
      </div>
    );
  }
}

export default TheLayout;

// const TheLayout = () => {
//   return (
//     <div className="c-app c-default-layout">
//       <TheSidebar
//         playerOne={playerOne}
//         playerTwo={playerTwo}
//         profile={profile}
//         name={name}
//         compiledBinaryContract={compiledBinaryContract}
//         address={address}
//       />
//       <div className="c-wrapper">
//         <TheHeader
//           profile={profile}
//           compiledBinaryContract={compiledBinaryContract}
//         />
//         <div className="c-body">
//           <TheContent
//             playerOne={playerOne}
//             playerTwo={playerTwo}
//             profile={profile}
//             compiledBinaryContract={compiledBinaryContract}
//             address={playerOne}
//             name={name}
//           />
//         </div>
//         <TheFooter />
//       </div>
//     </div>
//   );
// };

// export default TheLayout;
