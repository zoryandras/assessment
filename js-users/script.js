const url = "https://assessment-users-backend.herokuapp.com/users";

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
