import React from "react";
import { Card, Table } from "@workspace/ui";

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
];

export default function ProductTable() {
  return (
    <Card title="Product Table">
      <Table columns={["name", "price"]} data={products} />
    </Card>
  );
}