describe("Set", () => {
  beforeAll(() => {
    console.log("beforeAll");
    // up db
  }); // se ejecuta antes de todas las pruebas o hooks y respeta el scope del decribe

  afterAll(() => {
    console.log("afterAll");
    // down db
  });

  beforeEach(() => {
    console.log("beforeEach");
  }); // se ejecuta antes de cada prueba

  afterEach(() => {
    console.log("afterEach");
  });

  test("case 1", () => {
    console.log("case 1");
    expect(1 + 1).toBe(2);
  });
  test("case 2", () => {
    console.log("case 2");
    expect(1 + 3).toBe(4);
  });

  describe("Other group", () => {
    test("case 3", () => {
      console.log("case 3");
      expect(1 + 1).toBe(2);
    });
    test("case 4", () => {
      console.log("case 4");
      expect(1 + 3).toBe(4);
    });
  });
});
