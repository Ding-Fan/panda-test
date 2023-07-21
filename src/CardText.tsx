import React from "react";
import { css } from "../styled-system/css";

type Props = {};

const CardText = (props: Props) => {
  return (
    <div
      className={css({
        fontSize: "xl",
        color: "yellow",
      })}
    >
      CardText
    </div>
  );
};

export default CardText;
