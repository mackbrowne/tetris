Meteor.startup(() => {
  const tetri = [];

  const playerElements = document.querySelectorAll('.player');
  [...playerElements].forEach(element => {
    const tetris = new Tetris(element);
    tetri.push(tetris);
  });

  const keyListener = (event) => {
    [
      [65, 68, 81, 87, 69, 83],
      [37, 39, 190, 38, 191, 40]
    ].forEach((key, index) => {
      const player = tetri[index].player;
      if (event.type === 'keydown') {
        if (event.keyCode === key[0]) { //left
          player.move(-1);
        } else if (event.keyCode === key[1]) { //right
          player.move(1);
        } else if (event.keyCode === key[2]) { //q
          player.rotate(-1);
        } else if (event.keyCode === key[3]) { //up
          player.rotate(1);
        } else if (event.keyCode === key[4]) { //w
          player.rotate(1)
        }
      }
      if (event.keyCode === key[5]) { //down
        if (event.type === 'keydown') {
          if (player.dropInterval !== player.DROP_FAST) {
            player.drop();
            player.dropInterval = player.DROP_FAST;
          }
        } else {
          player.dropInterval = player.DROP_SLOW;
        }
      }
    });
  }

  document.addEventListener('keydown', keyListener);
  document.addEventListener('keyup', keyListener);

})
