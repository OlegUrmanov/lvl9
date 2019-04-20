describe("RecoveryPassword", function() {

  describe("Генерирует проверочный код", function() {

    function makeTest(x) {

      var expected = "121";
      it("пример №" + x + " результат: " + expected, function() {
        assert.equal(RecoveryPassword(), expected);
      });
    }

    for (var x = 1; x <= 2; x++) {
      makeTest(x);
    }
  });
});

describe("Email", function() {

  describe("Отправка Email", function() {

    function makeTest(x){

      var expected = "На Email: aadsf@mail.ru Вышлен проверочный код: 121";
      it("Пример №" + x + " результат: " + expected, function(){
        assert.equal(Email(), expected);
      });
    }

    for (var x = 1; x <= 2; x++) {
      makeTest(x);
    }
  });
});


describe("SMS", function() {

  describe("Отправка SMS", function() {

    function makeTest(x){

      var expected = "На Номер: 89613736991 Вышлен проверочный код: 121";
      it("Пример №" + x + " результат: " + expected, function(){
        assert.equal(SMS(), expected);
      });
    }

    for (var x = 1; x <= 2; x++) {
      makeTest(x);
    }
  });
});
