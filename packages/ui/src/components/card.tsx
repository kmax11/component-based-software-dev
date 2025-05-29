import React from "react";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}