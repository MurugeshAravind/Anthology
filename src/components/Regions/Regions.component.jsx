import React, { useState } from "react";
const Regions = ({regions}) => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [index, setIndex] = useState(null);
  const setToggle = (e, index) => {
    e.stopPropagation();
    setIndex(index);
    setIsCollapsible(!isCollapsible);
  };
  if (regions && regions.length > 0) {
    return regions.map((region, i) => (
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
