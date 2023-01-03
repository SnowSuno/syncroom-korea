import styled from "@emotion/styled";
import { theme } from "../../themes";
//
// export const Grid = styled.div`
//   display: grid;
//
//   // Referred to
//   grid-template-columns: repeat(
//           auto-fill,
//           minmax(${theme.grid.width}px, max-content)
//   );
//   gap: ${theme.grid.gap}px;
//   justify-content: center;
//   margin-inline: 30px;
//   //margin-inline: auto;
// `;

interface GridStyleProps {
  width: number;
  gap: number;
  margin: number;
}

// Referred to https://stackoverflow.com/questions/32802202
export const Grid = styled.div<GridStyleProps>(props => ({
  display: "grid",
  gridTemplateColumns: `repeat(
    auto-fill,
    minmax(${props.width}px, max-content)
  )`,
  gap: props.gap,
  justifyContent: "center",
  marginInline: props.margin,
}));
