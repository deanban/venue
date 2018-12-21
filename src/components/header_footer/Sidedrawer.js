import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { scroller } from "react-scroll";

const Sidedrawer = props => {
  const scrollToSection = section => {
    scroller.scrollTo(section, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose();
  };

  return (
    <div>
      <Drawer anchor="right" open={props.open} onClose={() => props.onClose()}>
        <List component="nav">
          <ListItem button onClick={() => scrollToSection("featured")}>
            Event Starts In
          </ListItem>
          <ListItem button onClick={() => scrollToSection("venue")}>
            Venue INFO
          </ListItem>
          <ListItem button onClick={() => scrollToSection("highlight")}>
            Highlights
          </ListItem>
          <ListItem button onClick={() => scrollToSection("pricing")}>
            Pricing
          </ListItem>
          <ListItem button onClick={() => scrollToSection("location")}>
            Location
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidedrawer;
