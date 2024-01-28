import Backend from './utils';

const getBudget = async () => {
  const response = await Backend.get('/budget');
  return response.data;
};

const postBudget = async budget => {
  const response = await Backend.post('/budget', budget);
  return response.data;
};

const deleteBudget = async id => {
  const response = await Backend.delete(`/budget/${id}`);
  return response.data;
};

const getBudgetById = async id => {
  const response = await Backend.get(`/budget/${id}`);
  return response.data;
};

export { getBudget, postBudget, deleteBudget, getBudgetById };

  