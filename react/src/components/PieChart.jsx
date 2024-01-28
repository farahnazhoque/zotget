// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { fetchData } from '../helpers';
import '../styling/PieChart.css'; // Import the CSS file for styles


const BudgetPieChart = ({ budget, expenses }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Filter expenses for this budget
    const budgetExpenses = expenses.filter(e => e.budgetId === budget.id);

    // Prepare data for Chart.js
    const chartData = {
      labels: budgetExpenses.map(expense => expense.name),
      datasets: [{
        data: budgetExpenses.map(expense => expense.amount),
        backgroundColor: budgetExpenses.map((_, i) => `hsl(${budget.color.split(' ')[0]}, ${70 - i * 5}%, ${50 - i * 5}%)`), // Different shades for each expense
      }],
    };

    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    return () => pieChart.destroy(); // Cleanup chart on component unmount
  }, [budget, expenses]);

  return <canvas ref={chartRef} />;
};

const PieChart = ({ expenses }) => {
    const budgets = fetchData('budgets') || [];
  
    return (
      <div className="grid-container">
        {budgets.map(budget => (
          <div key={budget.id} className="pie-chart-container">
            <h3>{budget.name} Expenses</h3>
            <BudgetPieChart budget={budget} expenses={expenses} />
          </div>
        ))}
      </div>
    );
  };

export default PieChart;
