//generics
function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,2,3], [4,5,6]);
console.log(numArray);
