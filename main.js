let item = (ele) => document.getElementById(ele);
let valueSelected = '0';

const $point1 = item('point1');
const $point2 = item('point2');
const $point3 = item('point3');
const $point4 = item('point4');
const $point5 = item('point5');

const $rating = item('rating');
const $card = item('card');
const $btn = item('btn');

const $form = item('form');

$form.addEventListener('submit', (e) => {
  e.preventDefault();
})

const handleClick = (e) => {
  console.log('I am clicked');
}

const handleSubmit = () => {
  $rating.style.display='none';
  $card.style.display='block';
}

$point1.addEventListener('click', handleClick);
$point2.addEventListener('click', handleClick);
$point3.addEventListener('click', handleClick);
$point4.addEventListener('click', handleClick);
$point5.addEventListener('click', handleClick);
$btn.addEventListener('click', handleSubmit);
