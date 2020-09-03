import React from "react";
export const OpenedBy = props => {
  const opened_by = props.users.find(user => user.id === props.ticket.opened_by);
  return (<div>{`${opened_by.last_name}, ${opened_by.first_name}`}</div>);
};
