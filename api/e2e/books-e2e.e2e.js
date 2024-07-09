// primero las importaciones de las librerías que se van a utilizar después las librerías propias
const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
// por lo general en las pruebas e2e se tiene la conexión a la base de datos para hacer pruebas
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);

    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await database.dropDatabase(); // se puede hacer en un afterEach para que se limpie la base de datos después de cada prueba
    await server.close();
  });

  describe('Test for [Get] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange
      // Se crea una semilla de datos porque por lo general estas bases de datos se limpian
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 2021,
          author: 'Author 1',
        },
        {
          name: 'Book 2',
          year: 2021,
          author: 'Author 2',
        }
      ]);

      console.log(seedData);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);

          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
