import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

export function Button({ size = "md", children, ...props }: ButtonProps) {
  const padding = size === "sm" ? "4px 8px" : size === "lg" ? "12px 24px" : "8px 16px";
  return (
    <button
      {...props}
      style={{
        padding,
        borderRadius: 4,
        background: "#2563eb",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}