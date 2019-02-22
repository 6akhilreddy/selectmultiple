import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";

import SelectMedia from "./selectMedia/SelectMedia";
import SelectStores from "./selectStores/SelectStores";
import SelectDuration from "./selectDuration/SelectDuration";
import SelectDetails from "./selectDetails/SelectDetails";
import ConfirmDetails from "./confirmDetails/ConfirmDetails";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

function getSteps() {
  return [
    "Select Media",
    "Select Media Duration",
    "Select Stores",
    "Select Details",
    "Confirm Details"
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SelectMedia />;
    case 1:
      return <SelectDuration />;
    case 2:
      return <SelectStores />;
    case 3:
      return <SelectDetails />;
    case 4:
      return <ConfirmDetails />;
    default:
      return "Unknown stepIndex";
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenStepper extends React.Component {
  state = {
    activeStep: 0,
    open: false,
    fullWidth: true,
    maxWidth: "md"
  };

 

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
      <Button
          variant="contained"
         onClick={this.handleClickOpen}
        >
          Create Ad
        </Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Create Ad
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent className={classes.root}>
            <div className={classes.stepper}>
              <Paper>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Paper>
            </div>

            {this.state.activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={this.handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Paper className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Paper>
              </div>
            )}
          </DialogContent>
          <DialogActions className={classes.root}>
            <div style={{width:'80%'}}>
            <Button onClick={this.handleClose} variant="contained" >
              Add Content
            </Button>
            </div>
            <div className={classes.navbtn}>
              <Button
                disabled={activeStep === 0}
                onClick={this.handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    backgroundColor: "#303030",
    margin: "0px",
    padding: "10px"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  navbtn: {
    float: "right"
  },
  appBar: {
    position: "relative",
    backgroundColor: "#303030"
  },
  flex: {
    flex: 1
  },
  stepper: {
    marginBottom: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(FullScreenStepper);
