// const profileAbi = [{"constant":false,"inputs":[{"name":"friendExchangeIndex","type":"uint256"}],"name":"confirmFriendRequestNotRestricted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFriends","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"addDebtRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllExchanges","outputs":[{"components":[{"components":[{"name":"exchangeId","type":"uint256"},{"name":"source","type":"address"},{"name":"destination","type":"address"},{"name":"optionalDescription","type":"string"},{"name":"exchangeType","type":"uint8"},{"name":"creationDate","type":"uint256"}],"name":"exchangeDetails","type":"tuple"},{"name":"exchangePurpose","type":"uint8"},{"components":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"},{"name":"date","type":"uint256"}],"name":"transaction","type":"tuple"},{"name":"approvers","type":"address[]"},{"name":"isApproved","type":"bool"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"address"},{"name":"destination","type":"address"},{"name":"optionalDescription","type":"string"},{"name":"exType","type":"uint8"},{"name":"purpose","type":"uint8"},{"name":"approvers","type":"address[]"},{"name":"isApproved","type":"bool"},{"name":"sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"addExchange","outputs":[{"components":[{"components":[{"name":"exchangeId","type":"uint256"},{"name":"source","type":"address"},{"name":"destination","type":"address"},{"name":"optionalDescription","type":"string"},{"name":"exchangeType","type":"uint8"},{"name":"creationDate","type":"uint256"}],"name":"exchangeDetails","type":"tuple"},{"name":"exchangePurpose","type":"uint8"},{"components":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"amount","type":"uint256"},{"name":"date","type":"uint256"}],"name":"transaction","type":"tuple"},{"name":"approvers","type":"address[]"},{"name":"isApproved","type":"bool"}],"name":"","type":"tuple"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"getExchangeUniqueId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"removeContracts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"removeAllFriends","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getZeroAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"friendExchangeIndex","type":"uint256"}],"name":"confirmFriendRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"address"},{"name":"sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"addDebtRequestNotRestricted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"}],"name":"addFriendRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"address"},{"name":"destination","type":"address"},{"name":"optionalDescription","type":"string"},{"name":"exType","type":"uint8"},{"name":"purpose","type":"uint8"},{"name":"approvers","type":"address[]"},{"name":"isApproved","type":"bool"},{"name":"sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"addExchangeNotRestricted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"createBinaryContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"removeAllExchanges","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getContracts","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"removeExchange","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"source","type":"address"}],"name":"addFriendRequestNotRestricted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"debtExchangeIndex","type":"uint256"},{"name":"binContractAddress","type":"address"}],"name":"confirmDebtRequestNotRestricted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"debtExchangeIndex","type":"uint256"}],"name":"confirmDebtRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
const profileAbi = [
  {
    constant: true,
    inputs: [],
    name: "getName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "friendExchangeIndex", type: "uint256" }],
    name: "confirmFriendRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getFriends",
    outputs: [
      {
        components: [
          { name: "friendAddress", type: "address" },
          { name: "friendName", type: "string" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "destination", type: "address" },
      { name: "sender", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
    ],
    name: "addDebtRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "debtExchangeIndex", type: "uint256" }],
    name: "confirmDebtRotationRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getAllExchanges",
    outputs: [
      {
        components: [
          {
            components: [
              { name: "exchangeId", type: "uint256" },
              { name: "source", type: "address" },
              { name: "sourceName", type: "string" },
              { name: "destination", type: "address" },
              { name: "destinationName", type: "string" },
              { name: "creationDate", type: "uint256" },
            ],
            name: "exchangeDetails",
            type: "tuple",
          },
          { name: "exchangePurpose", type: "uint8" },
          {
            components: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "amount", type: "uint256" },
              { name: "date", type: "uint256" },
            ],
            name: "transaction",
            type: "tuple",
          },
          {
            components: [
              { name: "debtor", type: "address" },
              { name: "mediator", type: "address" },
              { name: "creditor", type: "address" },
              { name: "status", type: "uint8" },
              { name: "amount", type: "uint256" },
            ],
            name: "debtRotation",
            type: "tuple",
          },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "source", type: "address" },
      { name: "destination", type: "address" },
      { name: "destinationName", type: "string" },
      { name: "purpose", type: "uint8" },
      { name: "sender", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
      { name: "destination2", type: "address" },
      { name: "status", type: "uint8" },
    ],
    name: "addExchange",
    outputs: [
      {
        components: [
          {
            components: [
              { name: "exchangeId", type: "uint256" },
              { name: "source", type: "address" },
              { name: "sourceName", type: "string" },
              { name: "destination", type: "address" },
              { name: "destinationName", type: "string" },
              { name: "creationDate", type: "uint256" },
            ],
            name: "exchangeDetails",
            type: "tuple",
          },
          { name: "exchangePurpose", type: "uint8" },
          {
            components: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "amount", type: "uint256" },
              { name: "date", type: "uint256" },
            ],
            name: "transaction",
            type: "tuple",
          },
          {
            components: [
              { name: "debtor", type: "address" },
              { name: "mediator", type: "address" },
              { name: "creditor", type: "address" },
              { name: "status", type: "uint8" },
              { name: "amount", type: "uint256" },
            ],
            name: "debtRotation",
            type: "tuple",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "friendAddress", type: "address" }],
    name: "getFriendName",
    outputs: [{ name: "name", type: "string" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "index", type: "uint256" }],
    name: "getAllExchangesByIndex",
    outputs: [
      {
        components: [
          {
            components: [
              { name: "exchangeId", type: "uint256" },
              { name: "source", type: "address" },
              { name: "sourceName", type: "string" },
              { name: "destination", type: "address" },
              { name: "destinationName", type: "string" },
              { name: "creationDate", type: "uint256" },
            ],
            name: "exchangeDetails",
            type: "tuple",
          },
          { name: "exchangePurpose", type: "uint8" },
          {
            components: [
              { name: "from", type: "address" },
              { name: "to", type: "address" },
              { name: "amount", type: "uint256" },
              { name: "date", type: "uint256" },
            ],
            name: "transaction",
            type: "tuple",
          },
          {
            components: [
              { name: "debtor", type: "address" },
              { name: "mediator", type: "address" },
              { name: "creditor", type: "address" },
              { name: "status", type: "uint8" },
              { name: "amount", type: "uint256" },
            ],
            name: "debtRotation",
            type: "tuple",
          },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "debtExchangeIndex", type: "uint256" },
      { name: "binContractAddress", type: "address" },
    ],
    name: "confirmDebtRotationRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "mediator", type: "address" },
      { name: "creditor", type: "address" },
      { name: "debtor", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "statusAsUint", type: "uint256" },
      { name: "lastDebtRotationRequestIndex", type: "uint256" },
    ],
    name: "addDebtRotationRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "name", type: "string" },
      { name: "friendAddress", type: "address" },
    ],
    name: "setFriendName",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getExchangeUniqueId",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "source", type: "address" },
      { name: "destinationName", type: "string" },
    ],
    name: "addFriendRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "index", type: "uint256" }],
    name: "removeContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "removeContracts",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "removeAllFriends",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getZeroAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "friendExchangeIndex", type: "uint256" },
      { name: "friendName", type: "string" },
    ],
    name: "confirmFriendRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "source", type: "address" },
      { name: "sender", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
    ],
    name: "addDebtRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "index", type: "uint256" }],
    name: "getFriendsByIndex",
    outputs: [
      {
        components: [
          { name: "friendAddress", type: "address" },
          { name: "friendName", type: "string" },
        ],
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "sender", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
    ],
    name: "createBinaryContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "removeAllExchanges",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getContracts",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getLastContract",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "index", type: "uint256" }],
    name: "removeExchange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "source", type: "address" },
      { name: "destination", type: "address" },
      { name: "destinationName", type: "string" },
      { name: "purpose", type: "uint8" },
      { name: "sender", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "receiver", type: "address" },
      { name: "destination2", type: "address" },
      { name: "status", type: "uint8" },
    ],
    name: "addExchangeNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "debtExchangeIndex", type: "uint256" },
      { name: "binContractAddress", type: "address" },
    ],
    name: "confirmDebtRequestNotRestricted",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "debtExchangeIndex", type: "uint256" }],
    name: "confirmDebtRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "index", type: "uint256" }],
    name: "getContractsByIndex",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "destination", type: "address" },
      { name: "destinationName", type: "string" },
    ],
    name: "addFriendRequest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "name", type: "string" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];
export default profileAbi;
