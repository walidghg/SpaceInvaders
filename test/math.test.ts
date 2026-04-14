import { clamp, lerp } from '../src/ts/math/math';

describe('Tests fournis en annexe - Mathématiques de base', () => {
  
  test('clamp limite correctement les valeurs', () => {
    expect(clamp(1, 10, 2)).toBe(2);
    expect(clamp(1, 10, -12)).toBe(1);
  });

  test('lerp interpole correctement', () => {
    expect(lerp(1, 10, 2)).toBe(19);
    expect(lerp(1, 10, -12)).toBe(-107);
  });

});