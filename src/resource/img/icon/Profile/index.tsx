import React, { ReactElement } from "react";
import "./style.css";

import Drums from "./drums.svg?react";
import Bongos from "./bongos.svg?react";
import Bass from "./bass.svg?react";
import Electric from "./electric.svg?react";
import Acoustic from "./acoustic.svg?react";
import Keyboard from "./keyboard.svg?react";
import Piano from "./piano.svg?react";
import Trumpet from "./trumpet.svg?react";
import Saxophone from "./saxophone.svg?react";
import Flute from "./flute.svg?react";
import Violin from "./violin.svg?react";
import DJ from "./dj.svg?react";
import Vocal from "./vocal.svg?react";
import Stage from "./stage.svg?react";
import Private from "./user.svg?react";
import type { Icon } from "@/schema";

interface ProfileProps {
  icon: Icon;
}

const iconMap: Record<number, ReactElement> = {
  0: <Drums />,
  1: <Bongos />,
  2: <Bass />,
  3: <Electric />,
  4: <Acoustic />,
  5: <Keyboard />,
  6: <Piano />,
  7: <Trumpet />,
  8: <Saxophone />,
  9: <Flute />,
  10: <Violin />,
  11: <DJ />,
  12: <Vocal />,
  13: <Stage />,
};

function Profile({ icon }: ProfileProps) {
  return icon.type === "preset" ? (
    iconMap[icon.preset] ?? <Private />
  ) : (
    <img src={icon.url} alt="" />
  );
}

export default Profile;
