let count = 0;
function populate() {
  if (count === quotes.length) {
    count = 0;
  }
  while (true) {
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100) {
      break;
    }
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.innerText = quotes[count].quoteText;
    p.innerText = `- ${quotes[count++].quoteAuthor}`;
    document.body.append(h2, p);
  }
}
window.addEventListener("scroll", populate);
populate();

document.addEventListener(
  "DOMContentLoaded",
  alert(`The content of the DOM is loaded`)
);
