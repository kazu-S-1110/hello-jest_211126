import { isSour } from './group';

describe('#isSour', () => {
  test('lemonade is sour', () => {
    expect(isSour('lemonade')).toBe(true);
  });
  it('cola is not sour', () => {
    expect(isSour('cola')).toBe(false);
  });
});

// 個別のテストを実行するにはyarn test filename
