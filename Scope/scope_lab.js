// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    //console.log(functionVar); // Throws ReferenceError
    //console.log(functionLet); // Throws ReferenceError
    //console.log(functionConst); // Throws ReferenceError

// Own tests
{
    let a = "Let variable";
    const b = "Constant variable";
    var c = "Var variable";

    //reassignment within block
    let a = "reassigned Let variable";
    a = "reassigned Let variable without let declaration keyword"
    const b = "reassigned Constant variable"
    b = "reassigned Constant variable without const declaration keyword"
    var c = "reassigned Var variable";
    c = "reassigned Var variable without var declaration keyword";
    console.log(a);
    console.log(b);
    console.log(c);
};

//reassignment outside of block
let a = "reassigned Let variable";
a = "reassigned Let variable without let declaration keyword";
const b = "reassigned Constant variable";
b = "reassigned Constant variable without const declaration keyword";
var c = "reassigned Var variable";
c = "reassigned Var variable without var declaration keyword";

console.log(a);
console.log(b);
console.log(c);