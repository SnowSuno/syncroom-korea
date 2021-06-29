import React from "react";
import axios from "axios";
import './App.css';

const ROOM_API = "https://webapi.syncroom.appservice.yamaha.com/ndroom/room_list.json?pagesize=500&realm=4";


class App extends React.Component {
  state = {
    rooms: []
  }

  async getRooms() {
    try {
      return await axios.get(ROOM_API);
    } catch (error) {
      console.error(error);
    }
  };

  async showData() {
    console.log('getting data...');
    const {
      data: {
        rooms
      }
    } = await this.getRooms();

    if (rooms) {
      console.log(rooms);
    }
  }


  componentDidMount() {
    this.showData().then();

  }

  render() {
    return <h1>hello</h1>
  }


}

export default App;
