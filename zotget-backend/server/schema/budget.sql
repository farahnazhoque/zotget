DROP TABLE iF EXISTS Budget;

CREATE TABLE Budget (
  budget_id INT SERIAL PRIMARY KEY,
  user_id INT, 
  name VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  amount_spent DECIMAL(10, 2) DEFAULT 0.00,
  amount_remaining DECIMAL(10, 2) AS (total_amount - amount_spent) STORED, -- Calculated field
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);
