// import "./style.css";
import { sampleData } from "./sampleData";
const btn = document.querySelector("button");
console.log("Hello");

btn.onclick = function () {
  console.log("You ran some JavaScript");
  alert("You ran some JavaScript");
};
window.loadTable = function () {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  console.log(sampleData);
  sampleData.forEach((rowData, i) => {
    console.log(rowData);
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const emailCell = document.createElement("td");
    nameCell.textContent = rowData.name;
    emailCell.textContent = rowData.email;
    row.style.backgroundColor = i % 2 === 0 ? "lightgray" : "white";
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};
