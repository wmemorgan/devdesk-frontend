import React from "react";
import moment from "moment";
export const CreatedAt = props => (<div>{moment(props.createdAt.split("T")[0]).format("MM/DD/YYYY")}</div>);
