const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3000);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [Get] /', () => {
    test('should return "Hello World!"', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then(response => {
          expect(response.text).toEqual('Hello World!');
        });
    });
  })
});
