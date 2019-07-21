import React from "react";
export const AssignedTo = props => {
  if (props.assignedTo) {
    const assignedTo = props.users.find(user => user.id === props.assignedTo);
    return <div>{`${assignedTo.last_name}, ${assignedTo.first_name}`}</div>;
  }
  return <div />;
};
