import { assetPathResolver } from "@/utils/utils";
import React, { ReactElement } from "react";
import { Parallax } from "react-parallax";
type Props = {
  children: ReactElement;
};
const BasicParallax = (props: Props): ReactElement => {
  return (
    <Parallax
      blur={{ min: 20, max: 5 }}
      bgImageStyle={{ objectFit: "cover" }}
      style={{ objectFit: "cover" }}
      bgImage={assetPathResolver("/vertical_graph.svg")}
      strength={-400}
    >
      {props.children}
    </Parallax>
  );
};

export default BasicParallax;
