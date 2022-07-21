import React, { useState } from "react";
import Regions from "../Regions/Regions.component";
const State = () => {
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [index, setIndex] = useState(null);
  const data = [
    {
      name: "Asia",
      regions: [
        {
          name: "India",
          regions: [
            {
              name: "Hyderabad",
            },
            {
              name: "Chennai",
            },
            {
              name: "Bangalore",
            },
          ],
        },
        {
          name: "China",
          regions: [
            {
              name: "Beijing",
            },
            {
              name: "Wuhan",
            },
          ],
        },
      ],
    },
    {
      name: "Europe",
      regions: [
        {
          name: "UK",
          regions: [
            {
              name: "London",
            },
            {
              name: "Machester",
            },
          ],
        },
        {
          name: "Germany",
          regions: [
            {
              name: "Berlin",
            },
            {
              name: "Munich",
            },
          ],
        },
      ],
    },
  ];
  const handleClick = (e, index) => {
    e.stopPropagation();
    setIndex(index);
    setIsCollapsible(!isCollapsible);
  };
  return data.map((x, i) => (
    <div key={x.name} style={{padding: "0.5rem"}}>
      <span className={x.name} onClick={(e) => handleClick(e, i, x.name)}>
        {isCollapsible && index === i ? (
          <strong>{`- ${x.name}`}</strong>
        ) : (
          <strong>{`+ ${x.name} `}</strong>
        )
        }
        {isCollapsible && index === i ? (
          <Regions key={x.name} regions={x.regions} />
        ) : null}
      </span>
    </div>
  ));
};
export default State;
