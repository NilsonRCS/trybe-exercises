let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let hNumbers = 9999;

for (let index =0;index < numbers.length;index++){
    if(numbers[index]  < hNumbers) {
        hNumbers = numbers[index]
    }
}
console.log(hNumbers)