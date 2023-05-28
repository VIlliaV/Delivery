import axios from 'axios';

export const putUserData = async user => {
  const { data } = await axios.post('users', user);

  return data;
};

export const fetchUserData = async () => {
  const { data } = await axios.get('users');

  return data;
};

export const putUserDataByID = async (id, user) => {
  const { data } = await axios.put(`users/${id}`, user);

  return data;
};

export const fetchUserDataByID = async id => {
  const { data } = await axios.get(`users/${id}`);

  return data;
};
// AIzaSyBKPbNU2ib0PYNVjp6Gy4PJnzAk-0ectzE
