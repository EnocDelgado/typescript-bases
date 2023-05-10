
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy s23',
    price: 1400.0
};

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
};


interface TaxtCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxtCalculationOptions ): [number, number] {

    // Destructuring
    const {tax, products} = options;

    let total = 0;

    // Iterateing over an element
    products.forEach( ({ price }) => {
        total += price;
    })

    return [ total, total * tax ]
}

const shoppingCart = [ phone, tablet ]
const tax = 0.15

const [ total, totalTax ] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})

console.log('Total:', total )
console.log('Tax:', totalTax )

export {}