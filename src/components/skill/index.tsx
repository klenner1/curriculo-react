import React from "react";
import "./index.scss";
import { IconType } from "../icons";

function Skill({
  icon,
  text,
  percent,
}: {
  icon?: IconType;
  text: string;
  percent: number;
}) {
  return (
    <div className="skill flex-column gap-8">
      <p>{text}</p>
      <div className="progress">
        <div style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default Skill;
