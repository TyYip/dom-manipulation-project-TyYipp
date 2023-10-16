// const DOMSelectors = {
//     form: document.querySelector("#form"),
//     firstName: document.querySelector(".first-name"),
//     h2s: document.querySelectorAll("h2")
//     //select the text box 
//     //select all h2s in one property
// };
// // console.log(DOMSelectors.h2s);
// DOMSelectors.form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(DOMSelectors.firstName.value)
//     DOMSelectors.h2s.forEach((el)=> el.textContent = DOMSelectors.firstName.value
//     );
// });
const DOMSelectors = {
        form: document.querySelector("#form"),
        firstName: document.querySelector(".first-name"),
        h2s: document.querySelectorAll("h2")
 
    };
    function backgroundAndText(background, text) {
        background.style.backgroundColor = "red"
        text.innerHTML = "This is now a big red box"
    }
    backgroundAndText(DOMSelectors.box, DOMSelectors.text)
