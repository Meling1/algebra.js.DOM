class Dog {
  constructor() {
    console.log("x");
  }
  imePsa = "Rex";
  vrsta = "Seoski pas";
  godine = 1;
}

class GoldenRetriever extends Dog {
  constructor(godine, vrsta) {
    super();
    this.godine = godine;
    this.vrsta = vrsta;
  }
}
