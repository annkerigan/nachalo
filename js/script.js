let btn1 = document.querySelector(".circle__1");
let btn2 = document.querySelector(".circle__2");
let btn3 = document.querySelector(".circle__3");
let btn4 = document.querySelector(".circle__4");
let descriptionText1 = document.querySelector(".description__Text__1");
let descriptionText2 = document.querySelector(".description__Text__2");

btn1.addEventListener("mouseover", function () {
  descriptionText1.innerHTML = "Задание 3. Планиметрия";
  descriptionText2.innerHTML =
    "Изучим формулы простейших плоских фигур, порешаем задачи на нахождение периметров, площадей, высот и других измерений.";
}); /*функция, которая вписывает в поле текст при наведении мыши на кнопку*/
btn1.addEventListener("mouseout", function () {
  descriptionText1.innerHTML = "";
  descriptionText2.innerHTML =
    "Наведите курсор на кружок, чтобы узнать про тему...";
}); /*функция, которая заменяет текст на изначальный при уходе мыши с кнопки*/

btn2.addEventListener("mouseover", function () {
  descriptionText1.innerHTML = "Задание 5. Стереометрия";
  descriptionText2.innerHTML =
    "Поработаем с фигурами в пространстве, рассмотрим задачи на объемы, площади поверхностей и диагонали трехмерных фигур.";
});
btn2.addEventListener("mouseout", function () {
  descriptionText1.innerHTML = "";
  descriptionText2.innerHTML =
    "Наведите курсор на кружок, чтобы узнать про тему...";
});

btn3.addEventListener("mouseover", function () {
  descriptionText1.innerHTML = "Задание 13. Сложная стереометрия";
  descriptionText2.innerHTML =
    "Рассмотрим расположение точек, прямых и плоскостей в пространстве. Изучим сечения сложных фигур и порешаем задачи на сегменты круглых тел.";
});
btn3.addEventListener("mouseout", function () {
  descriptionText1.innerHTML = "";
  descriptionText2.innerHTML =
    "Наведите курсор на кружок, чтобы узнать про тему...";
});

btn4.addEventListener("mouseover", function () {
  descriptionText1.innerHTML = "Задание 16. Сложная планиметрия";
  descriptionText2.innerHTML =
    "Изкчим свойства сложных многоугольников, вписанных и описанных окружностей. Поработаем над доказательствами 'от обратного'.";
});
btn4.addEventListener("mouseout", function () {
  descriptionText1.innerHTML = "";
  descriptionText2.innerHTML =
    "Наведите курсор на кружок, чтобы узнать про тему...";
});
