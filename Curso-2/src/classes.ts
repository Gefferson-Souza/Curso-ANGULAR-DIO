//Classes
class Character{
    private name:string;
    strength:number;
    skill:number;
    
    constructor(name:string, strength:number,skill:number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    basicAttack(defense:number):string{
        return `Attack caused ${(this.strength * this.skill) / defense} damage.`

    }
}


const p1:Character = new Character('Nome',7,47)

//Data modifers

/*
    PUBLIC
    PRIVATE
    PROTECTED
*/


//Sub Class || Classe filha
class Magician extends Character {
    mana:number;
    constructor(mana:number, name:string, strength:number,skill:number){
        super(name,strength,skill);
        this.mana = mana;
    }
}

const p2:Magician = new Magician(500,'GEff',100,300)
console.log(p2)