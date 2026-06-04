// Write a function named `calculateDiscount` that takes two parameters: `price` and `discountPercent`, and returns the discounted price. Add a comment above the function explaining what it does. Add an inline comment explaining the calculation.


// This function calculates the discounted price based on the original price and the discount percentage.

function calculateDiscount(price, discountPercent) {
    // Calculate the discount amount by multiplying the price with the discount percentage divided by 100
    const discountAmount = price * (discountPercent / 100);

    // Return the discounted price by subtracting the discount amount from the original price
    return price - discountAmount;
}   

// Example usage:
const originalPrice = 100;
const discount = 20;
const discountedPrice = calculateDiscount(originalPrice, discount);

console.log(`The discounted price is: $${discountedPrice}`); // Output: The discounted price is: $80        

