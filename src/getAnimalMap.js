const data = require('../data/zoo_data');

function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex } = options;
  const animalMap = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((species) => {
    const { name, location, residents } = species;
    const filteredResidents = sex ? residents
      .filter((resident) => resident.sex === sex) : residents;
    const animalNames = filteredResidents.map((resident) => resident.name);
    if (includeNames) {
      const animalObj = { [name]: sorted ? animalNames.sort() : animalNames };
      animalMap[location].push(animalObj);
    } else {
      animalMap[location].push(name);
    }
  });
  return animalMap;
}

module.exports = getAnimalMap;
