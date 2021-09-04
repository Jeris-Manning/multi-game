const HandEvaluation = (hand) => {
  let ranks = [];
  let suits = [];

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
      return ["Royal Flush", 800];
    }
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 4 && sortedRanks[4] === 14)
    ) {
      return ["Straight Flush", 50];
    } else {
      return ["Flush", 5];
    }
  } else {
    if (new Set(sortedRanks).size === 2) {
      if (
        sortedRanks[0] === sortedRanks[3] ||
        sortedRanks[1] === sortedRanks[4]
      ) {
        return ["Four of a Kind", 25];
      } else {
        return ["Full House", 9];
      }
    }
  }

  if (new Set(sortedRanks).size === 5) {
    if (
      sortedRanks[4] - sortedRanks[0] === 4 ||
      (sortedRanks[3] === 5 && sortedRanks[4] === 14)
    ) {
      return ["Straight", 4];
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
      return ["Jacks or Better", 1];
    }
  }

  return ["", 0];
};

export default HandEvaluation;
