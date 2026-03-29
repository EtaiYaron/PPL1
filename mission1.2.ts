import { product } from "ramda"

type Product = {
    name: string;
    price: number;
    discounted: boolean;
}

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
    let discountedItems = inventory.filter(product => product.discounted);
    let sum = discountedItems.reduce((acc, val) => acc + val.price, 0);
    let size = discountedItems.length
    return sum / size;
}

//(x, y) => x.some(y) answer: (x: T[], y: (val: T) => boolean) => boolean
//x => x.map(y => y * 2) answer: (x: number[]) => number[]
//(x, y) => x.filter(y) answer: (x: T[], y: (val: T) => boolean) =>  T[]
//x => x.reduce((acc, cur) => acc + cur, 0) answer: (x: number[]) => number
//(x, y) => x ? y[0] : y[1] answer: (x: boolean, y: T[]) => T
//(f,g) => x => f(g(x+1)) answer: (f: (arg: T) => S, g: (arg: number) => T) => (x: number) => S
