import React from "react";
import Button from "@material-ui/core/Button";

import Ticket from "../../resources/images/icons/ticket.png";

const ReusuableButton = props => {
  return (
    <Button
      href={props.link}
      target="_blank"
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color
      }}
    >
      <img src={Ticket} className="iconImage" alt="icon_button" />
      {props.text}
    </Button>
  );
};

export default ReusuableButton;
