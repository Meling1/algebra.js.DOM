/* const bark = () => "wuf wuf";

const barkx = function bark2() {
  return "wuf wuf";
};

console.log(bark);

console.log(barkx); */

const myArray = ["ime1", "ime2", "ime3"];

myArray.forEach((element) => {
  console.log(element);
  return element;
});

console.log(
  "iznad je novi nacin pisanja (arrow funkcija), ispod je stari nacin"
);

myArray.forEach(function (element) {
  console.log(element);
  return element;
});
