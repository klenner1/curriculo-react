import React from "react";
import "./index.scss";
import { IconType } from "../icons";

function Contact({
  icon: Icon,
  text,
  link,
  blank,
}: {
  icon: IconType;
  text: string;
  link: string;
  blank?: boolean;
}) {
  const attrs = blank ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a href={link} className="contatc" {...attrs}>
      <div className="flex-row align-center gap-16">
        <Icon />
        {text}
      </div>
    </a>
  );
}

export default Contact;
