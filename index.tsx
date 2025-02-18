const factorial = (n) => {
  if (n === 1) return n;
  return n * factorial(n - 1);
};

function powerOf(x, y) {
  if (y === 0) return 1;
  return x * powerOf(x, y - 1);
}
// console.log('factorial', factorial(5))
// console.log('factorial', powerOf(5, 3))

function fibonacci(n) {
  if (n === 1 || n === 0) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// for (let i = 1; i <= 50; i++) {
//   console.log(`fibonacci(${i})=`, fibonacci(i));
// }

function fibonacciMemo(n, memo = {}) {
  if (n === 1 || n === 0) return n;
  if (memo[n]) {
    return memo[n];
  }
  return (memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo));
}
// let orders = [5, 10, 15, 20, 30, 40, 50];
// for (const i of orders) {
//     console.log(`fibonacciMemo(${i})=`, fibonacciMemo(i))
// }

// for (let i = 1; i <= 50; i++){
//     console.log(`fibonacciMemo(${i})=`, fibonacciMemo(i))
// }
let memo = {};
function fibonacciMemo2(n) {
  if (n === 1 || n === 0) return n;
  if (memo[n]) {
    return memo[n];
  }
  return (memo[n] = fibonacciMemo2(n - 1) + fibonacciMemo2(n - 2));
}

// for (let i = 1; i <= 50; i++){
//     console.log(`fibonacciMemo2(${i})=`, fibonacciMemo2(i), memo[i])
// }

const binary = (n) => {
  if (n === 0 || n === 1) return `${n}`;
  return binary(Math.floor(n / 2)) + (n % 2).toString();
};

// let numbers = [2, 10, 40, 33];
// for (const n of numbers) {
//     console.log(`binary(${n})`, binary(n))
// }

function reverseOfString(str) {
  if (str === "") return "";
  return str[str.length - 1] + reverseOfString(str.slice(0, -1));
}

// console.log(`reverseOfString(`, reverseOfString('kunle'))

function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// for (let i = 0; i <= 5000; i++) {
//   console.log(`sumOfDigits(${i})`, sumOfDigits(i));
// }

function sumOfDigits3(n) {
  console.log(`Called sumOfDigits(${n})`); // Debugging line

  if (n < 10) {
    // Base case
    console.log(`Base case reached: returning ${n}`);
    return n;
  }

  let lastDigit = n % 10;
  let remainingPart = Math.floor(n / 10);

  console.log(`Last Digit: ${lastDigit}, Remaining Part: ${remainingPart}`);

  let result = lastDigit + sumOfDigits3(remainingPart);

  console.log(`Returning: ${result} for sumOfDigits(${n})`);

  return result;
}

// console.log(`sumOfDigits`, sumOfDigits3(123));

function isPalindrome(str) {
  console.log(`checking for ${str}`);
  if (str.length <= 1) {
    console.log(`Base case reached: ${str} is a palindrome`);
    return true;
  }
    
    if (str[str.length - 1] !== str[0]) {
        console.log(`${str[str.length - 1]} is not equal to ${str[0]} so ${str} is not a palindrome`);
        return false;
    }

    console.log(`Characters matched: ${str[0]} === ${str[str.length - 1]}, checking ${str.slice(1, -1)}`);


    return isPalindrome(str.slice(1, -1))
}
  

// console.log(`isPalindrome`, isPalindrome('do geese see god'));

function gcd(a, b) {
    console.log(`looking for gcd of (${a}, ${b})`); // Debugging line
  
    if (b === 0) {
      console.log(`Base case: gcd(${a}, ${b}) = ${a}`);
      return a;
    }
    let second = b
    let divisor = a % b
    
    console.log(`this the value of b = ${second}, a % b = ${divisor}`)
  
    return gcd(second, divisor);
}
  
console.log(`gcd`, gcd(55, 32));

