import React from "react";

export default function Button({ className, type, value, onClick, ...props }) {
  return (
    <button className={className} type={type} {...props} onClick={onClick}>
      {value}
    </button>
  );
}
