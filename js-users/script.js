const url = "https://assessment-users-backend.herokuapp.com/users";

let list = new Array();
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 10;
let numberOfPages = 0;

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

function loadList() {
  let begin = (currentPage - 1) * numberPerPage;
  let end = begin + numberPerPage;

  numberOfPages = getNumberOfPages();

  pageList = list.slice(begin, end);
  drawList();
  check();
}

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