import React from "react";
import { StyledAssignButton } from "../../styled-components/TicketRow_Styles";

export const AssignButton = props => {
	const {ticketID, assigned, assignedTo, openedBy, activeUserID} = props;

  const getStatus = () => {
    if (openedBy === activeUserID) {
      return "hidden";
		} 
		if(assigned && assignedTo === activeUserID) {
			return "active-user-assigned"
		}
		if(assigned && assignedTo !== activeUserID) {
			return "other-user-assigned"
		}
		if(!assigned && openedBy !== activeUserID) {
			return "assignable"
		}
	};
	
	const getText = () => {
		switch(getStatus()) {
			case "active-user-assigned":
				return "UNASSIGN"
			case "other-user-assigned":
				return "ASSIGNED"
			case "hidden":
				return ""
			default:
				return "ASSIGN"
		}
	}

  return (
    <StyledAssignButton status={getStatus()}>
			{getText()}
    </StyledAssignButton>
  );
};
