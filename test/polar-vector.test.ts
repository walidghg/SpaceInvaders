import { distance, toVector } from '../src/ts/math/polar-vector';

describe('Tests fournis en annexe - Vecteurs polaires', () => {
  test('distance calcule correctement la distance entre deux vecteurs polaires', () => {
    const dist1 = distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 });
    expect(dist1).toBeCloseTo(98.30248290540649, 14);

    const dist2 = distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 });
    expect(dist2).toBeCloseTo(141.76346189546945, 14);
  });

  test('toVector convertit correctement en coordonnées cartésiennes', () => {
    const result = toVector({ angle: 5, radius: 50 });
    expect(result.x).toBeCloseTo(14.183109273161312, 14);
    expect(result.y).toBeCloseTo(-47.946213733156924, 14);
  });
});