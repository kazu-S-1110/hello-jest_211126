import { greet } from './greeter';

describe('greeter test', () => {
  describe('#greet', () => {
    const noonTime = new Date('2021-12-03T12:00:00');
    const morningTime = new Date('2021-12-04T11:00:00');

    beforeEach(() => {
      Date = jest.fn(() => noonTime);
    });

    describe('mock date function', () => {
      it('Hello <name> when the time is 12:00 - 05:59', () => {
        expect(greet('hogehoge')).toEqual('Hello Hogehoge');
      });
      it('Good morning <name> when the time is 06:00-11:59', () => {
        Date = jest.fn(() => morningTime);
        expect(greet('daniel')).toEqual('Good morning Daniel');
      });
    });
  });
});
