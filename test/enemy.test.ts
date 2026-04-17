import { createEnemy, getValue, advanceEnemy, Type } from '../src/ts/enemy';

describe('Tests personnalisés - Logique des Ennemis', () => {

  test('createEnemy initialise correctement un ennemi avec les valeurs par défaut', () => {
    const enemy = createEnemy(Type.Basic);
    
    expect(enemy.type).toBe(Type.Basic);
    expect(enemy.age).toBe(0);
    expect(Math.abs(enemy.direction)).toBe(1); 
  });

  test('createEnemy utilise la position fournie par le jeu', () => {
    const customPos = { angle: Math.PI, radius: 100 };
    const enemy = createEnemy(Type.Spinner, customPos);
    
    expect(enemy.initialPosition).toEqual(customPos);
    expect(enemy.position).toEqual(customPos);
  });

  test('getValue retourne les bons points selon le type d\'ennemi', () => {
    expect(getValue(Type.Basic)).toBe(5);
    expect(getValue(Type.Spinner)).toBe(10);
    expect(getValue(Type.ZigZag)).toBe(15);
    expect(getValue(Type.Oscillator)).toBe(20);
  });

  test('advanceEnemy déplace un ennemi Basic vers le centre', () => {
    const startPos = { angle: 0, radius: 500 };
    const enemy = createEnemy(Type.Basic, startPos);

    advanceEnemy({ enemy, deltaTime: 1 });

    expect(enemy.age).toBe(1);
    expect(enemy.position.radius).toBe(400); 
    expect(enemy.position.angle).toBe(0); 
  });

  test('advanceEnemy fait tourner et avancer un ennemi Spinner', () => {
    const startPos = { angle: 1, radius: 500 };
    const enemy = createEnemy(Type.Spinner, startPos);
    enemy.direction = 1;

    advanceEnemy({ enemy, deltaTime: 1 });

    expect(enemy.position.angle).toBe(2);
    expect(enemy.position.radius).toBe(400);
  });

});