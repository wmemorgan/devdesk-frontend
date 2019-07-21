import React from "react";
import moment from "moment";
import { StyledUserInfo } from "../../styled-components/Ticket_Styles";
export const UserInfo = props => {
  return (
    <StyledUserInfo bordered={props.bordered}>
      <span className="opened-by">{`${props.openedBy.first_name} ${
        props.openedBy.last_name
      }`}</span>
      <span className="date">{` @ ${moment(
        props.createdAt.split("T")[0]
      ).format("M/DD/YYYY")}`}</span>
    </StyledUserInfo>
  );
};
