it('return `Hello` from mockFunction', () => {
  // モック関数の返り値を変更する場合は、mockImplementation関数を利用します。
  const mockFunction = jest.fn().mockImplementation(() => 'Hello');

  expect(mockFunction()).toBe('Hello');
});

// モック関数の呼び出し毎に異なる結果を返したい場合はmockImplementationOnce関数を利用します。mockImplementationOnce関数で設定した関数は1度しか呼ばれません。
it('return `Hello` once then it returns `Goodbye`', () => {
  const mockFunction = jest
    .fn()
    .mockImplementationOnce(() => 'Hello')
    .mockImplementationOnce(() => 'Goodbye');

  expect(mockFunction()).toBe('Hello');
  expect(mockFunction()).toBe('Goodbye');
  expect(mockFunction()).toBe(undefined); // デフォルトの返り値
});
