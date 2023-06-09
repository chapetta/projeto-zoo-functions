const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return data.employees
    .find((person) => person.firstName === employeeName || person
      .lastName === employeeName);
}

module.exports = getEmployeeByName;
