import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

// SOL RELATED
import web3 from "../web3.js";
import profileAbi from "../profile";

const playerOne = "0x007f874C67735af8e8D8e5d9CfFD85850adBb22D";

// I make then 2 different variables as I try to make these 2 different scenarios detailed as possible.
// In our frontend these 2 variables will be the same one
const address = playerOne;

// For testing purposes only!
const playerTwo = "0xE6123F02ebc3528f29F23E79797744B88a0Cb851";

const name = "test_name";

const compiledBinaryContract = require("../solidity/build/BinaryContract.json");

const profile = new web3.eth.Contract(profileAbi, playerOne);

const TheLayout = () => {
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
        <TheHeader profile={profile} />
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
};

export default TheLayout;
