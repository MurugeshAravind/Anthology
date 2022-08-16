import React, { useState } from "react";
const Regions = ({regions}: any) => {
  const [isCollapsible, setIsCollapsible] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const setToggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: React.SetStateAction<number>) => {
    e.stopPropagation();
    setIndex(index);
    setIsCollapsible(!isCollapsible);
  };
  if (regions && regions.length > 0) {
    return regions.map((region: any, i: number) => (
      <div style={{ margin: "1rem" }} key={region.name}>
        <span
          onClick={(e) => {
            setToggle(e, i);
          }}
        >
          {isCollapsible && index === i ? "-" : "+"}
          <strong>{region.name}</strong>
          {isCollapsible && index === i ? (
            <Regions key={region.name} regions={region.regions} />
          ) : null}
        </span>
      </div>
    ));
  } else {
    return null;
  }
};
export default Regions;
