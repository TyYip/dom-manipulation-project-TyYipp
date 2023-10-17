
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
    DOMSelectors.box.insertAdjacentHTML("beforebegin", "Hello")
