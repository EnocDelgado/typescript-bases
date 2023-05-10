// Traditional function
function addNumbers( a: any, b: number ) {
    return a + b;
}

// Lambda o Arrow function
const addArrowNumbers = ( a: number, b: number ): string => {
    return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;
}

// convert data
// const result: number = addNumbers( 1, 2 );
// const result2: string = addArrowNumbers( 3, 2 );
// const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });



/*--------------------------------------------------------------------------- */
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}


const strider: Character ={
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log( `Healing Point: ${ this.hp }` );
    }
}

healCharacter( strider, 10 );
healCharacter( strider, 50 );

export {};