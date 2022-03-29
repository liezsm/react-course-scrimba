import React from "react";

const Button = ({ icon, text, color, bg }) => {
  const style = {
    backgroundColor: bg,
    color: color,
  };
  const class_name = `btn btn=${icon}`;
  return (
    <button style={style} className={class_name}>
      <img src={icon} alt=' icon' />
      <p>{text}</p>
    </button>
  );
};

export default Button;
