import React from "react";
import { StyledButtonContainer } from "../../styled-components/Ticket_Styles";

export const ButtonContainer = props => {
  const showAssignButton = () => {
		let show = !props.ticket.closed && props.ticket.opened_by !== props.activeUser.id;

		show = props.assigned ? props.assignedTo === props.activeUser.id : show;

		return show;
  };

  const showRemainingButtons = () => {
    return props.assigned && props.assignedTo === props.activeUser.id
  }

  return (
    <StyledButtonContainer>
      {showAssignButton() && (
        <button onClick={props.toggleAssigned}>
          {props.assigned ? "UNASSIGN" : "ASSIGN"}
        </button>
      )}
      {showRemainingButtons() && (
        <>
          <button onClick={props.markResolved}>MARK RESOLVED</button>
          <button onClick={props.addComment}>REPLY</button>
        </>
      )}
    </StyledButtonContainer>
  );
};