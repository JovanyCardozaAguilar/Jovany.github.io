import {sum, minus} from "./func";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 4 - 2 to equal 2', () => {
  expect(minus(4, 2)).toBe(2);
});
