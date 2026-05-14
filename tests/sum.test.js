function suma(a, b) {
  return a + b;
}

test('debe sumar correctamente', () => {
  expect(suma(2, 3)).toBe(5);
});