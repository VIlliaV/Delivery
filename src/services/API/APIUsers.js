import axios from 'axios';

export const putUserData = async user => {
  const { data } = await axios.post('users', user);

  return data;
};
