import React from "react";
import { Grid, Card } from "../atoms";
import IRoom from "../../common/classes/Room";


const RoomComponent: React.FC<{room: IRoom}> = ({room, ...props}) => (
  <Card hoverable={true} height={200}>
    <h3>{room.name}</h3>
  </Card>
);

const RoomContainerComponent: React.FC = (props) => (
  <Grid
    width={300}
    gap={10}
    margin={30}
    {...props}
  />
);

export const Room = Object.assign(RoomComponent, {
  Container: RoomContainerComponent,
});
