import React from "react";
import { StyledRepo } from "../../styled-components/Ticket_Styles";

export const Repo = props => {
  const link = props.comment !== "~!~" 
    ? props.comment.split("~!~")[1]
    : false;

  return (
    <StyledRepo>
      <label>Link to Repo:</label>
      {link && <a href={link}>{link}</a>}
    </StyledRepo>
  );
}
