const { base62_encode, base62_decode } = require('@samwen/base62-util');

const shareURI = {
    create: roomInfo => base62_encode(JSON.stringify(roomInfo).slice(1, -1)),
    parse: encodedQuery => JSON.parse(`[${base62_decode(encodedQuery)}]`)
}

export default shareURI;
