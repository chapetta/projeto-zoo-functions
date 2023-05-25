const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se sem parametros retorna um objeto com todos os horarios', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se retorna que o zoo esta fechado quando passado por parametro Monday', () => {
    const day = 'Monday';
    const hour = '09:00-AM';
    const expected = 'The zoo is closed';
    expect(getOpeningHours(day, hour)).toBe(expected);
  });
  it('Deve retornar the zoo is open quando passado um horario em que esta aberto', () => {
    const day = 'Tuesday';
    const hour = '09:00-AM';
    const expected = 'The zoo is open';

    expect(getOpeningHours(day, hour)).toBe(expected);
  });
  it('testa se retorna que o zoo esta fechado se passado um horario depois de fechado', () => {
    const day = 'Wednesday';
    const hour = '09:00-PM';
    const expected = 'The zoo is closed';

    expect(getOpeningHours(day, hour)).toBe(expected);
  });
  it('testa se ao passar um dia que nao existe retorna o erro', () => {
    const day = 'hoje';
    const hour = '09:00-PM';

    expect(() => getOpeningHours(day, hour))
      .toThrowError('The day must be valid. Example: Monday');
  });
  it('Testa se passado um horario invalido lança um erro', () => {
    const day = 'Tuesday';
    const hour = 'hoje-PM';

    expect(() => getOpeningHours(day, hour)).toThrowError('The hour should represent a number');
  });
  it('Testa se usar a abreviaçao errada nas horas lança um erro', () => {
    const day = 'Tuesday';
    const hour = '09:00-FM';

    expect(() => getOpeningHours(day, hour)).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se lança um erro se a hora nao for entre 0 e 12', () => {
    const day = 'Tuesday';
    const hour = '14:00-AM';

    expect(() => getOpeningHours(day, hour)).toThrowError('The hour must be between 0 and 12');
  });
  it('Testa se lança um erro ao passar os minutos diferente de 0 a 59', () => {
    const day = 'Tuesday';
    const hour = '09:123-AM';

    expect(() => getOpeningHours(day, hour)).toThrowError('The minutes must be between 0 and 59');
  });
});
