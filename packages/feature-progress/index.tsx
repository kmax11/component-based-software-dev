import React from "react";
import { Card, Badge } from "@workspace/ui";

const projects = [
  { id: 1, name: "Website Redesign", progress: "Completed" },
  { id: 2, name: "API Integration", progress: "In Progress" },
  { id: 3, name: "Mobile App", progress: "Pending" },
];

function progressColor(status: string) {
  switch (status) {
    case "Completed":
      return "#22c55e";
    case "In Progress":
      return "#2563eb";
    case "Pending":
      return "#f59e42";
    default:
      return "#6b7280";
  }
}

export default function ProjectProgress() {
  return (
    <Card title="Project Progress">
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
            <span style={{ flex: 1 }}>{project.name}</span>
            <Badge color={progressColor(project.progress)}>{project.progress}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}