import Backend from './utils';

const getExpenses = async () => {
  const response = await Backend.get('/expenses');
  return response.data;
};

const postExpenses = async expenses => {
  const response = await Backend.post('/expenses', expenses);
  return response.data;
};

const deleteExpenses = async id => {
  const response = await Backend.delete(`/expenses/${id}`);
  return response.data;
};

const getExpensesById = async id => {
  const response = await Backend.get(`/expenses/${id}`);
  return response.data;
};

export { getExpenses, postExpenses, deleteExpenses, getExpensesById };

  