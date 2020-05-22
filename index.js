// Review code
let $add = document.getElementById("add");
let $result = document.getElementById("result");

$add.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = event.target.elements[0].value;
  let age = event.target.elements[1].value;

  $result.innerHTML = `Name: ${name} Age: ${age}`;
}); 
