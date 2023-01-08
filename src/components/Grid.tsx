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


export const Grid: React.FC = ({children}) => {
    
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(spacing.5,max-content))]">
            {children}
        </div>
    )
}
