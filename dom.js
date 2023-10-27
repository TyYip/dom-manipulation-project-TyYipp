const DOMSelectors = {
    button: document.getElementById("btn"),
    box: document.getElementById("box"),
    input1: document.getElementById('input1'),
    input2: document.getElementById('input2'),
    input3: document.getElementById('input3'),
  };
 
  DOMSelectors.box.insertAdjacentHTML(
    "beforebegin",
    `We can add text into an HTML file by writing it in JS!`
  );
 

  DOMSelectors.button.addEventListener("click", function () {
    let input1 = DOMSelectors.input1.value;
    let input2 = DOMSelectors.input2.value;
    let input3 = DOMSelectors.input3.value;
    DOMSelectors.box.insertAdjacentHTML(
      "afterend",
      `
    <div class="parent">
      <div class="child">
          <h2 class="text" id="card">${input1}</h2>
          <img src="${input2}" alt="" class="img">
          <h3 class="text" id="card">${input3}</h3>
          <button type="submit" id="delete">Remove</button>
      </div>
    </div>
      `
    );
    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  });
//   function remove() {
//     let btns = document.querySelectorAll('button');
//     btns.forEach((button) => button.addEventListener("click", function (event) {
//       console.log(event.target.parentElement);
//     }))
    
// }
remove()
  function remove() {
    let remove = document.querySelectorAll('#delete');
    remove.forEach((button) => button.addEventListener("click", function (event) {
      console.log(event.target.parentElement);
      button.remove();
    }))
    
}
remove()