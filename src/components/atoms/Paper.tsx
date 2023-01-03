import styled from "@emotion/styled";

interface PaperStyleProps {
  hoverable: boolean;
}

export const Paper = styled.div<PaperStyleProps>(props => ({
  backgroundColor: "#FFFFFF",
  borderRadius: 10,
}));
