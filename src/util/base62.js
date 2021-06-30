const { base62_encode, base62_decode } = require('@samwen/base62-util');

const str = '안녕 dd네 이름은 뭐니? !@#$!@#$ㅇㄹㅈㄷ';
const encoded = base62_encode(str);
console.log(encoded);
const decoded = base62_decode(encoded);
console.log(decoded);