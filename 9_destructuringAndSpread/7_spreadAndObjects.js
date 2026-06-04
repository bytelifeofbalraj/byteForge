// Create an object `defaults` with {theme: 'light', fontSize: 14}. Create an object `userSettings` with {fontSize: 16, notifications: true}. Use spread to merge them into `settings` (userSettings should override defaults). Log the settings object.

let defaults = {
    theme: 'light',
    fontSize: 14,
}

let userSettings = {
    fontSize: 16,
    notifications: true,
}

let settings = {
    ...defaults,
    ...userSettings
}

console.log(settings)