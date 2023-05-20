const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((item) => item.name === animal).residents
    .every((resident) => resident.age >= age);
}

console.log(getAnimalsOlderThan('lions', 7));
module.exports = getAnimalsOlderThan;
