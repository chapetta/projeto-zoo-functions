const data = require('../data/zoo_data');

const { species, hours } = data;
const result = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Tuesday')).map((item) => item.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Wednesday')).map((item) => item.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Thursday')).map((item) => item.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Friday')).map((item) => item.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Saturday')).map((item) => item.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((animal) => animal.availability
      .includes('Sunday')).map((item) => item.name),
  },
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
};

const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const monday = { Monday: {
  exhibition: 'The zoo will be closed!',
  officeHour: 'CLOSED',
} };

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return result;
  }
  const animalNames = data.species.map((animal) => animal.name);
  if (animalNames.includes(scheduleTarget)) {
    const animal = data.species.filter((item) => item.name === scheduleTarget);

    return animal[0].availability;
  }
  if (scheduleTarget === 'Monday') {
    return monday;
  }
  if (daysOfWeek.includes(scheduleTarget)) {
    return { [scheduleTarget]: result[scheduleTarget] };
  }

  return result;
}

console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
