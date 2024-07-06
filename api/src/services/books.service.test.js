const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// se genera fake data para simular la respuesta de la BD
// const fakeBooks = [
//   {
//     _id: '60f7b3b3b3b3b3b3b3b3b3b3',
//     name: 'Harry Potter',
//   },
//   {
//     _id: '60f7b3b3b3b3b3b3b3b3b3',
//     name: 'The Witcher',
//   }
// ];

const mockSpyGetAll = jest.fn(); // el spy debe llevar un prefijo mock para identificarlo

// se crea un stub para simular el comportamiento de la BD
// const MongoLibStub = {
//   getAll: mockSpyGetAll,
//   create: async () => { }
// }

// cuando BooksService se importe, se va a reemplazar el constructor de MongoLib por MongoLibStub y los métodos que seran usados son los de MongoLibStub
// jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub)); // se pasa el path del archivo a mockear y una función que retorna el stub
// ahora generara error porque los mocks se deben guardar en una carpeta aparte y jest lee los mocks antes de ejecutar los tests por lo que el error que se genera es: Cannot access to 'spyGetAll' before initialization

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => {
  return {
    getAll: mockSpyGetAll,
    create: async () => { }
  } // forma temporal de solucionar el error
}));


describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // limpia los mocks antes de cada test de forma que no se mezclen los mocks de un test con otro y se mantenga aislado
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(5);
      // spyGetAll.mockReturnValue(fakeBooks); // retorna directamente la fake data pero como getBooks es async, se debe usar mockResolvedValue
      mockSpyGetAll.mockResolvedValue(fakeBooks); // de esta forma la data puede ser diferente para cada test
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toBe(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled(); // verifica que el método haya sido llamado
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1); // verifica que el método haya sido llamado una sola vez o el número de veces que se necesite
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {}); // verifica que el método haya sido llamado con los argumentos esperados
      expect(books[0]).toHaveProperty('_id');
      expect(books[0]).toEqual(fakeBooks[0]);
    });
  });
});

// Dummy: Son datos ficticios para llenar información.

// Fake: Son objetos que simulan comportamientos o datos; como un usuario ficticio.

// Stubs: Son proveedores o APIs de tatos preparados(BD Clima).

// Spies: Son como los stubs, pero se dejan espiar su comportamiento, comunicación e invocación.

// Mocks: Stubs + Spies, pueden estar pre - programados para enviar las respuestas supuestas.
