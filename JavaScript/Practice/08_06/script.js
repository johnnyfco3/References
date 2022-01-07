/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const test = {
  name: "Johnny",
  cars: 3,
  changeCars: function (number) {
    this.cars = number;
    console.log(this.cars);
    (() => {
      this.name = "Jordan";
      console.log(this.name);
    })();
  },
};
console.log(test.changeCars(3));
