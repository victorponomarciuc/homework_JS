document.write("Pentru vizionarea rezultatului in consola accesati DevTools (F12) <br /> <br />")
//Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
let i, sum = 0;
for (i = 10; i <= 20; i += 2){
  sum += i;
}
console.log('Suma numerelor pare din interval este:',sum);
document.write('Suma numerelor pare din interval este:',sum, " <br /> <br />");

//Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Error, если введено не число
(function CheckNumber(messageN){
  var messageN = messageN == undefined ? "" : messageN;
  var response = prompt(messageN + "Introduceti un simbol sau un numar real", "");
  if(response == null || response  == undefined){
      return;
  }
  var result = +response
  if(isNaN(result)){
      debugger;
      response = CheckNumber(response + " Error! Simbolul introdus nu este număr");
  }else if(typeof(result) == "number"){
      var message = (result > 0 )
                    ? 1
                    : (result < 0 )
                          ? -1
                          : 0;
    alert(message)
  }
  
}())

//Создать массив и произвести над ним следующие 5 операций:
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//Удалите первый элемент массива и покажите его.
//Вставьте «Рэп» и «Регги» в начало массива.
document.write("Mai jos este prezentat masivul analog cu cel din consola <br />");
let styles = ["Джаз", "Блюз"];
console.log(styles);
document.write(styles, "<br />");

styles.push("Рок-н-ролл");
console.log(styles);
document.write(styles, "<br />");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles);
document.write(styles, "<br />");

console.log(styles.shift());
document.write(styles,"<br />");

styles.unshift("Рэп", "Регги");
console.log(styles);
document.write(styles, "<br />");
