export const dateFormater = data => {
  const dateString = data;
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDate;
};
