const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

const can3 = can2;

test('have all the same properties', () => {
  expect(can1).toEqual(can2);
});

// 異なるインスタンスであること確かめるためにnotを入れる
test('are not the exact same can', () => {
  expect(can1).not.toBe(can2);
});

test('are the same references', () => {
  expect(can2).toBe(can3);
});

test('are the same value', () => {
  expect(can1.ounces).toBe(can2.ounces);
  expect(can1.ounces).toEqual(can2.ounces);
});

test('throw Error when passing no variable', () => {
  class Foo {
    constructor({ message }) {
      this.message = message;
    }
  }

  expect(() => {
    new Foo();
  }).toThrow();
  expect(() => new Foo()).toThrow(TypeError);
  expect(() => new Foo()).toThrow(
    "Cannot destructure property 'message' of 'undefined' as it is undefined."
  );
});

const fetchDataWithCallback = (callback) => {
  setTimeout(callback, 3000, 'lemon');
};

// callback内で単純にexpectを実行した場合、テストが終了せずTimeoutエラーになりテストは失敗します。
test('return lemon', (done) => {
  const callback = (data) => {
    expect(data).toBe('lemon');
    done(); //テストの終了を宣言
  };

  fetchDataWithCallback(callback);
});

const fetchData = () => Promise.resolve('lemon');

test('resolves to lemon', () => {
  return expect(fetchData()).resolves.toBe('lemon');
});
