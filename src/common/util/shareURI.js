const {base62_encode, base62_decode} = require('@samwen/base62-util');

const shareURI = {
    create: roomInfo => base62_encode(JSON.stringify(roomInfo).slice(1, -1)),
    parse: encodedQuery => JSON.parse(`[${base62_decode(encodedQuery)}]`)
}

// export default shareURI;

// console.log(shareURI.create(['qwer']));
// const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const bs62 = require('base-x')(BASE62);
// console.log(bs62.decode('aKJB0M94'))

const arr = [1, ''];
const ftn = (props) => Object.values(props);
console.log(ftn({roomName: 'qwer'}));