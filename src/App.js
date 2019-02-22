import React, { Component } from "react";
import "./App.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import CreateAd from "./components/CreateAd";
import StartStepper from "./components/StartStepper";
import FullScreenStepper from "./components/FullScreenStepper";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark"
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={CreateAd} />
          <Route exact path="/startstepper" component={StartStepper} />
          <Route exact path="/fullscreenstepper" component={FullScreenStepper} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
