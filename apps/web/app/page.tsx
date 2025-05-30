import { Button } from "@workspace/ui";
import UserList from "@workspace/feature-user-list";
import ProductTable from "@workspace/feature-product-table";
import { FeedbackForm, FeedbackData } from "@repo/feature-feedback";
import { Counter } from "@repo/feature-counter";

export default function Page() {
  const handleFeedbackSubmit = (feedback: FeedbackData) => {
    // You can handle the feedback submission here
    console.log('Feedback received:', feedback);
    // TODO: Send to your backend API
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <section>
          <Button size="sm">Button</Button>
          <UserList />
          <ProductTable />
        </section>

        <section className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">We'd Love Your Feedback</h2>
          <FeedbackForm onSubmit={handleFeedbackSubmit} className="bg-white p-6 rounded-lg shadow" />
        </section>

        <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Interactive Counter</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">Basic Counter</h3>
              <Counter />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-center">Limited Counter</h3>
              <Counter 
                initialValue={5}
                min={0}
                max={10}
                step={1}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
