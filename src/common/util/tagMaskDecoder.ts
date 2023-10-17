const tagMap = [
  "연습중",
  "수다방",
  "초보자 OK",
  "방송중",
  "녹음중",
  "Classic",
  "Country/Folk",
  "Club Music/EDM",
  "Hip Hop/Rap",
  "R&B/Soul",
  "Jazz",
  "Fusion",
  "Rock",
  "HR/HM",
  "팝송",
  "J-Pop",
  "아이돌",
  "애니/게임/보컬로이드",
  "월드뮤직",
];

export const tagMaskDecoder = (tagMask: string, tagOrig: string) => {
  const tags: string[] = [];
  const binaryMask = parseInt(tagMask).toString(2).split("").reverse();
  binaryMask.forEach((num, index) => {
    if (num === "1") {
      tags.push(index < 19 ? tagMap[index] : tagOrig);
    }
  });
  return tags;
};
