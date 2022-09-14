let root = document.querySelector("#root");
let form = document.querySelector("form");
let title = document.getElementById("title");
function createUI(param1, param2) {
  let li = document.createElement("li");
  let p = document.createElement("p");
  let h2 = document.createElement("h2");
  p.innerText = param2;
  p.tabIndex = "1";
  h2.innerText = param1;
  h2.tabIndex = "2";
  p.addEventListener("dblclick", (ev) => {
    ev.preventDefault();
    p.contentEditable = true;
    p.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        p.blur();
      }
    });
  });
  h2.addEventListener("dblclick", (ev) => {
    ev.preventDefault();
    h2.contentEditable = true;
    h2.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        h2.blur();
      }
    });
  });

  li.append(p, h2);
  root.append(li);
}
form.addEventListener("submit", handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  createUI(form.elements.title.value, form.elements.category.value);
}
