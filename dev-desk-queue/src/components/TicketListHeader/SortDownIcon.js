import React from "react";
export const SortDownIcon = props => {
  return (
    <img
      src="https://img.icons8.com/ios-glyphs/10/FFFFFF/sort-down.png"
      alt="Sort Down"
      style={{
        visibility:
          !props.header.active || props.header.order === "desc"
            ? "visible"
            : "hidden"
      }}
    />
  );
};
