import React from "react";
import style from "../components/Container.module.css";

function Container(props) {
  return <div className={style.container}>{props.children}</div>;
}

export default Container;
