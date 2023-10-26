const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("box"),
    input1: document.getElementById('input1'),
    input2: document.getElementById('input2'),
  };
 
  DOMSelectors.box.insertAdjacentHTML(
    "beforebegin",
    `We can add text into an HTML file by writing it in JS!`
  );
 
 
  DOMSelectors.button.addEventListener("click", function () {
    let input1 = DOMSelectors.input1.value;
    let input2 = DOMSelectors.input2.value;
    DOMSelectors.box.insertAdjacentHTML(
      "afterend",
      `
      <div class="child">
          <h2 class="text" id="card">${input1}</h2>
          <h3 class="text" id="card">${input2}</h3>
          <button type="submit" id="delete">Delete</button>
      </div>
      `
    );
  });

