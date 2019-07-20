import React from "react";
export const SortUpIcon = props => {
  return (
    <img
      src="https://img.icons8.com/ios-glyphs/10/FFFFFF/sort-up.png"
      alt="Sort Up"
      style={{
        visibility:
          !props.header.active || props.header.order === "asc"
            ? "visible"
            : "hidden"
      }}
    />
  );
};
