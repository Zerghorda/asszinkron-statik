import Aszinkron from "../js/asszinkron.js";
QUnit.test("adatBe metódus tesztje", (assert) => {
  const done = assert.async();
  const asszinkron = new Aszinkron();
  const vegpont = "../adatok.json";
  const callBackFuggvenyem = function (data) {
    assert.deepEqual(date, {
      szemelyek: [
        {
          kor: 56,
          nem: "ffi",
          nev: "Béla",
        },
        {
          kor: 16,
          nem: "ffi",
          nev: "Jenő",
        },
        {
          kor: 33,
          nem: "nő",
          nev: "Rózsa",
        },
      ],
    }),
      done();
  };
  asszinkron.adatBe(vegpont, callBackFuggvenyem);
});
