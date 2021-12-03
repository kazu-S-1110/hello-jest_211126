describe('spyOn', () => {
  const spy = jest.spyOn(Math, 'random').mockImplementation(() => 100);

  afterEach(() => {
    spy.mockRestore(); //モック関数をオリジナルの関数へ戻す
  });

  it('Math.random return 100', () => {
    expect(Math.random()).toEqual(100);
  });
  it('Math.random return under 1', () => {
    expect(Math.random()).toBeLessThan(1);
  });
});
