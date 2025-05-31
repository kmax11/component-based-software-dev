import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      type="checkbox"
      style={{ width: 16, height: 16, accentColor: "#2563eb" }}
      {...props}
    />
  );
}