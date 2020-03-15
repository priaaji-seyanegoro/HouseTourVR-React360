export default house = {
  House: {
    roomName: "Supersonic Villa",
    info: `
            - 1 Kamar mandi
            - Pemandangan Danau
            - 1 Kebun Halaman belakang
            - 1 Ruang Tamu`,
    adjacentRooms: ["Lobby", "Garden", "Danau"]
  },
  Lobby: {
    roomName: "Lobby",
    info: `
            - Klasik Tema 
            - Elegant dengan interior kayu 
            - etc`,
    img: "Lobby.jpg",
    adjacentRooms: ["Bathroom", "Garden", "Danau"]
  },
  Bathroom: {
    roomName: "Kamar Mandi",
    info: `
            - Kamar Mandi minimalis
            - Elegant dengan interior kramik 
            - etc`,
    img: "Bathroom.jpg",
    adjacentRooms: ["Lobby"]
  },
  Garden: {
    roomName: "Garden",
    info: `
            - Captain America Tema 
            - Cocok untuk jogging 
            - Cocok untuk plaground
            - etc`,
    img: "Garden.jpg",
    adjacentRooms: ["Lobby"]
  },

  Danau: {
    roomName: "Danau",
    info: `
            - Dermaga
            - Bisa Mancing
            - etc`,
    img: "Danau.jpg",
    adjacentRooms: ["Lobby"]
  }
};
