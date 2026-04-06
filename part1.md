### [25 points] Question 1.1
1. Explain in simple words the following programming paradigms:
i. [5 points] Imperative
ii. [5 points] Object Oriented
iii. [5 points] Functional
2. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
3. [5 points] How does the functional paradigm improve over the object oriented paradigm?


1.i: Imperative
Imperative programming is all about the how of getting a result. It focuses on exactly which steps you need to take to get closer to the goal you want. Basically, it’s a whole series of commands that the computer must follow in order to achieve the final result.

1.ii: Object-Oriented
OOP uses modularity and encapsulation to make systems easy to adapt as requirements change. This keeps certain classes unaware of internal details they don't need to see, maintaining the overall security and organization of the system. The program creates objects that transfer data and call methods.

1.iii: Functional
In Functional programming, the program is a sequence of expressions and not commands. The running of the program is just evaluating the value of those expressions; moreover, functions are also expressions and can be transferred as parameters to other functions.

2. How the Object-Oriented paradigm improves over the Imperative paradigm
OOP improves over the imperative paradigm by introducing modularity. Instead of a long list of instructions where a small change can break the whole program, OOP organizes code into self-contained objects. This makes it much easier to scale and maintain large systems because you can update one object without worrying about the internal details of another.

3. How the Functional paradigm improves over the Object-Oriented paradigm
The functional paradigm improves over OOP by removing side effects and the complexity of "state." In OOP, objects often change their internal data (state), which can lead to bugs that are hard to track. Functional programming treats everything as immutable expressions, making the code more predictable and easier to test since the same input will always give the exact same output.

### [10 points] Question 1.2
```ts
import { product } from "ramda"

type Product = {
    name: string;
    price: number;
    discounted: boolean;
};

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
    let discountedItems = inventory.filter(product => product.discounted);
    let sum = discountedItems.reduce((acc, val) => acc + val.price, 0);
    let size = discountedItems.length
    return sum / size;
};
```


### [18 points] Question 1.3

(x, y) => x.some(y) answer: (x: T[], y: (val: T) => boolean) => boolean
x => x.map(y => y * 2) answer: (x: number[]) => number[]
(x, y) => x.filter(y) answer: (x: T[], y: (val: T) => boolean) =>  T[]
x => x.reduce((acc, cur) => acc + cur, 0) answer: (x: number[]) => number
(x, y) => x ? y[0] : y[1] answer: (x: boolean, y: T[]) => T
(f,g) => x => f(g(x+1)) answer: (f: (arg: T) => S, g: (arg: number) => T) => (x: number) => S