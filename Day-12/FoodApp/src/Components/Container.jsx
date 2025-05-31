import React from "react";
import Style from "./item.module.css";

function Container(props) {
  return <div className={Style.container}>{props.children}</div>;
}

export default Container;
