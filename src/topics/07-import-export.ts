import { Product, taxCalculation } from './06-functions-destructuring';

const shippingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
]

const [ total, tax ] = taxCalculation({
    products: shippingCart,
    tax: 0.15,
})

console.log('Total:', total)
console.log('Tax:', tax)