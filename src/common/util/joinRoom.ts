export const joinRoom = (name: string, password: string, temp: boolean) => {
  // const urienc = function (str: string) {
  //     return encodeURIComponent(str)
  //         .replace(/[!*'()]/g, (c) => {
  //             return "%" + c.charCodeAt(0).toString(16);
  //         });
  // };
  const mode = temp ? 3 : 2;
  const rawURI = `joingroup?mode=${mode}&pid=4&nickname=&groupname=${encodeURIComponent(
    name,
  )}&password=${encodeURIComponent(password)}`;
  window.location.href = "syncroom:" + btoa(rawURI);
};
