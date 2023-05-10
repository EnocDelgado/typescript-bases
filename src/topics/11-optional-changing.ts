

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Enoc',
}

const passenger2: Passenger = {
    name: 'Erika',
    children: [ 'Ethan', 'Elif']
}

const printChildren = ( passenger: Passenger ) => {
    
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, howManyChildren );
}

printChildren( passenger1 );