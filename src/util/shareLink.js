const { base62_encode, base62_decode } = require('@samwen/base62-util');

const shareLink = {
    encode: roomInfo => base62_encode(JSON.stringify(roomInfo).slice(1, -1)),
    decode: encodedQuery => JSON.parse(`[${base62_decode(encodedQuery)}]`)
}

export default shareLink;
