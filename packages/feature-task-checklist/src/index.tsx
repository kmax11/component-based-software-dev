import React, { useState } from "react";
import { Card, Checkbox } from "@workspace/ui";

const tasks = [
  { id: 1, label: "Design UI" },
  { id: 2, label: "Write Documentation" },
  { id: 3, label: "Implement Features" },
];

export default function TaskChecklist() {
  const [checked, setChecked] = useState<number[]>([]);

  function toggle(id: number) {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  return (
    <Card title="Task Checklist">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <label>
              <Checkbox
                checked={checked.includes(task.id)}