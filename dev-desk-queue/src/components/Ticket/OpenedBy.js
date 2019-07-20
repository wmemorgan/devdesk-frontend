import React from "react";

export const OpenedBy = props => {
  const opened_by = props.users.find(
    user => user.id === props.ticket.opened_by
  );
  
  return (
    <span className={props.className}>{`${opened_by.first_name} ${
      opened_by.last_name
    }`}</span>
  );
};
