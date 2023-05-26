function getLocalAdd() {
  return JSON.parse(localStorage.getItem(`isAdded`));
}
function changeLocalAdd(item) {
  localStorage.setItem(`isAdded`, JSON.stringify(item));
}

function getLocalCompany() {
  return JSON.parse(localStorage.getItem(`company`));
}
function changeLocalCompany(id) {
  localStorage.setItem(`company`, JSON.stringify(id));
}

export { getLocalAdd, changeLocalAdd, getLocalCompany, changeLocalCompany };
