import React, { Component } from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
  CProgress,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

export class TheHeaderDropdownNotif extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchanges: [],
      totalRequests: 0,
      friendRequests: 0,
      debtRequests: 0,
      rotationRequests: 0,
    };

    this.setTotalRequests = this.setTotalRequests.bind(this);
    this.setFriendRequests = this.setFriendRequests.bind(this);
    this.setDebtRequests = this.setDebtRequests.bind(this);
    this.setRotationRequests = this.setRotationRequests.bind(this);
    this.displayRequests = this.displayRequests.bind(this);
  }

  async componentDidMount() {
    if (
      (await this.props.profile.methods.getAllExchanges().call())[0] !==
      undefined
    ) {
      var exchange = {};
      Promise.resolve(
        (exchange = (
          await this.props.profile.methods.getAllExchanges().call()
        )[0].transaction)
      ).then(this.displayRequests());
    }
  }

  displayRequests = async () => {
    this.setState({
      exchanges: await this.props.profile.methods.getAllExchanges().call(),
    });
    this.setState({
      totalRequests: this.state.exchanges.length,
    });
  };

  setTotalRequests = () => {
    this.setState({
      totalRequests: this.state.exchanges.length,
    });
  };
  setFriendRequests = (num) => {
    this.setState({
      friendRequests: num,
    });
  };
  setDebtRequests = (num) => {
    this.setState({
      debtRequests: num,
    });
  };
  setRotationRequests = (num) => {
    this.setState({
      rotationRequests: num,
    });
  };

  render() {
    let badges;

    if (this.state.totalRequests === 0) {
      badges = <CBadge></CBadge>;
    } else {
      badges = (
        <CBadge shape="pill" color="danger">
          {this.state.totalRequests}
        </CBadge>
      );
    }

    let plural =
      this.state.totalRequests === 1 ? "notification" : "notifications";
    console.log(this);
    const itemsCount = 5;
    return (
      <CDropdown inNav className="c-header-nav-item mx-2">
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <CIcon name="cil-bell" />
          {badges}
        </CDropdownToggle>
        <CDropdownMenu placement="bottom-end" className="pt-0">
          <CDropdownItem header tag="div" className="text-center" color="light">
            <strong>
              You have {this.state.totalRequests} {plural}
            </strong>
          </CDropdownItem>
          <CDropdownItem>
            <p>
              display exchanges
              <br />
              create button per notification
              <br />
              define max size
            </p>
          </CDropdownItem>
          <CDropdownItem>
            <CLink
              to={{
                pathname: "/friend_requests",
                requestProps: {
                  setRequests: this.setFriendRequests,
                },
              }}
              className="text-success"
            >
              <CIcon name="cil-user-follow" className="mr-2 text-success" />
              Friend Request
            </CLink>
          </CDropdownItem>
          <CDropdownItem>
            <CLink
              to={{
                pathname: "/debt_requests",
                requestProps: {
                  setRequests: this.setDebtRequests,
                },
              }}
              className="text-info"
            >
              <CIcon name="cil-chart-pie" className="mr-2 text-info" /> Exchange
              request
            </CLink>
          </CDropdownItem>
          <CDropdownItem>
            <CLink
              to={{
                pathname: "/rotation_requests",
                requestProps: {
                  setRequests: this.setRotationRequests,
                },
              }}
              className="text-primary"
            >
              <CIcon name="cil-arrow-right" className="mr-2 text-primary" />
              Rotation request
            </CLink>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  }
}

export default TheHeaderDropdownNotif;

// const TheHeaderDropdownNotif = () => {
//   const itemsCount = 5;
//   return (
//     <CDropdown inNav className="c-header-nav-item mx-2">
//       <CDropdownToggle className="c-header-nav-link" caret={false}>
//         <CIcon name="cil-bell" />
//         <CBadge shape="pill" color="danger">
//           {itemsCount}
//         </CBadge>
//       </CDropdownToggle>
//       <CDropdownMenu placement="bottom-end" className="pt-0">
//         <CDropdownItem header tag="div" className="text-center" color="light">
//           <strong>You have {itemsCount} notifications</strong>
//         </CDropdownItem>
//         <CDropdownItem>
//           <p>
//             display exchanges
//             <br />
//             create button per notification
//             <br />
//             define max size
//           </p>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CLink to="/friend_requests" className="text-success">
//             <CIcon name="cil-user-follow" className="mr-2 text-success" />
//             Friend Request
//           </CLink>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CLink to="/debt_requests" className="text-info">
//             <CIcon name="cil-chart-pie" className="mr-2 text-info" /> Exchange
//             request
//           </CLink>
//         </CDropdownItem>
//         <CDropdownItem>
//           <CLink to="/rotation_requests" className="text-primary">
//             <CIcon name="cil-arrow-right" className="mr-2 text-primary" />
//             Rotation request
//           </CLink>
//         </CDropdownItem>
//       </CDropdownMenu>
//     </CDropdown>
//   );
// };

// export default TheHeaderDropdownNotif;
