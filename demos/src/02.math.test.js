import { sum, multiply, divide } from "./02.math";

test("Add 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("should be 4", () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test("should be 4", () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(9, 3);
  expect(rta2).toBe(3);
});

test("should be for zero", () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
});
