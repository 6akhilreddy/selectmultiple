import React, { Component } from 'react'
import {Grid,Card,CardMedia,Paper,withStyles} from "@material-ui/core"

export class DisplayMedia extends Component {

    state = {
        isSelected: false,
    }
    handleSelect = () => {
        this.setState({ isSelected: !this.state.isSelected });
      };
    
  render() {
      const {classes,media}=this.props
    return (
        <Grid item xs={12} sm={6} md={4} lg={2} xl={3} className={classes.margin}>
        <Card>
          <CardMedia
            onClick={this.handleSelect}
            className={classes.media}
            image={media}
          >
            {this.state.isSelected ? (
              <Paper className={classes.paper}>
                <Paper className={classes.pprBlue} />
              </Paper>
            ) : null}
          </CardMedia>
        </Card>
        </Grid>
    )
  }
}


const styles = theme => ({
    media: {
      height: 140,
      position: "relative"
    },
    paper: {
      backgroundColor: "#fff",
      textAlign: "center",
      padding: "3px",
      borderRadius: "50%",
      position: "absolute",
      top: "5px",
      right: "5px"
    },
    pprBlue: {
      height: "15px",
      width: "15px",
      backgroundColor: "#A437D2",
      borderRadius: "50px"
    },
})


export default withStyles(styles, { withTheme: true })(DisplayMedia);
