let count = 0;

function increment() {
  let countAmount = document.getElementById("count-el");
  count++;
  return (countAmount.innerText = count);
}
