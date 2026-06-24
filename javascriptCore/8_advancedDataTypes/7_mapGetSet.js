// Create an empty Map named `scores`. Use set() to add 'math' with value 95, then 'science' with value 88. Use get() to retrieve the math score and store in `mathScore`. Log the mathScore.

let scores = new Map()

scores.set("math", 95)
scores.set('science', 88)

let mathScore = scores.get('math')

console.log(mathScore)