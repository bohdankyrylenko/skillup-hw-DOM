// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так как ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.
// Получить список всех ссылок, которые не находятся внутри списка ul
// Найти элемент, который находится перед и после списка ul

document.addEventListener("DOMContentLoaded", function () {
  function WhoYourDaddy(parent, child) {
    if (parent.contains(child)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(
    WhoYourDaddy(document.body.children[0], document.querySelector("mark"))
  );
  console.log(
    WhoYourDaddy(document.querySelector("ul"), document.querySelector("mark"))
  );
  let url = document.querySelectorAll("body a");
  console.log([...url].filter((url) => !url.closest("ul")));

  const ul1 = document.querySelector("ul").nextElementSibling;
  const ul2 = document.querySelector("ul").previousElementSibling;

  console.log(ul1);
  console.log(ul2);
});
