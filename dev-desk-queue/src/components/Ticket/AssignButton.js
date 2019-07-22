import React from "react";
import { StyledAssignButton } from "../../styled-components/TicketRow_Styles";

export const AssignButton = props => {
  const { closed, assigned, assignedTo, openedBy, activeUserID } = props;

  const getStatus = () => {
    if (openedBy === activeUserID || closed) {
      return "hidden";
    }
    if (assigned && assignedTo === activeUserID) {
      return "active-user-assigned";
    }
    if (assigned && assignedTo !== activeUserID) {
      return "other-user-assigned";
    }
    if (!assigned && openedBy !== activeUserID) {
      return "assignable";
    }
  };

  const getText = () => {
    switch (getStatus()) {
      case "active-user-assigned":
        return "UNASSIGN";
      case "other-user-assigned":
        return "ASSIGNED";
      case "hidden":
        return "";
      default:
        return "ASSIGN";
    }
  };

  return (
    <StyledAssignButton
      status={getStatus()}
      onClick={props.handleClick}
      disabled={getStatus() === "other-user-assigned"}
    >
      {getText()}
    </StyledAssignButton>
  );
};
