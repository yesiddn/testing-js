// https://ngneat.github.io/falso/ - Otra alternativa para faker
const {faker} = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];

  for (let i = 0; i < limit; i++) {
    fakeBooks.push(generateOneBook());
  }

  return [...fakeBooks]; // para evitar errores de mutabilidad se copia el array
}

module.exports = { generateOneBook, generateManyBooks };
