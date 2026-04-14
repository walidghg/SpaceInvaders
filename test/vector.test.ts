import { normalize, dot, add, subtract } from '../src/ts/math/vector';

describe('Tests fournis en annexe - Opérations vectorielles', () => {
  test('normalize retourne le vecteur unitaire correct', () => {
    const result = normalize({ x: 5, y: 50 });
    expect(result.x).toBeCloseTo(0.09950371902099892, 15);
    expect(result.y).toBeCloseTo(0.9950371902099892, 15);
  });

  test('dot calcule correctement le produit scalaire', () => {
    const result = dot({ x: 5, y: 50 }, { x: 10, y: 100 });
    expect(result).toBe(5050);
  });

  test('add additionne correctement deux vecteurs', () => {
    const result = add({ x: 5, y: 50 }, { x: 10, y: 100 });
    expect(result).toEqual({ x: 15, y: 150 });
  });

  test('subtract soustrait correctement deux vecteurs', () => {
    const result = subtract({ x: 5, y: 50 }, { x: 10, y: 100 });
    expect(result).toEqual({ x: -5, y: -50 });
  });
});