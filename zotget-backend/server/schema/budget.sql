DROP TABLE iF EXISTS Budget;

CREATE TABLE Budget (
  budget_id SERIAL PRIMARY KEY,
  user_id INT, 
  name VARCHAR(255) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  amount_spent DECIMAL(10, 2) DEFAULT 0.00,
  amount_remaining DECIMAL(10, 2) GENERATED ALWAYS AS (total_amount - amount_spent) STORED,
  FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

