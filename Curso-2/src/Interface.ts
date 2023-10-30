type Robot = {
    readonly id: number | string;
    name: string;
}


interface Robot2 {
    readonly id: number | string;
    name: string;
}


/* const bot1: Robot = {
    id: 123,
    name: 'Tobias'
}

const bot2: Robot2 = {
    id: 123,
    name: 'Tobias'
} */

class Pessoa implements Robot {
    id: string | number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): void {
        return console.log("Hello")
    }
}


const isa = new Pessoa(1, 'Isabella');

isa.sayHello();