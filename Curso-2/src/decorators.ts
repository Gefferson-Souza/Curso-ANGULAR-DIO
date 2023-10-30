//decorators
/* function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario { }

@ExibirNome
class Quincas { }

function apiVersion(version: string): any {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __nome: 'Gefferson' });
    }
} */


//Atribute decorator

function minLength(min: number) {
    return (target: any, key: string) => {
        let _value = target[key];
        const getter = () => "[abc]" + _value;
        const setter = (value: string) => {
            if (value.length < min) {
                throw new Error(`O tamanho mínimo é ${min}`);
            } else {
                _value = value;
            }
        }
        Object.defineProperty(target,key,{
            get:getter,
            set:setter
        })
    }
}

class Api {
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name;
    }


};

const api = new Api('pro');
console.log(api.name);