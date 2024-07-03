const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toBe(2);
    });
  });
});

// Dummy: Son datos ficticios para llenar información.

// Fake: Son objetos que simulan comportamientos o datos; como un usuario ficticio.

// Stubs: Son proveedores o APIs de tatos preparados(BD Clima).

// Spies: Son como los stubs, pero se dejan espiar su comportamiento, comunicación e invocación.

// Mocks: Stubs + Spies, pueden estar pre - programados para enviar las respuestas supuestas.
