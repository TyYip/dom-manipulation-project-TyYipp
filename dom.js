const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("box"),
  input1: document.getElementById('input1'),
  input2: document.getElementById('input2'),
  input3: document.getElementById('input3'),
  parent: document.querySelector('.parent'),
};

DOMSelectors.box.addEventListener("submit", function (event) {
  function addcard() {
    let input1 = DOMSelectors.input1.value;
    let input2 = DOMSelectors.input2.value;
    let input3 = DOMSelectors.input3.value;

    let newcard = 
    `<div class="child"> 
      <h2 class="text" id="card">${input1}</h2>
      <img src="${input2}" alt="" class="img">
      <h3 class="text" id="card">${input3}</h3>
      <button type="button" class="delete-button">Remove</button>
    </div>`;

    DOMSelectors.parent.insertAdjacentHTML("afterbegin", newcard);

    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach((button) => {
      button.addEventListener('click', deleteCard);
    });
  }

  function clear() {
    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  }

  function deleteCard(event) {
    const card = event.target.closest('.child');
    card.remove();
  }

  event.preventDefault();
  addcard();
  clear();
});