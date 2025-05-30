import React, { useState } from "react";
import { Card, Button, Input } from "@workspace/ui";

export default function ContributePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <Card title="Contribute a New User">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </label>
          <label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </label>
          <Button type="submit" style={{ marginTop: 12 }}>
            Submit
          </Button>
        </form>
        {submitted && (
          <div style={{ marginTop: 16, color: "green" }}>
            Thanks, {name}!
          </div>
        )}
      </Card>
    </div>
  );
}