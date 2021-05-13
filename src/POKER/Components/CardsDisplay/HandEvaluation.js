const HandEvaluation = (hand) => {
  let ranks = [];
  let suits = [];
  var cardList = {
    11: "Jacks",
    12: "Queens",
    13: "Kings",
    14: "Aces",
  };
  hand.forEach((card) => {
    ranks.push(Number(card.rank));
    suits.push(card.suit);
  });

  let sortedRanks = [...ranks.sort((a, b) => a - b)];

  if (new Set(sortedRanks).size <= 1) {
    return "";
  }

  if (new Set(suits).size === 1) {
    if (sortedRanks[0] === 10) {
      return ["a Royal Flush", 800];
    }
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 4 && sortedRanks[4] === 14)
    ) {
      return ["a Straight Flush", 50];
    } else {
      return ["a Flush", 5];
    }
  } else {
    if (new Set(sortedRanks).size === 2) {
      if (sortedRanks[0] !== sortedRanks[1]) {
        return sortedRanks[1] > 10
          ? [`Four of a Kind - ${cardList[sortedRanks[1]]}`, 25]
          : [`Four of a Kind - ${[sortedRanks[1]]}s`, 25];
      }
      if (sortedRanks[3] !== sortedRanks[4]) {
        return sortedRanks[3] > 10
          ? [`Four of a Kind - ${cardList[sortedRanks[3]]}`, 25]
          : [`Four of a Kind - ${[sortedRanks[3]]}s`, 25];
      } else {
        return ["a Full House", 9];
      }
    }
  }

  if (new Set(sortedRanks).size === 5) {
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 4 && sortedRanks[4] === 14)
    ) {
      return ["a Straight", 4];
    }
  }

  if (new Set(sortedRanks).size === 3) {
    for (let i = 0; i < 3; i++) {
      if (sortedRanks[i] === sortedRanks[i + 2]) {
        return ["Three of a Kind", 3];
      }
    }
    return ["Two Pair", 2];
  }

  for (let i = 0; i < 4; i++) {
    if (
      sortedRanks[i] === sortedRanks[i + 1] &&
      sortedRanks[i] + sortedRanks[i + 1] >= 22
    ) {
      return [`a Pair of ${cardList[sortedRanks[i]]}`, 1];
    }
  }

  return ["a losing hand", 0];
};

export default HandEvaluation;
