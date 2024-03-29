import React from "react";

interface Props {
  title: String;
  img?: string;
}

export const ButtonTheme: React.FC<Props> = ({ title, img }) => {
  return (
    <>
      {img && (<img src={img} alt=''/>)}
      <h2 className="title">{title} Mode</h2>
    </>
  );
};
