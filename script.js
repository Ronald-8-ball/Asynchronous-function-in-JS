async function subtraction(a,b) {
let response = await a - b;
display(response);
}
function display(some) {
document.write(some)
}
subtraction(100,50)