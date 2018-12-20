import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Sidedrawer from "./Sidedrawer";

export default class Header extends Component {
  state = {
    open: false,
    transparent_header: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ transparent_header: true });
      //   this.setState(({ transparent_header }) => ({
      //     transparent_header: !transparent_header
      //   }));
    } else {
      this.setState({ transparent_header: false });

      //   this.setState(({ transparent_header }) => ({
      //     transparent_header: transparent_header
      //   }));
    }
  };

  toggleDrawer = () => {
    this.setState(currentState => ({ open: !currentState.open }));
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.transparent_header
              ? "#2f2f2f"
              : "transparent",
            boxShadow: "none",
            padding: "10px 0px"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
            </div>

            <IconButton
              aria-label="menu"
              color="inherit"
              onClick={() => this.toggleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Sidedrawer
              open={this.state.open}
              onClose={() => this.toggleDrawer()}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
