// Take a messy order string like "   cApPuCcInO   " and turn it into a clean, ready-to-print screen label like: "Order: cappuccino".

const trimText = (text) => text.trim() // first this should run
const lowerText = (text) => text.toLowerCase() // second
const lableText = (text) => `Order: ${text}` // final

function compose(trimText, lowerText, lableText){
   return function engineFunction(text){
    return lableText(lowerText(trimText(text)))
   }
}

const textFunctionPipeline = compose(trimText, lowerText, lableText)

console.log(textFunctionPipeline("   cApPuCcInO   "))




