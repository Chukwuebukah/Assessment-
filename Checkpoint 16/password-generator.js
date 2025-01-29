const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,           // Set the desired length of the password
    numbers: true,        // Include numbers in the password
    symbols: true,        // Include symbols in the password
    uppercase: true,      // Include uppercase letters in the password
    lowercase: true       // Include lowercase letters in the password
  });
  
  console.log(password);  // Log the generated password to the console
}

// Call the function to generate and log the password
generateRandomPassword();

