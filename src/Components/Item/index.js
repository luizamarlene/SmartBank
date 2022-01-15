import React from "react";
import { Item } from "./styles";

export default ({ type, from, value }) => {
  return (
    <Item>
       
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};
