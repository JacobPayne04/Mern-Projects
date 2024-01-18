class Ninja {
    constructor(someName, health = 90, speed = 3, strength = 3) {
        this.name = someName;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }


    sayName() {
        console.log(`${this.name} is a ninja`)
    }
    sayAll() {
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake() {
        console.log(`${this.name} has added 10 health`)
        this.health += 10;
        return this
    }
}

const ninja1 = new Ninja("john");

class superSensei extends Ninja {
    constructor(someName, wisdom) {
        super(someName)
        this.wisdom = wisdom
    }
    speakWisdom() {
        this.drinkSake()
        console.log("You are not spending time, you are spendig your life")
    }
}

const sensei1 = new superSensei("dontella");
sensei1.speakWisdom()

