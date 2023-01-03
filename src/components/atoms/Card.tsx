import styled from "@emotion/styled";
import { Paper } from "./Paper";


const CardComponent = styled(Paper)<{
  height?: number;
}>(props => ({
  height: props.height
}));

const CardHeadComponent = styled.div(props => ({

}));

const CardBodyComponent = styled.div(props => ({

}));

export const Card = Object.assign(CardComponent, {
  Head: CardHeadComponent,
  Body: CardBodyComponent,
})

