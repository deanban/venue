import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Sidedrawer = props => {
  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={() => props.onClose()}>
        <List component="nav">
          <ListItem button onClick={() => console.log("clicked!")}>
            Event Starts In
          </ListItem>
          <ListItem button onClick={() => console.log("clicked!")}>
            Venue INFO
          </ListItem>
          <ListItem button onClick={() => console.log("clicked!")}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => console.log("clicked!")}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => console.log("clicked!")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidedrawer;
