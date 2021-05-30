export const GAME_PARAMS = {
  initialSpeed: 250,
  initialXPosition: 4,
  frequencyOfSpecial: 50,
  numberOfColumns: 9,
  numberOfRows: 20,
  acceleration: 8,
  nextLevel: 100,
  colors: {
    0: 'special',
    1: 'red',
    2: 'green',
    3: 'blue',
    4: 'yellow',
    5: 'silver',
    6: 'orange',
    7: 'pink'
  },
  audios: {
    fall: document.getElementById('fall-sound'),
    gameover: document.getElementById('gameover-sound'),
    line: document.getElementById('line-sound'),
    success: document.getElementById('success-sound'),
    clear: document.getElementById('clear-sound'),
    selection: document.getElementById('selection-sound'),
    main: document.getElementById('main-sound')
  }
}