import React from "react";
let style = {
  margin: "0 auto",
  fontSize: "30px",
  marginTop: "100px",
  padding: "30px",
  borderRadius: "12px",
};
export default function Task({ children }) {
  return <div style={style}>{children}</div>;
}
