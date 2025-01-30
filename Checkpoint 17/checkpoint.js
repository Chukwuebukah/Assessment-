//Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }
  }
  
  iterateWithAsyncAwait([1, 2, 3, 4, 5]);
// Output: 1, 2, 3, 4, 5 (with

//Task 02: Awaiting a Call
async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Example API call
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  awaitCall();

//Task 03: Handling Errors with Async/Await
async function awaitCall() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid'); // Invalid URL to simulate error
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was an error fetching the data. Please try again later.');
    }
  }
  
  awaitCall();
  