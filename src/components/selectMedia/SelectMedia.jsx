import React, { Component } from "react";
import { Grid , withStyles} from "@material-ui/core";
import DisplayMedia from './DisplayMedia'

const images = [
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

export class SelectMedia extends Component {
  render() {
    const {classes}=this.props
    return (
      <div>
        <Grid container spacing={16} className={classes.grid}>
          {images.map((media, i) => (
            <DisplayMedia
              key={i}
              media={media}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  grid:{
    padding:'10px'
  }
  
})
export default withStyles(styles, { withTheme: true })(SelectMedia);
