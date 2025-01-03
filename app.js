const itemQuestion = document.querySelectorAll(".faqs__item-head");
const faqs = document.querySelectorAll(".faqs_anws");
const icon = document.querySelectorAll(".icon");
itemQuestion.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    faqs[index].classList.toggle("show");
    if (faqs[index].classList.contains("show")) {
      icon[index].src = "./assets/images/icon-minus.svg";
    } else {
      icon[index].src = "./assets/images/icon-plus.svg";
    }
  });
});
