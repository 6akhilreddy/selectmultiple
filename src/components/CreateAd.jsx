import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const CreateAd = ({ classes }) => {
  return (
    <div className={classes.center}>
      <Button
        variant="contained"
        className={classes.button}
        to="/startstepper"
        component={Link}
      >
        Create Ad
        
      </Button>
      <Button
          variant="contained"
          className={classes.button}
          to="/fullscreenstepper"
          component={Link}
        >
          Create Ad
        </Button>
    </div>
  );
};

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px"
  }
});

export default withStyles(styles)(CreateAd);
