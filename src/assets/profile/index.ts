import drums from "./drums.svg";
import bongo from "./bongo.svg";
import bass from "./bass.svg";
import electric from "./electric.svg";
import acoustic from "./acoustic.svg";
import keys from "./keys.svg";
import piano from "./piano.svg";
import trumpet from "./trumpet.svg";
import saxophone from "./saxophone.svg";
import flute from "./flute.svg";
import violin from "./violin.svg";
import engineer from "./engineer.svg";
import vocal from "./vocal.svg";
import listener from "./listener.svg";
import user from "./user.svg";

export const profileIcons = [
  drums,
  bongo,
  bass,
  electric,
  acoustic,
  keys,
  piano,
  trumpet,
  saxophone,
  flute,
  violin,
  engineer,
  vocal,
  listener,
  user,
];

export const getPresetIcon = (preset: number) => profileIcons[preset] || user;
