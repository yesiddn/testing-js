const BooksService = require('./books.service');

// se genera fake data para simular la respuesta de la BD
const fakeBooks = [
  {
    _id: '60f7b3b3b3b3b3b3b3b3b3b3',
    name: 'Harry Potter',
  },
  {
    _id: '60f7b3b3b3b3b3b3b3b3b3',
    name: 'The Witcher',
  }
];

// se crea un stub para simular el comportamiento de la BD
const MongoLibStub = {
  getAll: async () => [...fakeBooks],
  create: async () => { }
}

// cuando BooksService se importe, se va a reemplazar el constructor de MongoLib por MongoLibStub y los métodos que seran usados son los de MongoLibStub
jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub)); // se pasa el path del archivo a mockear y una función que retorna el stub

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // limpia los mocks antes de cada test de forma que no se mezclen los mocks de un test con otro y se mantenga aislado
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
