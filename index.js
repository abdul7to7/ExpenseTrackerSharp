//Loading Data in local Storage
const ul = document.getElementById("list");
let items = JSON.parse(localStorage.getItem("Data")) || [];
items.forEach((item) => {
  let expAmt = item[0];
  let desc = item[1];
  let cat = item[2];

  let newLi = document.createElement("li");
  let delBtn = document.createElement("button");
  let editBtn = document.createElement("button");

  editBtn.innerText = "Edit Expense";
  delBtn.innerText = "Delete Expense";

  delBtn.classList = "delBtn";
  delBtn.classList = "btn";
  delBtn.classList = "btn-danger";
  editBtn.classList = "editBtn";
  editBtn.classList = "btn";
  editBtn.classList = "btn-primary";

  delBtn.setAttribute("type", "button");
  editBtn.setAttribute("type", "button");

  let newTextNode1 = document.createTextNode(`${expAmt}`);
  let newTextNode2 = document.createTextNode(`${desc}`);
  let newTextNode3 = document.createTextNode(`${cat}`);

  newLi.appendChild(newTextNode1);
  newLi.appendChild(document.createTextNode(` - `));
  newLi.appendChild(newTextNode2);
  newLi.appendChild(document.createTextNode(` - `));
  newLi.appendChild(newTextNode3);
  newLi.appendChild(editBtn);
  newLi.appendChild(delBtn);

  const ul = document.getElementById("list");
  ul.appendChild(newLi);
});

//Add a new Expense
let btn = document.getElementsByClassName("btn")[0];
btn.addEventListener("click", () => {
  const expAmt = document.getElementById("expenseAmount").value;
  const desc = document.getElementById("description").value;
  const cat = document.getElementById("category").value;
  console.log(expAmt, desc, cat);

  let newLi = document.createElement("li");
  let delBtn = document.createElement("button");
  let editBtn = document.createElement("button");

  editBtn.innerText = "Edit Expense";
  delBtn.innerText = "Delete Expense";

  delBtn.classList = "delBtn";
  delBtn.classList = "btn";
  delBtn.classList = "btn-danger";
  editBtn.classList = "editBtn";
  editBtn.classList = "btn";
  editBtn.classList = "btn-primary";

  delBtn.setAttribute("type", "button");
  editBtn.setAttribute("type", "button");

  let newTextNode1 = document.createTextNode(`${expAmt}`);
  let newTextNode2 = document.createTextNode(`${desc}`);
  let newTextNode3 = document.createTextNode(`${cat}`);

  newLi.appendChild(newTextNode1);
  newLi.appendChild(document.createTextNode(` - `));
  newLi.appendChild(newTextNode2);
  newLi.appendChild(document.createTextNode(` - `));
  newLi.appendChild(newTextNode3);
  newLi.appendChild(editBtn);
  newLi.appendChild(delBtn);

  const ul = document.getElementById("list");
  ul.appendChild(newLi);

  let items = JSON.parse(localStorage.getItem("Data")) || [];
  items.push([expAmt, desc, cat]);
  localStorage.setItem("Data", JSON.stringify(items));
});

//Remove Item
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delBtn")) {
    let parentElement = e.target.parentElement;
    ul.removeChild(parentElement);
    console.dir(parentElement);

    let expAmt = parentElement.childNodes[0].textContent;
    let desc = parentElement.childNodes[2].textContent;
    let cat = parentElement.childNodes[4].textContent;
    // console.log(expAmt, desc, cat);

    let items = JSON.parse(localStorage.getItem("Data"));
    items = items.filter((item) => {
      //   console.log(item);
      //   console.log([expAmt, desc, cat]);
      if (item[0] != expAmt || item[1] != desc || item[2] != cat) return item;
    });
    localStorage.setItem("Data", JSON.stringify(items));
  }
});
