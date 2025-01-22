//Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  console.log(isLeapYear(2024)); // Example: "2024 is a leap year."
console.log(isLeapYear(2023)); // Example: "2023 is not a leap

//Ticket Pricing
function getTicketPrice(age) {
    if (age <= 12) {
      return "Ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
      return "Ticket price is $15.";
    } else if (age >= 18) {
      return "Ticket price is $20.";
    } else {
      return "Invalid age.";
    }
  }
  
  console.log(getTicketPrice(16)); // Example: "Ticket price is $15."
console.log(getTicketPrice(25)); // Example: "Ticket price is $20."

//Fibonacci Sequence
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(6)); // Example: "8" (6th Fibonacci number)

//Palindrome Checker
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z]/g, "").toLowerCase(); // Remove spaces and punctuation
    function check(start, end) {
      if (start >= end) return true;
      if (str[start] !== str[end]) return false;
      return check(start + 1, end - 1);
    }
    return check(0, str.length - 1);
  }
  
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Example: "true"
  