import { getBeverage, isSour, fetchData } from './group';

describe('#isSour', () => {
  test('lemonade is sour', () => {
    expect(isSour('lemonade')).toBe(true);
  });
  it('cola is not sour', () => {
    expect(isSour('cola')).toBe(false);
  });
});

// 個別のテストを実行するにはyarn test filename

describe('#getBeverage', () => {
  // Math.random関数をモック化する
  const spy = jest
    .spyOn(Math, 'random')
    .mockImplementationOnce(() => 0.7)
    .mockImplementationOnce(() => 0);
  const adult = 20;

  test.skip('return beer when age is 20', () => {
    expect(getBeverage(adult).name).toBe('beer');
  });

  it.skip('return cola when age is 20', () => {
    expect(getBeverage(adult).name).toBe('cola');
  });
});

// 全てのテストが終了してから実行される
afterAll(() => {
  spy.mockRestore();
});

const runMultipleTests = (n) => {
  Array.from(new Array(n).keys()).map((i) => {
    it.concurrent(`test-${i}:return lemon`, async () => {
      await expect(fetchData()).resolves.toBe('lemon');
    });
  });
};

// describe.skip, xdescribeってするとスキップされる
describe.skip('parallel runMultipleTests', () => {
  runMultipleTests(100);
});
