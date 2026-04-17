import { init } from '../src/ts/score';

describe('Tests Fonctionnels - Interface Utilisateur', () => {
  let addPoints: (value: number) => void;
  let elements: Record<string, any>;

  beforeEach(() => {
    elements = {
      '#score': { textContent: '' },
      '#game-over-score': { textContent: '' },
      '#game-over-highscore': { textContent: '' },
      '#game-over-button': { addEventListener: () => {} } 
    };

    // @ts-ignore
    global.document = {
      querySelector: (selector: string) => elements[selector]
    };

    let store: Record<string, string> = {};
    // @ts-ignore
    global.localStorage = {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => { store[key] = value; },
      clear: () => { store = {}; }
    };

    const scoreSystem = init();
    addPoints = scoreSystem.addPoints;
    addPoints(0); 
  });

  test('Le score affiche bien 0 sur la page web au démarrage', () => {
    expect(elements['#score'].textContent).toBe('0');
  });

  test('L\'ajout de points modifie directement le texte HTML du score', () => {
    addPoints(50);
    expect(elements['#score'].textContent).toBe('50');
  });

  test('Le Highscore est mis à jour sur l\'écran de Game Over et sauvegardé', () => {
    addPoints(150);
    expect(elements['#game-over-highscore'].textContent).toBe('150');
    // @ts-ignore
    expect(global.localStorage.getItem('psi_highscore')).toBe('150');
  });

});