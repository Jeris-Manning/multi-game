import DrawEngine from "./DrawEngine";

const WormDigger = (board) => {
  let wormPool = DrawEngine();
  let wormCount = 0;
  let chosenOnes = [];

  while (wormCount < 4) {
    let worm = wormPool.pop();
    if (board[worm].clicked) {
      worm = null;
    } else {
      chosenOnes.push(worm);
      wormCount++;
    }
  }

  return chosenOnes;
};

export default WormDigger;
