import React from "react";
import "./index.scss";

function Card({
  title,
  children,
}: {
  title?: string;
  children: React.ReactElement;
}) {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
