let item = (ele) => document.getElementById(ele);
let storedValue = "0";

const $point1 = item("point1");
const $point2 = item("point2");
const $point3 = item("point3");
const $point4 = item("point4");
const $point5 = item("point5");

const $rating = item("rating");
const $card = item("card");
const $btn = item("btn");
const $selectedScore = item('selectedScore');

const $form = item("form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const checkStyles = (e) => {
  const activeButton = document.querySelector('.active');
  if (activeButton) {
    activeButton.classList.remove('active');
  }
  e.target.classList.add('active');
}

const handleClick = (e) => {
  storedValue = e.target.value;
  checkStyles(e);
};

const handleSubmit = () => {
  changeDisplay();
  $selectedScore.innerHTML = storedValue;
};

const changeDisplay = () => {
  $rating.style.display = "none";
  $card.style.display = "flex";
};

$point1.addEventListener("click", handleClick);
$point2.addEventListener("click", handleClick);
$point3.addEventListener("click", handleClick);
$point4.addEventListener("click", handleClick);
$point5.addEventListener("click", handleClick);
$btn.addEventListener("click", handleSubmit);
