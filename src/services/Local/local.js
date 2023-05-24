function getLocalAdd() {
  return JSON.parse(localStorage.getItem(`isAdded`));
}
function changeLocalAdd(followData) {
  localStorage.setItem(`isAdded`, JSON.stringify(followData));
}

export { getLocalAdd, changeLocalAdd };
