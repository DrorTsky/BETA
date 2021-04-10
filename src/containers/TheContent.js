import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = (props) => {
  // const [playerOne, setPlayerOne] = useState(props.playerOne);
  // const [playerTwo, setPlayerTwo] = useState(props.playerTwo);
  // const [profile, setProfile] = useState(props.profile);
  // const [name, setName] = useState(props.name);
  // const [compiledBinaryContract, setCompiledBinaryContract] = useState(
  //   props.compiledBinaryContract
  // );
  // const [address, setAddress] = useState(props.address);

  const playerOne = props.playerOne;
  const playerTwo = props.playerTwo;
  const profile = props.profile;
  const name = props.name;
  const compiledBinaryContract = props.compiledBinaryContract;
  const address = props.address;

  return (
    <main className="c-main" style={{ paddingTop: "1rem" }}>
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component
                          {...props}
                          playerOne={playerOne}
                          playerTwo={playerTwo}
                          profile={profile}
                          name={name}
                          compiledBinaryContract={compiledBinaryContract}
                          address={address}
                        />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
