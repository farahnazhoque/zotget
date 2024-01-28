import Backend from './utils';

const getUser = async () => {
  const response = await Backend.get('/users');
  return response.data;
};

const postUser = async users => {
  const response = await Backend.post('/users', users);
  return response.data;
};

const deleteUser = async id => {
  const response = await Backend.delete(`/users/${id}`);
  return response.data;
};

const getUserById = async id => {
  const response = await Backend.get(`/users/${id}`);
  return response.data;
};

export { getUser, postUser, deleteUser, getUserById };

  