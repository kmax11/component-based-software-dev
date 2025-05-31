import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color?: string;
};

export function Badge({ children, color = "#2563eb" }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 12,
        background: color,
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}