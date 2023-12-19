const scrollToRoom = (roomId: string) => {
  const keyFrames = (color: string) => [
    { boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)" },
    { boxShadow: `0 0 0.8rem ${color}`, offset: 0.1 },
    { boxShadow: `0 0 0.8rem ${color}`, offset: 0.8 },
    { boxShadow: "0 0 0.8rem rgba(127, 127, 127, 0.1)" },
  ];

  const roomTile = document.getElementById(roomId.toString());

  if (roomTile) {
    roomTile.scrollIntoView({ behavior: "smooth", block: "center" });
    roomTile.animate(keyFrames("rgba(20, 20, 20, 1)"), 2000);
  } else {
    const filterElements = document.querySelectorAll(".Toolbar > .selected");

    filterElements.forEach(element => {
      element?.animate(keyFrames("rgba(255, 75, 85, 0.9)"), 1200);
    });
  }
};

export { scrollToRoom };
