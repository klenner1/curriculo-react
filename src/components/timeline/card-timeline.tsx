import React from "react";
import { Dl } from "./style";

interface Timeline {
  title: string;
  subtitle?: string;
  description?: string;
  children: string;
  index?: number;
}

export type cardTimelineType = React.ReactElement<Timeline>;

function CardTimeline({
  title,
  subtitle,
  description,
  children,
  index,
}: Timeline) {
  return (
    <Dl index={(index ?? 0) + 1}>
      <dt className="title">
        <h4>
          {title} - <small>{subtitle}</small>
        </h4>
      </dt>
      <dd className="detail">
        <div className="flex-column gap-16">
          <div>
            {description && <small className="color-gray">{description}</small>}
            <p>{children}</p>
          </div>
        </div>
      </dd>
    </Dl>
  );
}

export default CardTimeline;
