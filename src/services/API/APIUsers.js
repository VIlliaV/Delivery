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
  const { data } = await axios.post(`users/${id}`, user);

  return data;
};
