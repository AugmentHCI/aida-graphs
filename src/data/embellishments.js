const EMOJI_SCORE = {
  0: "😣",
  1: "🙁",
  2: "😕",
  3: "🙂",
  4: "😀",
  5: "😃",
  6: "😄",
  7: "😁",
  8: "😎",
  9: "🥳",
  10: "🤩",
};

const CARD_SCORE = {
  0: "🙂",
  1: "😁",
  2: "🤩",
  3: "👍",
  4: "👏",
  5: "🙌",
  6: "🎉",
};

const EMOJI_PROGRESS = {
  0: "🙂",
  1: "😊",
  2: "😄",
  3: "😁",
  4: "😜",
  5: "😆",
  6: "😎",
  7: "😆",
  8: "🥳",
  9: "🤩",
  10: "🤯",
};

export function getProgressEmbellishmentScore(score) {
  if (score < 0 || score > 100) return "🫥";
  return EMOJI_PROGRESS[Math.round(score / 10)];
}

export function getScoreEmbellishmentScore(score) {
  if (score < 0 || score > 100) return "🫥";
  return EMOJI_SCORE[Math.round(score / 10)];
}

export function getCardEmbellishmentScore(score) {
  if (score < 0 || score > 60) return "🫥";
  return CARD_SCORE[Math.round(score / 10)];
}
