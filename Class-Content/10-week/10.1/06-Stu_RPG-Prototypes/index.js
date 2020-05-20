function Character(name, profession, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.fakeMethod = function () {
        console.log("This is a fake method included on every object");
    }
};

Character.prototype.printStats = function () {
    console.log(`
    Name: ${this.name}
    Profession: ${this.profession}
    Age: ${this.age}
    Strength: ${this.strength}
    HP: ${this.hp}
    `)
};


let mage = new Character("Tormencha", "mage", "120", 50, 100);
let warrior = new Character("ToughStuff", "warrior", "50", 250, 120);

console.log(mage)
console.log(warrior)

mage.printStats();
warrior.printStats();