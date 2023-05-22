const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((person) => {
    if (person.age < 18) {
      result.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const ticket = countEntrants(entrants);
  const totalSum = (ticket.child * 20.99) + (ticket.adult * 49.99) + (ticket.senior * 24.99);

  return totalSum;
}

module.exports = { calculateEntry, countEntrants };
