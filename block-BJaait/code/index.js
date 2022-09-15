let iconCollection = [
  { iconName: `eye`, iconHTML: `<i class="fa-solid fa-eye"></i>` },
  { iconName: `heart`, iconHTML: `<i class="fa-solid fa-heart"></i>` },
  { iconName: `dragon`, iconHTML: `<i class="fa-solid fa-dragon"></i>` },
  { iconName: `glasses`, iconHTML: `<i class="fa-solid fa-glasses"></i>` },
  { iconName: `shield`, iconHTML: `<i class="fa-solid fa-shield"></i>` },
  { iconName: `cube`, iconHTML: `<i class="fa-solid fa-cube"></i>` },
  { iconName: `hourglass`, iconHTML: `<i class="fa-solid fa-hourglass"></i>` },
  { iconName: `stamp`, iconHTML: `<i class="fa-solid fa-stamp"></i>` },
  { iconName: `pencil`, iconHTML: `<i class="fa-solid fa-pencil"></i>` },
  { iconName: `folder`, iconHTML: `<i class="fa-solid fa-folder"></i>` },
  { iconName: `barcode`, iconHTML: `<i class="fa-solid fa-barcode"></i>` },
  { iconName: `bug`, iconHTML: `<i class="fa-solid fa-bug"></i>` },
  { iconName: `compass`, iconHTML: `<i class="fa-solid fa-compass"></i>` },
  { iconName: `globe`, iconHTML: `<i class="fa-solid fa-globe"></i>` },
  { iconName: `play`, iconHTML: `<i class="fa-solid fa-play"></i>` },
  { iconName: `calendar`, iconHTML: `<i class="fa-solid fa-calendar"></i>` },
  { iconName: `crown`, iconHTML: `<i class="fa-solid fa-crown"></i>` },
  { iconName: `cloud`, iconHTML: `<i class="fa-solid fa-cloud"></i>` },
  { iconName: `bolt`, iconHTML: `<i class="fa-solid fa-bolt"></i>` },
  { iconName: `umbrella`, iconHTML: `<i class="fa-solid fa-umbrella"></i>` },
  { iconName: `sun`, iconHTML: `<i class="fa-solid fa-sun"></i>` },
  { iconName: `moon`, iconHTML: `<i class="fa-solid fa-moon"></i>` },
  { iconName: `star`, iconHTML: `<i class="fa-solid fa-star"></i>` },
  { iconName: `meteor`, iconHTML: `<i class="fa-solid fa-meteor"></i>` },
  { iconName: `music`, iconHTML: `<i class="fa-solid fa-music"></i>` },
  { iconName: `tv`, iconHTML: `<i class="fa-solid fa-tv"></i>` },
  { iconName: `phone`, iconHTML: `<i class="fa-solid fa-phone"></i>` },
  { iconName: `book`, iconHTML: `<i class="fa-solid fa-book"></i>` },
  { iconName: `clipboard`, iconHTML: `<i class="fa-solid fa-clipboard"></i>` },
  { iconName: `briefcase`, iconHTML: `<i class="fa-solid fa-briefcase"></i>` },
];

let rootIcon = document.querySelector(".icon-root");
let rootText = document.querySelector(".text-root");

function random(length) {
  let randomIndex = Math.floor(Math.random() * length);
  return randomIndex;
}

function selectedFive() {
  let final = [];
  for (let i = 0; i < 50; i++) {
    let index = random(iconCollection.length - 1);
    if (final.length < 5 && !final.includes(index)) {
      final.push(index);
    }
  }
  return final;
}

function createUI() {
  rootIcon.innerHTML = "";
  rootText.innerHTML = "";
  let selectedArray = selectedFive();
  let idForIcon = [...selectedArray].sort(() => 0.5 - Math.random());
  let idForText = [...selectedArray].sort(() => 0.5 - Math.random());
  for (let i = 0; i < 5; i++) {
    let id1 = idForIcon[i];
    let li = document.createElement("li");
    li.draggable = "true";
    li.innerHTML = iconCollection[id1].iconHTML;
    li.addEventListener("dragstart", handleDragStart);
    li.addEventListener("dragend", handleDragEnd);

    rootIcon.append(li);

    let id2 = idForText[i];
    let p = document.createElement("p");
    p.innerText = iconCollection[id2].iconName;
    let li2 = document.createElement("li");
    let div = document.createElement("div");
    div.classList.remove("over");
    div.addEventListener("dragenter", handleDragEnter);
    div.addEventListener("dragleave", handleDragLeave);
    div.addEventListener("dragover", handleDragOver);
    div.addEventListener("drop", handleDrop);

    li2.append(div, p);

    rootText.append(li2);
  }
}
function handleDragStart(e) {
  this.style.opacity = "0.4";
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = "1";
}
function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}
function handleDragOver(e) {
  e.preventDefault();
  return false;
}
function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove("wrong");
  let iconName = e.target.nextElementSibling.innerText;
  let dropElm = dragSrcEl.lastElementChild;
  if (dropElm.classList.contains(`fa-${iconName}`)) {
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
  } else {
    e.target.classList.add("wrong");
  }

  return false;
}
createUI();
