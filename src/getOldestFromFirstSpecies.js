const data = require('../data/zoo_data');

const { employees, species } = data;
function getOldestFromFirstSpecies(id) {
  const responsiblePerson = employees.find((person) => person.id === id);
  const firstSpecie = responsiblePerson.responsibleFor[0];
  const residentsOfSpecie = species.find((animal) => animal.id === firstSpecie).residents;
  const sortedAniaml = residentsOfSpecie.sort((a, b) => a.age - b.age);
  const result = Object.values(sortedAniaml[sortedAniaml.length - 1]);

  return result;
}

module.exports = getOldestFromFirstSpecies;
