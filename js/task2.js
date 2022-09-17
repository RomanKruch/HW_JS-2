const inpNumber1 = +prompt('Введіть перше число');
const inpNumber2 = +prompt('Введіть друге число');
const inpNumber3 = +prompt('Введіть третє число');
let total = 0;

if (inpNumber1 < 0) {
    total += inpNumber1;
}
if (inpNumber2 < 0) {
    total += inpNumber2;
}
if (inpNumber3 < 0) {
    total += inpNumber3;
}

alert(`Сума = ${total}`);
