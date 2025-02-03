var cuboid = {
    length: 25,
    width: 50,
    height: 200,

    calculateVolume: function() {
        return this.length * this.width * this.height;
    }
};

console.log("The volume of the cuboid is: " + cuboid.calculateVolume());