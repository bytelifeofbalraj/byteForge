// Create an object named `settings` with properties: `theme` = 'dark', `fontSize` = 16, and `notifications` = true. Use Object.entries() to get all key-value pairs as an array, store it in a variable `entries`, and log it.

const settings = {
    theme: 'dark',
    fontSize: 16,
    notifications: true
};

const entries = Object.entries(settings);
console.log(entries);

