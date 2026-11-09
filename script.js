// Select the form and table body elements
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
// Handle form submission using addEventListener()
studentForm.addEventListener("submit", function(event) 
{
// Prevent the page from refreshing
event.preventDefault();
// Check whether all required fields are valid
if(!studentForm.checkValidity()) 
{
studentForm.reportValidity();
return;
}
// Get values from all input fields
const firstName = document.getElementById("firstName").value.trim();
const lastName = document.getElementById("lastName").value.trim();
const email = document.getElementById("email").value.trim();
const address = document.getElementById("address").value.trim();
const pincode = document.getElementById("pincode").value.trim();
const gender = document.querySelector('input[name="gender"]:checked').value;
const state = document.getElementById("state").value.trim();
const country = document.getElementById("country").value.trim();
// Remove the empty table message when adding the first student
const emptyRow = document.getElementById("emptyRow"); 
if (emptyRow)
{
emptyRow.remove();
}
// Create a new table row
const newRow = document.createElement("tr");
// Create table cells
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");
const td5 = document.createElement("td");
const td6 = document.createElement("td");
const td7 = document.createElement("td");
const td8 = document.createElement("td");
// Insert values into table cells
td1.textContent = firstName;
td2.textContent = lastName;
td3.textContent = email;
td4.textContent = address;
td5.textContent = pincode;
td6.textContent = gender;
td7.textContent = state;
td8.textContent = country;
// Append cells to the new row
newRow.appendChild(td1);
newRow.appendChild(td2);
newRow.appendChild(td3);
newRow.appendChild(td4);
newRow.appendChild(td5);
newRow.appendChild(td6);
newRow.appendChild(td7);
newRow.appendChild(td8);
// Append new row to the table
studentTableBody.appendChild(newRow);
// Clear form after submission
studentForm.reset();
});






