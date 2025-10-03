import React from "react";
let style = {
  margin: "0 auto",
  fontSize: "30px",
  marginTop: "100px",
  padding: "30px",
  backgroundColor: "red",
  borderRadius: "12px",
};
export default function Task({ children }) {
  return <p style={style}>{children}</p>;
}
