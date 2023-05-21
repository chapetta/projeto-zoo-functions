const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  console.log(animal);
  const allSpecies = {};
  if (!animal) {
    species.forEach((item) => {
      allSpecies[item.name] = item.residents.length;
    });
    return allSpecies;
  }
  if (!animal.sex) {
    return species.find((item) => item.name === animal.specie).residents.length;
  }
  return species
    .find((item) => item.name === animal.specie).residents
    .filter((e) => e.sex === animal.sex).length;
}
module.exports = countAnimals;
