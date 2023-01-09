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



export const Grid: React.FC = ({ children }) => {
  
  // https://stackoverflow.com/questions/32802202/how-to-center-a-flex-container-but-left-align-flex-items
  return (
    <div className={`
      grid
      grid-cols-[repeat(auto-fit,minmax(theme(spacing.96),max-content))]
      justify-center
      gap-3
      mx-4
      [&>*]:w-96
      mb-10
    `}>
      {children}
    </div>
  );
};
