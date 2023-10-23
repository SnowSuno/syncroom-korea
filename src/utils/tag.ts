const tagMap = [
  "연습 중",
  "대화하기",
  "초보자 OK",
  "방송 중",
  "녹음 중",
  "Classic",
  "Country / Folk",
  "Club Music / EDM",
  "Hip Hop / Rap",
  "R&B / Soul",
  "Jazz",
  "Fusion",
  "Rock",
  "HR / HM",
  "Pop",
  "J-Pop",
  "아이돌",
  "애니메이션·게임·보컬로이드",
  "World",
];

const withCustom = (customTag: string) => {
  const tagMapWithCustom = [...tagMap];
  tagMapWithCustom[31] = customTag;
  return tagMapWithCustom;
};

export const parseTags = (tagMask: number, tagOrig: string) =>
  withCustom(tagOrig).filter((_, index) => tagMask & (1 << index));
