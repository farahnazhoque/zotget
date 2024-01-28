// rrd imports
import { useLoaderData } from "react-router-dom";

// library import
import { toast } from "react-toastify";

// component imports
import PieChart from "../components/PieChart";

// helpers
import { deleteItem, fetchData } from "../helpers";


// loader
export async function overviewLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function overviewAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const OverviewPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>Overview</h1>
      
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <PieChart expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
    </div>
  );
};

export default OverviewPage;
