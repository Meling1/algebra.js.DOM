// 1. napisite promise koji ceka funkciju getX
// 2. na resolved reagira sa console.log-om vrijednosti vracene vrijednosti,
// a na reject reagira sa console.log-om stringa "oh no!"

// 2. ako vec niste, prepisite sve funkcije u arrow funkcije

/*
function getX () {
    return Math.random() => 0.5;
} */

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise((resolve, reject) => {
  console.log("pozvan promise object");
  let x = getX();

  if (x == true) {
    return resolve;
  }
  return reject;
})

  .then(console.log("neka vrijednost"))
  .catch(console.log("oh no!"));
