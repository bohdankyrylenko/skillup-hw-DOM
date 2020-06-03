// Используя разметку из Задания 2:
// Найти в коде список ul и добавить класс “list”
// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// На li через один (начиная с самого первого) установить класс “item”
// На все ссылки в примере установить класс “custom-link”

document.addEventListener("DOMContentLoaded", function () {
  let url = document.querySelector("ul");
  url.classList.add("list");
  console.log(url.classList);
});

let a = document.querySelector("body > a");
a.setAttribute("id", "link");
console.log(a);

let addclass = document.querySelectorAll("li");

console.log(addclass);

let allTheLink = document.querySelectorAll("a");
allTheLink.forEach((link) => {
  link.classList.add("custom-link");
});
console.log(allTheLink);
});
