import React from "react";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";
import { connect, changeRoom } from "./store";

export default class Buttons extends React.Component {
  //if button click set env.setbackground
  clickHandler(roomSelection) {
    changeRoom(roomSelection);
  }

  //create button navigation adjacentRooms
  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = [];

    rooms.map(room => {
      buttons.push(
        <VrButton
          key={`${room}` + "-btn"}
          onClick={() => this.clickHandler(room)}
        >
          <Text style={{ backgroundColor: "green" }}>{room}</Text>
        </VrButton>
      );
    });

    return buttons;
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>Room Selection</Text>
          <Text style={{ marginBottom: "30px" }}>{this.props.room}</Text>
          {this.createRoomButtons(this.props.adjacentRooms)}
        </View>
      </View>
    );
  }
}

export class InfoPanels extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View>
          <Text>Room Info</Text>
          <Text>{this.props.info}</Text>
        </View>
      </View>
    );
  }
}

const ConnectedButtons = connect(Buttons);
const ConnectedInfoPanels = connect(InfoPanels);

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  }
});

AppRegistry.registerComponent("ConnectedButtons", () => ConnectedButtons);
AppRegistry.registerComponent("ConnectedInfoPanels", () => ConnectedInfoPanels);
