import React, { ReactNode } from "react";
import { css } from "../styled-system/css";

type Props = {
  TextItem: ({ children }: { children: string }) => ReactNode;
};

const CardHeader = ({ TextItem }: Props) => {
  return (
    <div className={css({})}>
      <TextItem>CardHeader</TextItem>
    </div>
  );
};

export default CardHeader;
