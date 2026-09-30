/*
 Variables and data types:
  productName   : string 
  unitPrice     : number 
  quantityInput : string 
  taxRate       : number 
  quantity      : number  
  subtotal      : number  
  tax           : number  
  total         : number  
 */

const productName = "Wireless Headphones";
const unitPrice = 299.99;
const quantityInput = "3"; // deliberately as string
const taxRate = 0.15;

let quantity = parseInt(quantityInput, 10);

if (Number.isNaN(quantity)) {
  console.log("Invalid quantity. Cannot generate receipt.");
} else {
  // Do calculations and receipt
  const subtotal = unitPrice * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  console.log("Receipt");
  console.log(`Product: ${productName}`);
  console.log(`Unit Price: R${unitPrice.toFixed(2)}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Subtotal: R${subtotal.toFixed(2)}`);
  console.log(`Tax: R${tax.toFixed(2)}`);
  console.log(`Total: R${total.toFixed(2)}`);
}

//Edge-case demostration
const badQuantityInput = "abc";
const badQuantity = Number(badQuantityInput);
console.log(badQuantity); // NaN

/*
 What happened: Number("abc") can't interpret the text as a numeric
  value, so JavaScript doesn't throw an error. It returns NaN
  ("Not a Number"), a special number-typed value. 
 
 How a real application should handle it:  
 1. Validate immediately after casting with Number.isNaN() or
    Number.isInteger(), and never let NaN reach the calculations.
 2. Show a clear, user-facing error ("Please enter a whole number
     of 1 or more") rather than crashing or printing a bad total.
 3. Validate on both the client (for instant feedback) and the
    server (never trust the client).
*/