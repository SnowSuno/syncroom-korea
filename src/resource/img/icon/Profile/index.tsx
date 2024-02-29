import React from "react";
import "./style.css";

import type { Icon } from "@/schema";

interface ProfileProps {
  icon: Icon;
}

function Profile({ icon }: ProfileProps) {
  return <img src={icon.url} alt="" />;
}

export default Profile;
