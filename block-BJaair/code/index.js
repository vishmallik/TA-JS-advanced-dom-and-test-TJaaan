// let root = document.querySelector("#root");
// let form = document.querySelector("form");
// let title = document.getElementById("title");

// function createUI(param1, param2) {
//   let li = document.createElement("li");
//   let p = document.createElement("p");
//   let h2 = document.createElement("h2");
//   p.innerText = param2;
//   p.tabIndex = "1";
//   h2.innerText = param1;
//   h2.tabIndex = "2";
//   p.addEventListener("dblclick", (ev) => {
//     ev.preventDefault();
//     p.contentEditable = true;
//     p.addEventListener("keyup", (event) => {
//       if (event.key === "Enter") {
//         p.blur();
//       }
//     });
//   });
//   h2.addEventListener("dblclick", (ev) => {
//     ev.preventDefault();
//     h2.contentEditable = true;
//     h2.addEventListener("keyup", (event) => {
//       if (event.key === "Enter") {
//         h2.blur();
//       }
//     });
//   });

//   li.append(p, h2);
//   root.append(li);
// }
// form.addEventListener("submit", handleSubmit);
// function handleSubmit(e) {
//   e.preventDefault();
//   let title = e.target.elements.title.value;
//   let category = e.target.elements.category.value;
//   createUI(title,category);
// }

let form = document.querySelector("form");
let root = document.querySelector("ul");

let cardsData = JSON.parse(localStorage.getItem("cards")) || [];
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;

  cardsData.push({ title, category });
  localStorage.setItem("cards", JSON.stringify(cardsData));
  createUI(cardsData, root);
}
function createUI(data = cardsData, rootElm = root) {
  rootElm.innerHTML = "";
  let fragment = new DocumentFragment();
  data.forEach((cardsInfo, i) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = cardsInfo.category;
    p.addEventListener("dblclick", (e) => {
      handleEdit(e, cardsInfo.category, i, "category");
    });
    let h2 = document.createElement("h2");
    h2.addEventListener("dblclick", (e) => {
      handleEdit(e, cardsInfo.title, i, "title");
    });
    h2.innerText = cardsInfo.title;
    li.append(p, h2);
    fragment.appendChild(li);
  });
  rootElm.append(fragment);
}
createUI(cardsData, root);

function handleEdit(e, info, index, label) {
  let input = document.createElement("input");
  input.value = info;
  input.addEventListener("keyup", (ev) => {
    if (ev.keyCode === 13) {
      cardsData[index][label] = ev.target.value;
      createUI();
      localStorage.setItem("cards", JSON.stringify(cardsData));
    }
  });
  input.addEventListener("blur", (ev) => {
    cardsData[index][label] = ev.target.value;
    createUI();
    localStorage.setItem("cards", JSON.stringify(cardsData));
  });
  let parent = e.target.parentElement;
  parent.replaceChild(input, e.target);
}
