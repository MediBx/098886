export interface Person {
    name: {
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string,
    }

}

//-------------------------------------------------
export type Student = {
    name: {
        first: string,
        last: string,
    },
    email: string,
    picture: {
        large: string,
    }
}

//-------------------------------------------------
export class Employee2 {
    name: string;
    email: string;
    picture: string;


    constructor(name?: string, email?: string, picture?: string) {
        this.name = name ? name : "";
        this.email = email ? email : "";
        this.picture = picture ? picture : "";
    }
};

//-------------------------------------------------
export class Employee3 {
    name: string;
    email: string;
    picture: string;

    // Constructor that accepts an object with "named parameters"
    constructor({ name, email, picture }: { name: string; email?: string; picture: string }) {
        this.name = name;
        this.email = email ? email : "";
        this.picture = picture;
    }
}
//------------------------------------------
export function demoEmployee3Usage() {
    const employee = new Employee3({ name: "John Doe", picture: "john-picture.jpg" });

    console.log(employee.name);
    console.log(employee.email);
    console.log(employee.picture);
}
//-------------------------------------------------



export class Employee {
    name?: {
        first: string,
        last: string,
    };
    email?: string;
    picture?: {
        large: string
    };
    static nameOfCompany: string = "Bank Leumi";



    constructor(name?: { first: string, last: string }, email?: string, picture?: { large: string }) {
        this.name = name ? name : { first: "", last: "" };
        this.email = email ? email : "";
        this.picture = picture ? picture : { large: "" };
    }

    static showInfo() {
        console.log("Employee of " + Employee.nameOfCompany);
    }

}

//-------------------------------------------------
export class Athlete extends Employee {
    sport: string = "";

    constructor(
        name: { first: string, last: string },
        email: string,
        picture: { large: string },
        sport: string) {
        super(name, email, picture);
        this.sport = sport;
    }
}

//-------------------------------------------------
export abstract class Character {
    name: string = "";
    abstract animate(): void;
}


export abstract class Warrior extends Character {
    abstract goToTrain(): void;
}


export class Dragon extends Character {
    animate(): void {
        console.log(this.name + " is moving like dragon does");
    }
}

export class NinjaWarrior extends Warrior {
    goToTrain(): void {
        console.log(this.name + " is training with ninja-stars");
    }
    animate(): void {
        console.log(this.name + " is moving with ninja-stars");
    }
}

export class SwordsWarrior extends Warrior {
    goToTrain(): void {
        console.log(this.name + " is training with swords");
    }
    animate(): void {
        console.log(this.name + " is moving with swords");
    }
}

