//Lexical Scope (Static Scope) a variable defined in one part of your program might not be accessable in another part of the program.

//Global Scope - Defined outside of all code blocks.
//Local Scope - Defined inside a code block.

//In a scope you can access variables defined in that scope, or in any parent/ancestor scope

//Scope Hierarchy: 
//Global Scope (varOne) (This is a parent scope of Local scope)
    // Local Scope (varTwo) (Global scope is the parent scope of this local scope) sibling to varThree
        //Local Scope (varFour) (Child scope of varTwo, and varOne)
    // Local Scope (varThree) (Sibling scope to varTwo)

let varOne = 'varOne'

if (true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true){
        let varFour = 'varFour'
    }
}

if (true){
    let varThree = 'varThree'
}
console.log(varTwo)