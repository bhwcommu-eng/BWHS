function generateLetter() {
  const name = document.getElementById("studentName").value.trim();
  document.getElementById("nameField").innerText = name || "________________";
}
