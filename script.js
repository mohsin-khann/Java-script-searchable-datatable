function addEntry() {
  const id = document.getElementById("id").value.trim();
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const contact = document.getElementById("contact").value.trim();

  if (!id || !name || !address || !contact) {
    alert("Please fill all fields!");
    return;
  }

  const tableBody = document.getElementById("tableBody");
  const rowHTML = `
    <tr>
      <td>${id}</td>
      <td>${name}</td>
      <td>${address}</td>
      <td>${contact}</td>
      <td><button class="btn-remove" onclick="removeRow(this)">Remove</button></td>
    </tr>
  `;
  tableBody.innerHTML += rowHTML;

  // Clear form fields
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("contact").value = "";
}

function removeRow(button) {
  button.closest("tr").remove();
}

function searchTable() {
  const searchTerm = document.getElementById("searchTable").value.toLowerCase();
  const rows = document.querySelectorAll("#tableBody tr");

  rows.forEach(row => {
    const id = row.cells[0].textContent.toLowerCase();
    const name = row.cells[1].textContent.toLowerCase();
    if (id.includes(searchTerm) || name.includes(searchTerm)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
