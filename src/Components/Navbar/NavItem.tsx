import React from "react";

interface Props {
  title: String;
  img?: string;
}

export const NavItem: React.FC<Props> = ({ title, img }) => {
  return (
    <>
      {img && (<img src={img} />)}
      <h1 className="title">{title} Mode</h1>
    </>
  );
};
