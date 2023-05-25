import Statisztika from "../js/Statisztika.js";
QUnit.module("Statisztika ell", function (hooks) {
  let statisztika;
  hooks.before(() => {
    statisztika = new Statisztika();
  });

  QUnit.test("ellenőrzés létezik a nemszerintSzama?", function (assert) {
    assert.ok(statisztika.nemszerintSzama, "létezik");
  });

  QUnit.test("ellenőrzés létezik a atlagEletkor?", function (assert) {
    assert.ok(statisztika.atlagEletkor, "létezik");
  });

  QUnit.test(
    "ellenőrzés létezika a nemszerintAtlagEletkora ?",
    function (assert) {
      assert.ok(statisztika.nemszerintAtlagEletkora, "létezik");
    }
  );

  QUnit.test("függvény-e a nemszerintSzama?", function (assert) {
    assert.ok(statisztika.nemszerintSzama, "függvény-e a nemszerintSzama?");
  });

  QUnit.test("függvény-e a atlagEletkor?", function (assert) {
    assert.ok(statisztika.atlagEletkor, "függvény-e a atlagEletkor?");
  });

  QUnit.test("függvény-e a nemszerintAtlagEletkora?", function (assert) {
    assert.ok(
      statisztika.nemszerintAtlagEletkora,
      "függvény-e a nemszerintAtlagEletkora?"
    );
  });

  QUnit.test("üres lista", function (assert) {
    let szemelyek = [];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama("ffi"), 0);
  });
  QUnit.test("nő lista", function (assert) {
    let szemelyek = [{ nem: "nő" }, { nem: "nő" }, { nem: "nő" }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama("nő"), 3);
  });

  QUnit.test("ffi lista", function (assert) {
    let szemelyek = [{ nem: "ffi" }, { nem: "ffi" }, { nem: "ffi" }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama("ffi"), 3);
  });

  QUnit.test("csak 1 ffi van a listaban", function (assert) {
    let szemelyek = [{ nem: "nő" }, { nem: "nő" }, { nem: "ffi" }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama("ffi"), 1);
  });

  QUnit.test("csak 1 nő van a listaban", function (assert) {
    let szemelyek = [{ nem: "nő" }, { nem: "ffi" }, { nem: "ffi" }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama("nő"), 1);
  });

  QUnit.test("csak 1 üres van a listaban", function (assert) {
    let szemelyek = [{ nem: " " }, { nem: "ffi" }, { nem: "ffi" }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintSzama(" "), 1);
  });

  QUnit.test("Átlag életkor mükszik?", function (assert) {
    let szemelyek = [{ kor: 20 }, { kor: 10 }, { kor: 45 }];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.atlagEletkor(), 25);
  });

  QUnit.test("nők átlag életkőra életkor mükszik?", function (assert) {
    let szemelyek = [
      { nem: "nő", kor: 20 },
      { nem: "nő", kor: 10 },
      { nem: "ffi", kor: 45 },
    ];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintAtlagEletkora("nő"), 15);
  });

  QUnit.test("ffi átlag életkőra életkor mükszik?", function (assert) {
    let szemelyek = [
      { nem: "ffi", kor: 20 },
      { nem: "nő", kor: 10 },
      { nem: "ffi", kor: 45 },
    ];
    let statisztika = new Statisztika(szemelyek);
    assert.equal(statisztika.nemszerintAtlagEletkora("ffi"), 32.5);
  });
});
