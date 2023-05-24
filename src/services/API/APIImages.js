import { createClient } from 'pexels';

const client = createClient(
  'F32TzoXGESR4lHiZJDMxtnjYrJ69NXmRRZoAlkLybhrbA26EcLC6aQsH'
);
const query = 'food';
export const fetchPhoto = (start, quantity) => {
  const data = client.photos.search({
    query,
    page: start,
    per_page: quantity,
    orientation: 'landscape',
  });
  //   .then(photos => {
  //   console.log('🚀 ~ photos:', photos.photos);
  // });
  return data;
};
