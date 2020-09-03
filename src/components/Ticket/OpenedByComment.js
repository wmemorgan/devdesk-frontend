import React from "react";
export const OpenedByComment = props => {
  const opened_by = props.users.find(
    user => user.id === props.comment.opened_by
  );
  return (
    <span className={props.className}>{`${opened_by.first_name} ${
      opened_by.last_name
    }`}</span>
  );
};
