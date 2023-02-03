import React from "react";
import Scrollbars from "react-custom-scrollbars-2";

export default function Scrollbar({ children }) {
  return (
    <Scrollbars
      autoHide
      autoHideDuration={1000}
      autoHideTimeout={3000}
      renderTrackVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "#D3E9EC",
            top: "2px",
            bottom: "2px",
            right: "2px",
            borderRadius: "10px",
            width: "14px",
          }}
        />
      )}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: "#EDF2F4",
            top: "5px",
            bottom: "5px",
            left: "3.25px",
            width: "7px",
            borderRadius: "10px",
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
}
