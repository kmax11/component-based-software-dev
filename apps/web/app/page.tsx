import { Button } from "@workspace/ui";
import UserList from "@workspace/feature-user-list";
import ProductTable from "@workspace/feature-product-table";

export default function Page() {
  return (
    <div>
      <Button size="sm">Button</Button>
      <UserList />
      <ProductTable />
    </div>
  );
}