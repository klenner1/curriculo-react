import React, { Children, useEffect, useState } from "react";
import { cardTimelineType } from "./card-timeline";
import { TimelineContainer } from "./style";
import "./style.tsx";

interface TimelineProps {
  children: cardTimelineType | cardTimelineType[];
}

function Timeline({ children }: TimelineProps) {
  const [newChildren, setNewChildren] = useState(children);

  useEffect(() => {
    const tmp = Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index: i });
      }
      return child;
    });
    setNewChildren(tmp);
  }, [children, setNewChildren]);

  return (
    <TimelineContainer count={Children.count(children)}>
      {newChildren}
    </TimelineContainer>
  );
}

export default Timeline;
