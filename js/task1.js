let inpNumber = prompt('Введіть число :');

if (inpNumber === null) {
    alert('Скасовано!');
} else {
   inpNumber = Number(inpNumber);
   
   if (Number.isNaN(inpNumber)) {
    alert('Введено не число!');
   } else if (inpNumber % 5 === 0 || inpNumber % 15 === 0) {
    alert(`Число ${inpNumber} гарне`);
   } else {
    alert(`Число  ${inpNumber} не гарне`);
   }
}