// three integteters

const num1 = Number(prompt('enter first number'));
const num2 = Number(prompt('enter second number'));
const num3 = Number(prompt('enter third number'));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum/3;

document.body.innerHTML = `
<p>Sum: ${sum}<p>
<p>Product: ${product}<p>
<p>Average: ${average}<p>
`