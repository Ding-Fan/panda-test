import React from "react";
import { css } from "../styled-system/css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div
      className={css({
        bg: "red.300",
        fontWeight: "bold",
        color: "yellow",
      })}
    >
      Card
    </div>
  );
};

export default Card;
