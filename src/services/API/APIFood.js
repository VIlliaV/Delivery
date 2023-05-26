import axios from 'axios';

axios.defaults.baseURL = 'https://64439097466f7c2b4b55e9dc.mockapi.io/';

export const fetchFoodCompany = async () => {
  const { data } = await axios.get('shop');

  return data;
};

export const fetchMenu = async id => {
  const { data } = await axios.get(`shop/${id}`);

  return data;
};
