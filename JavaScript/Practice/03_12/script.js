/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Room {
  constructor(roomNum, type, gender, floor, building) {
    this.roomNum = roomNum;
    this.type = type;
    this.gender = gender;
    this.floor = floor;
    this.building = building;
  }
  changeBuilding(name) {
    this.building = name;
  }
}

const newRoom = new Room(152, "single", "male", 1, "college hall");

console.log(newRoom);
