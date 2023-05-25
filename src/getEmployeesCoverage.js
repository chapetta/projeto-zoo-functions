const data = require('../data/zoo_data');

const { employees, species } = data;

const findLocation = (arrayAnimals) => {
  const resultArray = [];
  arrayAnimals.forEach((e) => {
    resultArray.push(species.find((element) => element.id === e).location);
  });
  return resultArray;
};

const findSpecies = (arrayAnimals) => {
  const resultArray = [];
  arrayAnimals.forEach((e) => {
    resultArray.push(species.find((element) => element.id === e).name);
  });
  return resultArray;
};

const finalObject = (value) => ({
  id: value.id,
  fullName: `${value.firstName} ${value.lastName}`,
  species: findSpecies(value.responsibleFor),
  locations: findLocation(value.responsibleFor),
});

const throwingError = () => {
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(object) {
  const listPeople = [];
  if (!object) {
    employees.filter((person) => listPeople.push(finalObject(person)));
    return listPeople;
  }
  if (Object.keys(object).includes('name')) {
    const result = employees.find((person) => person
      .firstName === Object.entries(object)[0][1] || person
      .lastName === Object.entries(object)[0][1]);
    return finalObject(result);
  }
  const result = employees.find((person) => person.id === Object.entries(object)[0][1]);
  return result === undefined ? throwingError() : finalObject(result);
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));
module.exports = getEmployeesCoverage;
