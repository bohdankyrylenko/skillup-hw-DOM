// Используя разметку из Задания 2:
// Найти параграф и получить его текстовое содержимое (только текст!)
// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
// Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат: -text-reprehendunt-text-nemore-text-
document.addEventListener("DOMContentLoaded", function () {
  const Paragraf = document.querySelector("p").textContent;
  console.log(Paragraf);

  function DOMinfo(el) {
    let DOM = document.querySelector(el);
    return {
      type: DOM.nodeType,
      name: DOM.nodeName,
      haveChildren: DOM.childNodes,
    };
  }
  console.log(DOMinfo("div"));

  function DOMarr() {
    let newarr = [];
    let ulel = document.querySelectorAll("li");
    for (let i = 0; i < ulel.length; i++) {
      newarr.push(ulel[i].textContent);
    }
    console.log(newarr);
  }
  DOMarr();

  p.childNodes.forEach((node) => {
    if (node.nodeName == "#text") {
      node.textContent = "-text-";
    }
  });
});
