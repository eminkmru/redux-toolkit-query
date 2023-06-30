import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="panelDiv">
      <div className="topArrangment">
        <div className="topArrangment"> {header} </div>
        <div onClick={handleClick}>
          {expanded ? (
            <GoChevronDown style={{ height: "25px", width: "25px" }} />
          ) : (
            <GoChevronLeft style={{ height: "25px", width: "25px" }} />
          )}
        </div>
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
