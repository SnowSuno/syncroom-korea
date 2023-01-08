import React from "react";

// export const Grid = styled.div<GridStyleProps>(props => ({
//   display: "grid",
//   gridTemplateColumns: `repeat(
//     auto-fill,
//     minmax(${props.width}px, max-content)
//   )`,
//   gap: props.gap,
//   justifyContent: "center",
//   marginInline: props.margin,
// }));

interface Props {
  w?: number;
}

export const Grid: React.FC<Props> = ({ children, w = 80 }) => {
  
  return (
    <div className={`
      grid
      grid-cols-[repeat(auto-fit,minmax(theme(spacing.${w}),max-content))]
      justify-center
      gap-2
      mx-4
      [&>*]:w-${w}
    `}>
      {children}
    </div>
  );
};
