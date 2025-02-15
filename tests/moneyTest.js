
import formatCurrency from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency')

console.log('convert cents into dollars')
if (formatCurrency(2095) === '20.95'){
  console.log('passed')
}else {
  console.log('failed')
}

console.log('rounds up to the nearest 0')
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed')
} else {
  console.log('failed')
}


console.log('rounds down to the nearest 0')
if(formatCurrency(2000.4) === '20.00'){
  console.log('passed new')
} else {
  console.log('faileddddded')
}