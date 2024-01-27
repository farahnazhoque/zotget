CREATE TABLE Expense (
  expense_id INT AUTO_INCREMENT PRIMARY KEY,
  budget_id INT,
  name VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  expense_date DATE NOT NULL,
  FOREIGN KEY (budget_id) REFERENCES Budget(budget_id)
);
