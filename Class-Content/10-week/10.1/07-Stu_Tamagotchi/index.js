function DigitalPal(hungry, sleepy, bored, age, outside, houseCondition) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.outside = outside;
    this.houseCondition = houseCondition;
};

DigitalPal.prototype.feed = function () {
    if (this.hungry) {
        console.log("That was yummy!")
        this.hungry = false;
        this.sleepy = true;
    } else {
        console.log("No thanks! I'm full.");
    };
};

DigitalPal.prototype.sleep = function () {
    if (this.sleepy) {
        console.log("Zzzzzzz");
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
    } else {
        console.log("No way! I'm not tired.");
    };
};

DigitalPal.prototype.play = function () {
    if (this.bored) {
        console.log("Yay! Let's play!");
        this.bored = false;
        this.hungry = true;
    } else {
        console.log("Not right now. Later?");
    };
};



