// PieChart.jsx
import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { fetchData } from '../helpers';
import Popup from './Popup'; // Import the Popup component
import '../styling/PieChart.css'; // Import the CSS file for styles

const BudgetPieChart = ({ budget, expenses }) => {
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [suggestion, setSuggestion] = useState(''); // added
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const budgetExpenses = expenses.filter(e => e.budgetId === budget.id);

    const chartData = {
      labels: budgetExpenses.map(expense => expense.name),
      datasets: [{
        data: budgetExpenses.map(expense => expense.amount),
        backgroundColor: budgetExpenses.map((_, i) => `hsl(${budget.color.split(' ')[0]}, ${70 - i * 5}%, ${50 - i * 5}%)`),
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

    const handleClick = async (event) => {
      const activePoints = pieChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    
      if (activePoints.length) {
        const index = activePoints[0].index;
        const expense = budgetExpenses[index];
        setSelectedExpense(expense.name);
    
        // Fetch suggestion from OpenAI based on the selected expense. 
        // TODO: adjust the prompt?
        const openAiPrompt = `Provide money-saving suggestions for ${expense.name}`;
        const suggestionResponse = await getOpenAIResponse(openAiPrompt);
        setSuggestion(suggestionResponse || 'Failed to fetch suggestions from OpenAI.');
      }
    };
    

    ctx.canvas.addEventListener('click', handleClick);

    return () => {
      pieChart.destroy();
      ctx.canvas.removeEventListener('click', handleClick);
    };
  }, [budget, expenses]);

  return (
    <>
      <canvas ref={chartRef} />
      {selectedExpense && <Popup title={selectedExpense} onClose={() => setSelectedExpense(null)} />}
    </>
  );
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
  // return (
  //   <>
  //     <canvas ref={chartRef} />
  //     {selectedExpense && (
  //       <Popup
  //         title={selectedExpense}
  //         content={suggestion} // Pass the suggestion as content to the Popup
  //         onClose={() => {
  //           setSelectedExpense(null);
  //           setSuggestion(''); // Clear suggestion when closing the Popup
  //         }}
  //       />
  //     )}
  //   </>
  // );

};

export default PieChart;
