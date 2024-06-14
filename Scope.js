function outer() {
    
    function inner(a,b) {
        console.log(a);
        console.log(b);
        a = 'Wallop'
        b.name = 'Dewb'
        b.age = '19'
    }

    inner(a,b);
    console.log(a);
    console.log(b);
}

let a = 'Wallet'
let b = {name:'Dewey', age:9000}
console.log(a);
console.log(b);
outer();