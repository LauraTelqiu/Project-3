let textBox = document.querySelector(".text-box");
let firstBtn = document.querySelector("#tag1");
let secondBtn = document.querySelector("#tag2");
let thirdBtn = document.querySelector("#tag3");
let fourthBtn = document.querySelector("#tag4");
let fifthBtn = document.querySelector("#tag5");
let htmlDivs;
// let facts = [];

fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((data) => {
    let facts = data.map((cat) => {
      return cat.text;
    });

    renderCats(facts);
  });

function renderCats(facts) {
  let catPics = [
    "https://images.unsplash.com/photo-1598589290625-9b04630ec5d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1560970664-8d9800c49285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhdCUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60",
    "https://images.unsplash.com/photo-1608846361020-ec1f4a218925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80",
    "https://images.unsplash.com/photo-1533748539407-cae4ed7f9260?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1471874276752-65e2d717604a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0JTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60",
  ];

  htmlDivs = facts.map((fact, index) => {
    const catDisplay = `
      <div>
        <img src=${catPics[index]} alt="cat model">
        <h3>${fact}</h3>
      </div>
    `;

    return catDisplay;
  });

  textBox.insertAdjacentHTML("beforeend", htmlDivs[0]);
}

console.log(htmlDivs);

firstBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[0]);
});

secondBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[1]);
});

thirdBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[2]);
});

fourthBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[3]);
});

fifthBtn.addEventListener("click", () => {
  removePrevious(textBox);
  textBox.insertAdjacentHTML("beforeend", htmlDivs[4]);
});

// function that removes all elements inside of a container
function removePrevious(result) {
  while (result.lastChild) {
    result.removeChild(result.lastChild);
  }
}

// Call removePrevious when you need to remove previous search before rendering new search
// removePrevious(resultContainer);
