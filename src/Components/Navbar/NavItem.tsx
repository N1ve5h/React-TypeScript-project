import React from "react";

interface Props {
  title: String;
  img?: HTMLImageElement;
}

export const NavItem: React.FC<Props> = ({ title, img }) => {
  return (
    <>
      {img !== null && 
      <img src={img}></img>
      }
      <h1 className="title">{title}</h1>
    </>
  );
};
