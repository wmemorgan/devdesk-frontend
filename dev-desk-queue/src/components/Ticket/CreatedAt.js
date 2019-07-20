import React from "react";
import moment from "moment";

export const CreatedAt = props => (
  <span className={props.className}>{` @ ${moment(
    props.createdAt.split("T")[0]
  ).format("M/DD/YYYY")}`}</span>
);
