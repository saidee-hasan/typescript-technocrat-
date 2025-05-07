let course: string = "Next Level Web development";
console.log(course);  // Output: "Next Level Web development"

const add = (num1: number, num2: number): number => num1 + num2;
const result = add(40, 50);
console.log(result);  // Output: 90

const pooorUser = {
    name: "saidee hasan",
    blance: 0,
    addBalance(blance: number): string {
        return `New balance: ${this.blance + blance}`;
    }
};

console.log(pooorUser.addBalance(50));  // Output: "New balance: 50"