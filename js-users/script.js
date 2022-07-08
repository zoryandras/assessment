const url = "https://assessment-users-backend.herokuapp.com/users";

let list = new Array();
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages = 0;


// fetching users data

function makeList() {
  async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map((user) => user);
    for (x = 0; x < data.length; x++) list.push(data[x]);
    loadList();
  }
  fetchUsers(url);
}

// function about how many pages there are based on the fetched users

function getNumberOfPages() {
  return Math.ceil(list.length / numberPerPage);
}

// function for pagination

function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

// pagination functions

function loadList() {
  let begin = (currentPage - 1) * numberPerPage;
  let end = begin + numberPerPage;
  
  numberOfPages = getNumberOfPages();
  
  pageList = list.slice(begin, end);
  drawList();
  check();
}

function check() {
  document.getElementById("next").disabled =
    currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled =
    currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled =
    currentPage == numberOfPages ? true : false;
}


// rendering the cards with the data of users

function drawList() {
    document.getElementById("currentPage").innerText = currentPage;
    document.getElementById("numberOfPages").innerText = numberOfPages;
    document.getElementById("list").innerHTML = "";

  for (let r = 0; r < pageList.length; r++) {
    document.getElementById("list").innerHTML += `<li class="card" id="card">
    <div class="info">
      <p>First name: ${pageList[r].first_name}</p>
      <p>Last name: ${pageList[r].last_name}</p>
      <p>Created at: ${new Date(
        pageList[r].created_at
      ).toLocaleDateString()}</p>
    </div>
    <div class="buttons">
      <button class="lockuser">LOCK</button>
      <button id="edituser">EDIT</button>
      <button id="newuser">NEW</button>
    </div>
    </li>`;
    lockUser();
  }
}

// changing the class of the card when clicking on LOCK button

function lockUser() {
  const cards = document.querySelectorAll(".info");
  const buttons = document.querySelectorAll(".lockuser");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      cards[i].classList.toggle("locked");
      localStorage;
    });
  }
}

// loading the page

function load() {

  makeList();

  loadList();
}

load();