// npm run test -- specific file to to run test
import { Person } from "./06.person";

describe("Test for Person", () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person("John", 45, 1.7);
  });

  test("Should return down", () => {
    // AAA methodology -> Arrange / Given - Act / When - Assert / Then

    // Arrange
    person.weight = 45;

    // Act
    const imc = person.calcIMC();

    // Assert
    expect(imc).toBe("down");
  });

  test("Should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
