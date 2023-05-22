const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se a funçao handleelephantes com os parametos diferentes retornam os valores corretos', () => {
    const elephantNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];

    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(elephantNames);
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('teste se nao passar nenhum parametro retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Teste se quando passar um parametro que nao existe, retorna null', () => {
    expect(handlerElephants('weigth')).toBe(null);
  });
  it('Teste se quando passado um parametro que nao é uma string, ele retorna a mensagem de erro', () => {
    const errorMessage = 'Parâmetro inválido, é necessário uma string';

    expect(handlerElephants(4)).toBe(errorMessage);
  });
  it('Testa se quando passado o parametro name, retorna elephant', () => {
    const result = handlerElephants('name');
    expect(result).toContain('elephant');
  });
});
