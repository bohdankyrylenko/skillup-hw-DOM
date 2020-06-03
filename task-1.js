// Зная структуру html, с помощью изученных методов получить (в консоль):
// head
// body
// все дочерние элементы body и вывести их вконсоль.
// первый div и все его дочерние узлы
// вывести все дочерние узлы в консоль
// вывести в консоль все дочерние узлы, кроме первого и последнего
// Для навигации по DOM использовать методы, которые возвращают только элементы

document.addEventListener("DOMContentLoaded", function () {
  const elhead = document.querySelector("head");
  console.log(elhead);
  const elbody = document.querySelector("body");
  console.log(elbody);
  const elbodychildren = document.querySelector("body").children;
  console.log(elbodychildren);
  const eldivchildren1 = document.querySelector("div").children;
  console.log(eldivchildren1);
  const eldivchildren2 = document.querySelector("div").children;
  for (var i = 1; i < eldivchildren2.length - 1; ++i) {
    console.log(eldivchildren2[i]);
  }
});
