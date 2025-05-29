import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      style={{
        padding: "8px",
        borderRadius: 4,
        border: "1px solid #e5e7eb",
        width: "100%",
        marginBottom: 8,
      }}
    />
  );
}